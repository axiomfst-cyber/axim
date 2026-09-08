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
        return { width: 90, height: 100, bubbleText: 'text-[11px]', padding: 'p-2' };
      case 'lg':
        return { width: 170, height: 185, bubbleText: 'text-sm', padding: 'p-3.5' };
      case 'xl':
        return { width: 210, height: 230, bubbleText: 'text-base', padding: 'p-4' };
      case 'md':
      default:
        return { width: 130, height: 145, bubbleText: 'text-xs', padding: 'p-3' };
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

      {/* Duolingo-style Speech Bubble */}
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
// 1. KOKO LA CHOUETTE (Duolingo Style Wise Owl Mascot)
// =====================================================================
interface SvgProps {
  mood: MascotMood;
  isTapped: boolean;
  size: { width: number; height: number };
}

const KokoOwlSvg: React.FC<SvgProps> = ({ mood, isTapped, size }) => {
  const isJoy = mood === 'correct' || mood === 'celebrating';
  const isSad = mood === 'incorrect';

  return (
    <div className="relative" style={{ width: size.width, height: size.height }}>
      {/* 2.5D Ground Shadow (scales inversely to mascot height) */}
      <motion.div
        animate={{
          scaleX: isJoy ? [1, 0.7, 1.1, 0.8, 1] : isTapped ? [1, 0.8, 1] : [1, 0.95, 1],
          opacity: isJoy ? [0.35, 0.15, 0.4, 0.2, 0.35] : [0.3, 0.25, 0.3],
        }}
        transition={{
          repeat: isJoy ? 0 : Infinity,
          duration: isJoy ? 1.2 : 2.5,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-slate-900/20 rounded-full blur-[1px]"
      />

      {/* Animated Owl Body with Squash & Stretch */}
      <motion.svg
        viewBox="0 0 160 170"
        className="w-full h-full overflow-visible"
        animate={
          isJoy
            ? {
                y: [0, 6, -26, 4, 0],
                scaleX: [1, 1.15, 0.88, 1.05, 1],
                scaleY: [1, 0.85, 1.2, 0.95, 1],
                rotate: [0, -3, 3, -2, 0],
              }
            : isSad
            ? {
                y: [0, 4, 0],
                rotate: [-2, 2, -1, 1, 0],
                scaleY: [1, 0.96, 1],
              }
            : isTapped
            ? {
                y: [0, -16, 0],
                scaleX: [1, 0.92, 1.08, 1],
                scaleY: [1, 1.12, 0.94, 1],
                rotate: [0, -6, 6, 0],
              }
            : {
                y: [0, -6, 0],
                scaleY: [1, 1.03, 1],
                scaleX: [1, 0.98, 1],
              }
        }
        transition={{
          repeat: isJoy || isTapped ? 0 : Infinity,
          duration: isJoy ? 0.9 : isSad ? 1.8 : isTapped ? 0.5 : 2.8,
          ease: 'easeInOut',
        }}
      >
        <defs>
          <linearGradient id="kokoBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1ddc94" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="kokoBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D1FAE5" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>
          <linearGradient id="kokoWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <filter id="kokoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#065F46" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Feet (Orange talons) */}
        <g id="koko-feet">
          <ellipse cx="62" cy="154" rx="10" ry="6" fill="#F97316" />
          <ellipse cx="98" cy="154" rx="10" ry="6" fill="#F97316" />
          <ellipse cx="56" cy="154" rx="6" ry="4" fill="#EA580C" />
          <ellipse cx="104" cy="154" rx="6" ry="4" fill="#EA580C" />
        </g>

        {/* Left Wing */}
        <motion.g
          id="koko-left-wing"
          animate={
            isJoy
              ? { rotate: [-20, 25, -15, 20, 0], y: [-4, 4, -4] }
              : isSad
              ? { rotate: [5, 8, 5] }
              : isTapped
              ? { rotate: [-25, 10, 0] }
              : { rotate: [0, 4, 0] }
          }
          transition={{ repeat: isJoy ? 3 : Infinity, duration: isJoy ? 0.35 : 2 }}
          style={{ transformOrigin: '32px 85px' }}
        >
          <path
            d="M 32 80 C 12 85 8 115 24 130 C 36 125 38 105 32 80 Z"
            fill="url(#kokoWingGrad)"
            filter="url(#kokoShadow)"
          />
        </motion.g>

        {/* Right Wing */}
        <motion.g
          id="koko-right-wing"
          animate={
            isJoy
              ? { rotate: [20, -25, 15, -20, 0], y: [-4, 4, -4] }
              : isSad
              ? { rotate: [-5, -8, -5] }
              : isTapped
              ? { rotate: [25, -10, 0] }
              : { rotate: [0, -4, 0] }
          }
          transition={{ repeat: isJoy ? 3 : Infinity, duration: isJoy ? 0.35 : 2 }}
          style={{ transformOrigin: '128px 85px' }}
        >
          <path
            d="M 128 80 C 148 85 152 115 136 130 C 124 125 122 105 128 80 Z"
            fill="url(#kokoWingGrad)"
            filter="url(#kokoShadow)"
          />
        </motion.g>

        {/* Main Body (Friendly Rounded Shape) */}
        <g id="koko-body">
          {/* Ear Tufts */}
          <path d="M 44 42 L 32 18 L 56 32 Z" fill="#059669" />
          <path d="M 116 42 L 128 18 L 104 32 Z" fill="#059669" />

          {/* Torso & Head unified */}
          <path
            d="M 80 24 C 122 24 136 55 136 100 C 136 142 122 152 80 152 C 38 152 24 142 24 100 C 24 55 38 24 80 24 Z"
            fill="url(#kokoBodyGrad)"
            filter="url(#kokoShadow)"
          />

          {/* Belly Patch */}
          <path
            d="M 80 72 C 108 72 116 95 116 122 C 116 146 104 150 80 150 C 56 150 44 146 44 122 C 44 95 52 72 80 72 Z"
            fill="url(#kokoBellyGrad)"
          />

          {/* Belly feather marks */}
          <path d="M 72 96 Q 80 102 88 96" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 64 114 Q 72 120 80 114" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 80 114 Q 88 120 96 114" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 72 130 Q 80 136 88 130" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Scholarly Glasses Frame */}
        <g id="koko-glasses">
          <circle cx="58" cy="62" r="23" fill="none" stroke="#F59E0B" strokeWidth="3.5" />
          <circle cx="102" cy="62" r="23" fill="none" stroke="#F59E0B" strokeWidth="3.5" />
          <line x1="81" y1="62" x2="79" y2="62" stroke="#F59E0B" strokeWidth="4" />
        </g>

        {/* Expressive Eyes & Eyelids (Duolingo Style Animation) */}
        <g id="koko-eyes">
          {/* Eye whites */}
          <circle cx="58" cy="62" r="20" fill="#FFFFFF" />
          <circle cx="102" cy="62" r="20" fill="#FFFFFF" />

          {/* Cheek Blush */}
          <circle cx="34" cy="78" r="7" fill="#F472B6" opacity="0.45" />
          <circle cx="126" cy="78" r="7" fill="#F472B6" opacity="0.45" />

          {isJoy ? (
            /* Joyful Happy Arcs when Correct (Duolingo happy eyes ^ ^) */
            <>
              <path
                d="M 46 64 Q 58 50 70 64"
                stroke="#0F172A"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 90 64 Q 102 50 114 64"
                stroke="#0F172A"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
            </>
          ) : isSad ? (
            /* Empathetic caring eyes with slight droop */
            <>
              <circle cx="58" cy="64" r="8" fill="#1E293B" />
              <circle cx="61" cy="61" r="3" fill="#FFFFFF" />
              <circle cx="102" cy="64" r="8" fill="#1E293B" />
              <circle cx="105" cy="61" r="3" fill="#FFFFFF" />
              {/* Empathetic gentle eyebrows */}
              <path d="M 46 48 Q 58 54 70 50" stroke="#047857" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 90 50 Q 102 54 114 48" stroke="#047857" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Cute sweatdrop on temple */}
              <motion.path
                d="M 128 44 C 128 44 135 52 135 56 C 135 60 132 63 128 63 C 124 63 121 60 121 56 C 121 52 128 44 128 44 Z"
                fill="#38BDF8"
                animate={{ y: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </>
          ) : (
            /* Standard Alert Blinking Eyes */
            <motion.g
              animate={{
                scaleY: [1, 1, 1, 0.08, 1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.8,
                times: [0, 0.85, 0.9, 0.93, 0.96, 1],
              }}
              style={{ transformOrigin: '80px 62px' }}
            >
              {/* Pupils */}
              <circle cx="58" cy="62" r="9" fill="#0F172A" />
              <circle cx="102" cy="62" r="9" fill="#0F172A" />
              {/* Highlight sparkles */}
              <circle cx="61" cy="59" r="3.5" fill="#FFFFFF" />
              <circle cx="56" cy="65" r="1.5" fill="#FFFFFF" />
              <circle cx="105" cy="59" r="3.5" fill="#FFFFFF" />
              <circle cx="100" cy="65" r="1.5" fill="#FFFFFF" />
            </motion.g>
          )}
        </g>

        {/* Beak & Mouth */}
        <g id="koko-beak">
          {isJoy ? (
            /* Open laughing / cheering beak with pink tongue */
            <>
              <path
                d="M 72 68 Q 80 84 88 68 Z"
                fill="#EA580C"
              />
              <path
                d="M 73 70 Q 80 82 87 70"
                fill="#F43F5E"
              />
              <path
                d="M 72 68 Q 80 64 88 68"
                stroke="#C2410C"
                strokeWidth="2"
                fill="none"
              />
            </>
          ) : (
            /* Cute geometric triangular beak */
            <polygon points="72,66 88,66 80,78" fill="#F97316" />
          )}
        </g>

        {/* Graduation / Scholarly Mini Cap with gold tassel */}
        <g id="koko-scholar-cap" transform="translate(80, 20) rotate(-6) translate(-80, -20)">
          <polygon points="80,6 112,18 80,26 48,18" fill="#1E1B4B" />
          <path d="M 60 21 L 60 29 C 60 35 100 35 100 29 L 100 21 Z" fill="#312E81" />
          {/* Golden tassel */}
          <line x1="80" y1="16" x2="114" y2="28" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="114" cy="29" r="2.5" fill="#F59E0B" />
        </g>
      </motion.svg>
    </div>
  );
};

// =====================================================================
// 2. BAO LE LÉOPARD (The Dynamic Panthère du Gabon Mascot)
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
