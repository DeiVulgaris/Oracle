import { useCallback } from 'react';

export type AnswerType = 'yes' | 'no' | 'uncertain';

export function useVibration() {
  const vibrate = useCallback((answer: AnswerType) => {
    if (!('vibrate' in navigator)) {
      console.log('Vibration not supported');
      return;
    }

    switch (answer) {
      case 'yes':
        // Монолитный, плотный непрерывный сигнал длительностью 1.0 секунду
        navigator.vibrate(1000);
        break;

      case 'no':
        // Три хлестких удара: 150мс vib / 150мс pause / 150мс vib / 150мс pause / 150мс vib
        navigator.vibrate([150, 150, 150, 150, 150]);
        break;

      case 'uncertain':
        // Тактильный шлейф неопределённости: 150мс / 250мс pause / 800мс мягкая затухающая
        navigator.vibrate([150, 250, 800]);
        break;
    }
  }, []);

  const stopVibration = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(0);
    }
  }, []);

  return { vibrate, stopVibration };
}
