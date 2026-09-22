import { useState, useEffect, useRef, useCallback } from 'react';
import { useDeviceOrientation, useManualOverride } from './hooks/useDeviceOrientation';
import { useVibration, AnswerType } from './hooks/useVibration';
import Ghost from './components/Ghost';

type Phase = 'idle' | 'face-down' | 'stabilization' | 'reveal' | 'hold' | 'fade-out';

function getRandomAnswer(): AnswerType {
  const rand = Math.random();
  if (rand < 0.45) return 'yes';
  if (rand < 0.90) return 'no';
  return 'uncertain';
}

function getAnswerText(answer: AnswerType): string {
  switch (answer) {
    case 'yes': return 'ДА';
    case 'no': return 'НЕТ';
    case 'uncertain': return '...';
  }
}

function getAnswerClass(answer: AnswerType): string {
  switch (answer) {
    case 'yes': return 'text-answer-yes';
    case 'no': return 'text-answer-no';
    case 'uncertain': return 'text-answer-uncertain';
  }
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [answer, setAnswer] = useState<AnswerType | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showDebug, setShowDebug] = useState(false);
  const [totalReadings, setTotalReadings] = useState(0);

  const { orientation, requestPermission } = useDeviceOrientation();
  const manual = useManualOverride();
  const { vibrate, stopVibration } = useVibration();

  const faceDownSinceRef = useRef<number | null>(null);
  const stabilizationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use device sensors if available, otherwise manual override
  const isFaceDown = orientation.isSupported ? orientation.isFaceDown : manual.isFaceDown;
  const isFaceUp = orientation.isSupported ? orientation.isFaceUp : manual.isFaceUp;

  // Clear all timers
  const clearTimers = useCallback(() => {
    if (stabilizationTimerRef.current) clearTimeout(stabilizationTimerRef.current);
    if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
  }, []);

  // State machine: handle face-down detection
  useEffect(() => {
    if (phase === 'idle' && isFaceDown) {
      faceDownSinceRef.current = Date.now();
      setPhase('face-down');
    }
  }, [isFaceDown, phase]);

  // State machine: handle flip to face-up
  useEffect(() => {
    if (phase === 'face-down' && isFaceUp) {
      setPhase('stabilization');

      // Bake the answer during stabilization
      const bakedAnswer = getRandomAnswer();
      setAnswer(bakedAnswer);

      // After 1.0s stabilization → reveal
      stabilizationTimerRef.current = setTimeout(() => {
        setPhase('reveal');
        setShowAnswer(true);

        // Trigger vibration
        vibrate(bakedAnswer);

        // After reveal animation (0.3s) → hold for 2.0s
        revealTimerRef.current = setTimeout(() => {
          setPhase('hold');

          // After 2.0s hold → fade out
          fadeTimerRef.current = setTimeout(() => {
            setPhase('fade-out');
            setIsFadingOut(true);

            // After fade-out (3.0s) → back to idle
            setTimeout(() => {
              setPhase('idle');
              setShowAnswer(false);
              setIsFadingOut(false);
              setAnswer(null);
              stopVibration();
              setTotalReadings(prev => prev + 1);
            }, 3000);
          }, 2000);
        }, 300);
      }, 1000);
    }
  }, [isFaceUp, phase, vibrate, stopVibration]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  // Dismiss intro
  const handleStart = useCallback(async () => {
    if (orientation.needsPermission) {
      await requestPermission();
    }
    setShowIntro(false);
  }, [orientation.needsPermission, requestPermission]);

  // Debug toggle
  const toggleDebug = useCallback(() => {
    setShowDebug(prev => !prev);
  }, []);

  // Render phases
  const renderPhase = () => {
    switch (phase) {
      case 'idle':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-ghost-float mb-8">
              <Ghost answer={null} isAnimating={false} isIdle={true} />
            </div>
            <p className="text-white/40 text-sm text-center px-8">
              {orientation.isSupported
                ? 'Положи телефон экраном вниз, загадай вопрос...'
                : 'Нажми кнопку ниже для имитации переворота'}
            </p>
            {!orientation.isSupported && (
              <div className="mt-8 flex gap-4">
                <button
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm active:bg-white/10 transition-colors"
                  onClick={() => manual.setFaceDown()}
                >
                  📱 Экраном вниз
                </button>
              </div>
            )}
            {totalReadings > 0 && (
              <p className="mt-6 text-white/20 text-xs">
                Получено ответов: {totalReadings}
              </p>
            )}
          </div>
        );

      case 'face-down':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full border border-white/10 animate-pulse-dim" />
            <p className="mt-8 text-white/20 text-xs text-center">
              Тишина...
            </p>
          </div>
        );

      case 'stabilization':
        return (
          <div className="flex flex-col items-center justify-center h-full screen-black">
            <div className="w-2 h-2 rounded-full bg-white/10 animate-breathe" />
          </div>
        );

      case 'reveal':
      case 'hold':
      case 'fade-out':
