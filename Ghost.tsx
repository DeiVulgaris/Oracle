import { AnswerType } from '../hooks/useVibration';

interface GhostProps {
  answer: AnswerType | null;
  isAnimating: boolean;
  isIdle: boolean;
}

export default function Ghost({ answer, isAnimating, isIdle }: GhostProps) {
  const getAnimationClass = () => {
    if (!isAnimating) return isIdle ? 'animate-ghost-float' : '';

    switch (answer) {
      case 'yes': return 'animate-nod-yes';
      case 'no': return 'animate-shake-no';
      case 'uncertain': return 'animate-shrug';
      default: return '';
    }
  };

  const getEyeColor = () => {
    switch (answer) {
      case 'yes': return '#ef4444';
      case 'no': return '#9ca3af';
      case 'uncertain': return '#3b82f6';
      default: return '#ffffff';
    }
  };

  const getEyebrowTransform = () => {
    if (isAnimating && answer === 'uncertain') {
      return 'animate-eyebrow-raise';
    }
    return '';
  };

  return (
    <div className={`relative ${getAnimationClass()}`}>
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ghost body */}
        <path
          d="M60 10 C35 10 20 30 20 55 L20 100 Q25 110 35 105 Q45 100 50 105 Q55 110 60 105 Q65 100 70 105 Q75 110 80 105 Q90 100 95 105 Q100 110 100 100 L100 55 C100 30 85 10 60 10Z"
          fill="white"
          fillOpacity="0.9"
          stroke="white"
          strokeWidth="1"
        />

        {/* Inner glow */}
        <path
          d="M60 15 C38 15 25 33 25 55 L25 95 Q30 103 37 99 Q47 95 52 99 Q57 103 60 99 Q63 95 68 99 Q73 103 78 99 Q88 95 93 99 Q98 103 95 95 L95 55 C95 33 82 15 60 15Z"
          fill="white"
          fillOpacity="0.1"
        />

        {/* Eyes */}
        <g>
          {/* Left eye */}
          <ellipse
            cx="45"
            cy="50"
            rx="8"
            ry="10"
            fill={getEyeColor()}
            className="transition-colors duration-300"
          />
          {/* Left pupil */}
          <ellipse
            cx="45"
            cy="52"
            rx="4"
            ry="5"
            fill="#000"
          />

          {/* Right eye */}
          <ellipse
            cx="75"
            cy="50"
            rx="8"
            ry="10"
            fill={getEyeColor()}
            className="transition-colors duration-300"
          />
          {/* Right pupil */}
          <ellipse
            cx="75"
            cy="52"
            rx="4"
            ry="5"
            fill="#000"
          />
        </g>

        {/* Eyebrows */}
        <g className={getEyebrowTransform()}>
          {/* Left eyebrow */}
          <path
            d="M35 35 Q45 30 55 35"
            stroke={getEyeColor()}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300"
          />
          {/* Right eyebrow */}
          <path
            d="M65 35 Q75 30 85 35"
            stroke={getEyeColor()}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300"
          />
        </g>

        {/* Mouth - changes based on answer */}
        {answer === 'yes' && isAnimating && (
          /* Confident smile for YES */
          <path
            d="M45 70 Q60 82 75 70"
            stroke={getEyeColor()}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        )}
        {answer === 'no' && isAnimating && (
          /* Frown for NO */
          <path
            d="M45 78 Q60 68 75 78"
            stroke={getEyeColor()}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        )}
        {answer === 'uncertain' && isAnimating && (
          /* Wavy uncertain mouth */
          <path
            d="M42 73 Q50 70 55 73 Q60 76 65 73 Q70 70 78 73"
            stroke={getEyeColor()}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        )}
        {(!isAnimating || !answer) && (
          /* Neutral mouth */
          <path
            d="M48 72 Q60 76 72 72"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* Blush for uncertain */}
        {answer === 'uncertain' && isAnimating && (
          <>
            <ellipse cx="35" cy="60" rx="6" ry="4" fill="#3b82f6" fillOpacity="0.2" />
            <ellipse cx="85" cy="60" rx="6" ry="4" fill="#3b82f6" fillOpacity="0.2" />
          </>
        )}
      </svg>
    </div>
  );
}
