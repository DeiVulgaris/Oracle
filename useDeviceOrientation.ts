import { useState, useEffect, useCallback, useRef } from 'react';

export interface OrientationData {
  alpha: number | null; // compass
  beta: number | null;  // front-back tilt (-180 to 180)
  gamma: number | null; // left-right tilt (-90 to 90)
  isFaceDown: boolean;  // phone screen facing table
  isFaceUp: boolean;    // phone screen facing user
  isSupported: boolean;
  needsPermission: boolean;
}

const FACE_DOWN_THRESHOLD = 150; // beta > 150 means phone is face down
const FACE_UP_THRESHOLD = 30;    // beta < 30 means phone is face up

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState<OrientationData>({
    alpha: null,
    beta: null,
    gamma: null,
    isFaceDown: false,
    isFaceUp: true,
    isSupported: false,
    needsPermission: false,
  });

  const [permissionGranted, setPermissionGranted] = useState(false);
  const prevFaceDownRef = useRef(false);
  const prevFaceUpRef = useRef(true);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const beta = event.beta; // -180 to 180
    const gamma = event.gamma; // -90 to 90
    const alpha = event.alpha; // 0 to 360

    // Face down: phone is upside down (beta near 180 or -180)
    const isFaceDown = beta !== null && Math.abs(beta) > FACE_DOWN_THRESHOLD;

    // Face up: phone is screen-up (beta near 0)
    const isFaceUp = beta !== null && Math.abs(beta) < FACE_UP_THRESHOLD && Math.abs(gamma ?? 0) < 45;

    setOrientation({
      alpha: alpha ?? null,
      beta: beta ?? null,
      gamma: gamma ?? null,
      isFaceDown,
      isFaceUp,
      isSupported: true,
      needsPermission: false,
    });

    prevFaceDownRef.current = isFaceDown;
    prevFaceUpRef.current = isFaceUp;
  }, []);

  useEffect(() => {
    // Check if DeviceOrientation is supported
    if (!('DeviceOrientationEvent' in window)) {
      setOrientation(prev => ({ ...prev, isSupported: false }));
      return;
    }

    // Check if permission is needed (iOS 13+)
    const DOE = DeviceOrientationEvent as any;
    if (typeof DOE.requestPermission === 'function') {
      setOrientation(prev => ({ ...prev, needsPermission: true, isSupported: true }));
      return;
    }

    // Android and older iOS — just listen
    window.addEventListener('deviceorientation', handleOrientation);
    setOrientation(prev => ({ ...prev, isSupported: true, needsPermission: false }));

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [handleOrientation]);

  const requestPermission = useCallback(async () => {
    const DOE = DeviceOrientationEvent as any;
    if (typeof DOE.requestPermission === 'function') {
      try {
        const permission = await DOE.requestPermission();
        if (permission === 'granted') {
          setPermissionGranted(true);
          window.addEventListener('deviceorientation', handleOrientation);
          setOrientation(prev => ({ ...prev, needsPermission: false }));
          return true;
        }
        return false;
      } catch (e) {
        console.error('Permission error:', e);
        return false;
      }
    }
    return true;
  }, [handleOrientation]);

  return { orientation, requestPermission, permissionGranted };
}

// Manual override for desktop testing
export function useManualOverride() {
  const [isFaceDown, setIsFaceDown] = useState(false);
  const [isFaceUp, setIsFaceUp] = useState(true);

  const setFaceDown = useCallback(() => {
    setIsFaceDown(true);
    setIsFaceUp(false);
  }, []);

  const setFaceUp = useCallback(() => {
    setIsFaceDown(false);
    setIsFaceUp(true);
  }, []);

  return { isFaceDown, isFaceUp, setFaceDown, setFaceUp };
}
