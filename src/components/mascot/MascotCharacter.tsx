import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MascotId, MascotMood, MASCOTS } from './mascotData';
import { MascotCelebration } from './MascotCelebration';
import { mascotAudio } from './mascotAudio';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import {
  AvatarCustomization,
  loadAvatarCustomization,
  DEFAULT_AVATAR_CUSTOMIZATION,
} from './avatarTypes';
import { CustomAvatarSvg } from './CustomAvatarSvg';

interface MascotCharacterProps {
  mascotId?: MascotId;
  customization?: AvatarCustomization;
  mood?: MascotMood;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSpeechBubble?: boolean;
  customMessage?: string;
  speechPlacement?: 'top' | 'right' | 'left';
  interactive?: boolean;
  showAudioToggle?: boolean;
  className?: string;
  onMascotClick?: () => void;
}

export const MascotCharacter: React.FC<MascotCharacterProps> = ({
  mascotId = 'avatar',
  customization,
  mood = 'idle',
  size = 'md',
  showSpeechBubble = true,
  customMessage,
  speechPlacement = 'top',
  interactive = true,
  showAudioToggle = false,
  className = '',
  onMascotClick,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [isTapped, setIsTapped] = useState(false);
  const [soundActive, setSoundActive] = useState(mascotAudio.isSoundEnabled());

  // Determine active avatar customization
  const activeCustomization = useMemo(() => {
    return customization || loadAvatarCustomization() || DEFAULT_AVATAR_CUSTOMIZATION;
  }, [customization]);

  const config = useMemo(() => {
    const base = MASCOTS[mascotId] || MASCOTS.avatar;
    if (mascotId === 'avatar' || mascotId === 'koko') {
      return {
        ...base,
        name: activeCustomization.name || 'Mon Avatar',
      };
    }
    return base;
  }, [mascotId, activeCustomization]);

  // React to mood transitions with audio
  useEffect(() => {
    if (mood === 'correct') {
      mascotAudio.playCorrect();
    } else if (mood === 'incorrect') {
      mascotAudio.playIncorrect();
    } else if (mood === 'celebrating') {
      mascotAudio.playVictory();
    }
  }, [mood]);

  // Size mapping
  const sizeConfig = useMemo(() => {
    switch (size) {
      case 'sm':
        return { width: 90, height: 120, bubbleText: 'text-[11px]', padding: 'p-2' };
      case 'lg':
        return { width: 170, height: 228, bubbleText: 'text-sm', padding: 'p-3.5' };
      case 'xl':
        return { width: 210, height: 282, bubbleText: 'text-base', padding: 'p-4' };
      case 'md':
      default:
        return { width: 130, height: 175, bubbleText: 'text-xs', padding: 'p-3' };
    }
  }, [size]);

  // Dialog selector
  const speechText = useMemo(() => {
    if (customMessage) return customMessage;
    const dialogues = config.dialogues;
    let list = dialogues.idle;

    if (mood === 'correct') list = dialogues.correct;
    else if (mood === 'incorrect') list = dialogues.incorrect;
    else if (mood === 'option_selected') list = dialogues.optionSelected;
    else if (mood === 'thinking') list = dialogues.thinking;
    else if (mood === 'celebrating') list = dialogues.celebrating;

    const idx = clickCount % list.length;
    const raw = list[idx] || list[0] || '';
    const studentName = config.name || 'Moussa';
    return raw.replace(/\{name\}/g, studentName);
  }, [customMessage, mood, clickCount, config]);

  const handleTap = () => {
    if (!interactive) return;
    setIsTapped(true);
    setClickCount((prev) => prev + 1);
    mascotAudio.playTap();
    if (onMascotClick) onMascotClick();
    setTimeout(() => setIsTapped(false), 600);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !soundActive;
    setSoundActive(nextState);
    mascotAudio.setSoundEnabled(nextState);
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ minWidth: sizeConfig.width }}
    >
      {/* Optional Sound Mute Toggle */}
      {showAudioToggle && (
        <button
          onClick={toggleSound}
          type="button"
          title={soundActive ? 'Désactiver les sons du compagnon' : 'Activer les sons'}
          className="absolute -top-2 -right-2 z-30 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-500 hover:text-slate-800 shadow-xs border border-slate-200 transition-transform active:scale-90 cursor-pointer"
        >
          {soundActive ? <Volume2 className="w-3.5 h-3.5 text-emerald-600" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
        </button>
      )}

      {/* Speech Bubble */}
      {showSpeechBubble && (
        <AnimatePresence mode="wait">
          <motion.div
            key={speechText}
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className={`relative z-20 mb-2 ${sizeConfig.padding} rounded-2xl bg-white border border-slate-200 shadow-md max-w-xs text-center`}
          >
            <p className={`${sizeConfig.bubbleText} font-bold leading-snug text-slate-800`}>
              {speechText}
            </p>
            {/* Bubble arrow pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Mascot Animated Character Body Container */}
      <div
        onClick={handleTap}
        className={`relative flex items-center justify-center ${interactive ? 'cursor-pointer' : ''}`}
        title={interactive ? `Clique sur ${config.name} pour l'animer !` : undefined}
      >
        {/* Celebration Particle Effect */}
        <MascotCelebration active={mood === 'correct' || mood === 'celebrating'} />

        {/* Dynamic SVG Character */}
        {(mascotId === 'avatar' || mascotId === 'koko') && (
          <CustomAvatarSvg
            mood={mood}
            isTapped={isTapped}
            size={sizeConfig}
            customization={activeCustomization}
          />
        )}
        {mascotId === 'bao' && (
          <BaoPantherSvg mood={mood} isTapped={isTapped} size={sizeConfig} />
        )}
        {mascotId === 'lily' && (
          <LilyFoxSvg mood={mood} isTapped={isTapped} size={sizeConfig} />
        )}
      </div>
    </div>
  );
};

// =====================================================================
// COMPANIONS SVG DEFINITIONS
// =====================================================================
interface SvgProps {
  mood: MascotMood;
  isTapped: boolean;
  size: { width: number; height: number };
}

// =====================================================================
// 1. BAO LA PANTHÈRE DU GABON (Compagnon Énergique & Combatif)
// =====================================================================
const BaoPantherSvg: React.FC<SvgProps> = ({ mood, isTapped, size }) => {
  const isJoy = mood === 'correct' || mood === 'celebrating';
  const isSad = mood === 'incorrect';

  return (
    <div className="relative" style={{ width: size.width, height: size.height }}>
      <motion.div
        animate={{
          scaleX: isJoy ? [1, 0.7, 1.1, 0.8, 1] : [1, 0.95, 1],
          opacity: [0.35, 0.2, 0.35],
        }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-slate-900/20 rounded-full blur-[1px]"
      />

      <motion.svg
        viewBox="0 0 160 170"
        className="w-full h-full overflow-visible"
        animate={
          isJoy
            ? {
                y: [0, 8, -28, 4, 0],
                scaleX: [1, 1.18, 0.88, 1.05, 1],
                scaleY: [1, 0.82, 1.22, 0.96, 1],
              }
            : isSad
            ? { y: [0, 4, 0], rotate: [-2, 2, 0] }
            : isTapped
            ? { y: [0, -18, 0], scale: [1, 1.1, 1] }
            : { y: [0, -7, 0] }
        }
        transition={{
          repeat: isJoy || isTapped ? 0 : Infinity,
          duration: isJoy ? 0.85 : isTapped ? 0.5 : 2.4,
          ease: 'easeInOut',
        }}
      >
        <defs>
          <linearGradient id="baoCoat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Ears */}
        <circle cx="44" cy="42" r="18" fill="#F59E0B" />
        <circle cx="44" cy="42" r="11" fill="#78350F" />
        <circle cx="116" cy="42" r="18" fill="#F59E0B" />
        <circle cx="116" cy="42" r="11" fill="#78350F" />

        {/* Head & Body */}
        <ellipse cx="80" cy="100" rx="55" ry="50" fill="url(#baoCoat)" />

        {/* Gabon Tricolor Headband (Green-Yellow-Blue) */}
        <g id="bao-headband">
          <path d="M 28 62 C 50 54 110 54 132 62 L 132 74 C 110 66 50 66 28 74 Z" fill="#16C784" />
          <path d="M 28 67 C 50 59 110 59 132 67 L 132 71 C 110 63 50 63 28 71 Z" fill="#FACC15" />
          <path d="M 28 71 C 50 63 110 63 132 71 L 132 75 C 110 67 50 67 28 75 Z" fill="#2452FF" />
        </g>

        {/* Leopard Rosettes / Spots */}
        <circle cx="44" cy="85" r="4" fill="#78350F" opacity="0.6" />
        <circle cx="116" cy="85" r="4" fill="#78350F" opacity="0.6" />
        <circle cx="52" cy="120" r="5" fill="#78350F" opacity="0.5" />
        <circle cx="108" cy="120" r="5" fill="#78350F" opacity="0.5" />

        {/* White Muzzle */}
        <ellipse cx="80" cy="108" rx="26" ry="18" fill="#FEF3C7" />
        <polygon points="76,98 84,98 80,104" fill="#1E293B" />

        {/* Eyes */}
        {isJoy ? (
          <g>
            <path d="M 48 84 Q 60 72 72 84" stroke="#1E293B" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 88 84 Q 100 72 112 84" stroke="#1E293B" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            {/* Joyful open smile */}
            <path d="M 72 112 Q 80 126 88 112" stroke="#78350F" strokeWidth="3" fill="#F43F5E" />
          </g>
        ) : (
          <motion.g
            animate={{ scaleY: [1, 1, 0.08, 1] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            style={{ transformOrigin: '80px 84px' }}
          >
            <circle cx="60" cy="84" r="8" fill="#1E293B" />
            <circle cx="63" cy="81" r="3" fill="#FFFFFF" />
            <circle cx="100" cy="84" r="8" fill="#1E293B" />
            <circle cx="103" cy="81" r="3" fill="#FFFFFF" />
            <path d="M 75 110 Q 80 115 85 110" stroke="#78350F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </motion.g>
        )}

        {/* Paws */}
        <ellipse cx="50" cy="146" rx="14" ry="10" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
        <ellipse cx="110" cy="146" rx="14" ry="10" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
      </motion.svg>
    </div>
  );
};

// =====================================================================
// 3. LILY LA RENARDE (The Clever & Calm Fox Mascot)
// =====================================================================
const LilyFoxSvg: React.FC<SvgProps> = ({ mood, isTapped, size }) => {
  const isJoy = mood === 'correct' || mood === 'celebrating';
  const isSad = mood === 'incorrect';

  return (
    <div className="relative" style={{ width: size.width, height: size.height }}>
      <motion.div
        animate={{ scaleX: [1, 0.95, 1], opacity: [0.35, 0.2, 0.35] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-slate-900/20 rounded-full blur-[1px]"
      />

      <motion.svg
        viewBox="0 0 160 170"
        className="w-full h-full overflow-visible"
        animate={
          isJoy
            ? { y: [0, 8, -26, 4, 0], scale: [1, 1.15, 1] }
            : isSad
            ? { y: [0, 4, 0], rotate: [-2, 2, 0] }
            : isTapped
            ? { y: [0, -16, 0] }
            : { y: [0, -6, 0] }
        }
        transition={{
          repeat: isJoy || isTapped ? 0 : Infinity,
          duration: isJoy ? 0.85 : 2.5,
          ease: 'easeInOut',
        }}
      >
        {/* Bushy Fox Tail in Background */}
        <motion.path
          d="M 120 120 C 145 100 155 70 145 55 C 135 70 125 95 110 115 Z"
          fill="#EA580C"
          animate={{ rotate: [-5, 8, -5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ transformOrigin: '110px 120px' }}
        />
        <path d="M 145 55 C 140 62 135 68 135 72 C 142 70 145 60 145 55 Z" fill="#FFFFFF" />

        {/* Fox Ears */}
        <polygon points="34,60 52,18 72,50" fill="#EA580C" />
        <polygon points="40,55 52,28 66,48" fill="#FED7AA" />
        <polygon points="126,60 108,18 88,50" fill="#EA580C" />
        <polygon points="120,55 108,28 94,48" fill="#FED7AA" />

        {/* Fox Face Shape */}
        <ellipse cx="80" cy="95" rx="48" ry="42" fill="#F97316" />
        {/* White Cheeks */}
        <path d="M 32 95 Q 80 135 80 110 Q 80 135 128 95 Q 110 135 80 135 Q 50 135 32 95 Z" fill="#FFFFFF" />

        {/* Cute Glasses */}
        <circle cx="60" cy="85" r="16" fill="none" stroke="#8B5CF6" strokeWidth="3" />
        <circle cx="100" cy="85" r="16" fill="none" stroke="#8B5CF6" strokeWidth="3" />
        <line x1="76" y1="85" x2="84" y2="85" stroke="#8B5CF6" strokeWidth="3" />

        {/* Eyes */}
        {isJoy ? (
          <g>
            <path d="M 52 85 Q 60 75 68 85" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 92 85 Q 100 75 108 85" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        ) : (
          <motion.g
            animate={{ scaleY: [1, 1, 0.08, 1] }}
            transition={{ repeat: Infinity, duration: 3.2 }}
            style={{ transformOrigin: '80px 85px' }}
          >
            <circle cx="60" cy="85" r="6" fill="#1E293B" />
            <circle cx="62" cy="83" r="2" fill="#FFFFFF" />
            <circle cx="100" cy="85" r="6" fill="#1E293B" />
            <circle cx="102" cy="83" r="2" fill="#FFFFFF" />
          </motion.g>
        )}

        {/* Fox Nose */}
        <circle cx="80" cy="112" r="5" fill="#1E293B" />
      </motion.svg>
    </div>
  );
};
