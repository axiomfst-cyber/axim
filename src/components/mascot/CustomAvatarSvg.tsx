import React from 'react';
import { motion } from 'motion/react';
import { MascotMood } from './mascotData';
import {
  AvatarCustomization,
  SKIN_TONES_MAP,
  HAIR_COLORS_MAP,
  CLOTHING_COLORS_MAP,
} from './avatarTypes';

interface CustomAvatarSvgProps {
  mood: MascotMood;
  isTapped: boolean;
  size: { width: number; height: number };
  customization: AvatarCustomization;
}

export const CustomAvatarSvg: React.FC<CustomAvatarSvgProps> = ({
  mood,
  isTapped,
  size,
  customization,
}) => {
  const isJoy = mood === 'correct' || mood === 'celebrating';
  const isSad = mood === 'incorrect';
  const isThinking = mood === 'thinking';
  const isSelected = mood === 'option_selected';

  const skin = SKIN_TONES_MAP[customization.skinTone] || SKIN_TONES_MAP.caramel;
  const hair = HAIR_COLORS_MAP[customization.hairColor] || HAIR_COLORS_MAP.black;
  const clothing = CLOTHING_COLORS_MAP[customization.clothingColor] || CLOTHING_COLORS_MAP.blue;

  return (
    <div className="relative" style={{ width: size.width, height: size.height }}>
      {/* Dynamic 2.5D Ground Shadow */}
      <motion.div
        animate={{
          scaleX: isJoy ? [1, 0.65, 1.15, 0.8, 1] : isTapped ? [1, 0.75, 1] : [1, 0.95, 1],
          opacity: isJoy ? [0.35, 0.15, 0.45, 0.2, 0.35] : [0.3, 0.22, 0.3],
        }}
        transition={{
          repeat: isJoy || isTapped ? 0 : Infinity,
          duration: isJoy ? 1.1 : 2.6,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-slate-900/20 rounded-full blur-[1px]"
      />

      {/* Main Avatar Character Body */}
      <motion.svg
        viewBox="0 0 160 170"
        className="w-full h-full overflow-visible"
        animate={
          isJoy
            ? {
                y: [0, 8, -30, 4, 0],
                scaleX: [1, 1.18, 0.86, 1.06, 1],
                scaleY: [1, 0.82, 1.22, 0.96, 1],
                rotate: [0, -3, 3, -1, 0],
              }
            : isSad
            ? {
                y: [0, 4, 0],
                rotate: [-2, 2, -1, 1, 0],
                scaleY: [1, 0.96, 1],
              }
            : isTapped
            ? {
                y: [0, -18, 0],
                scaleX: [1, 0.92, 1.08, 1],
                scaleY: [1, 1.12, 0.94, 1],
                rotate: [0, -5, 5, 0],
              }
            : isThinking
            ? {
                y: [0, -3, 0],
                rotate: [0, 2, 0],
              }
            : isSelected
            ? {
                y: [0, -6, 0],
                scale: [1, 1.02, 1],
              }
            : {
                y: [0, -5, 0],
                scaleY: [1, 1.02, 1],
              }
        }
        transition={{
          repeat: isJoy || isTapped ? 0 : Infinity,
          duration: isJoy ? 0.9 : isSad ? 1.8 : isTapped ? 0.45 : 2.8,
          ease: 'easeInOut',
        }}
      >
        <defs>
          {/* Skin Gradients */}
          <linearGradient id="avatarSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={skin.color} />
            <stop offset="100%" stopColor={skin.shadow} />
          </linearGradient>

          {/* Clothing Gradients */}
          <linearGradient id="avatarClothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={clothing.primary} />
            <stop offset="100%" stopColor={clothing.secondary} />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="avatarDropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* ==================================================== */}
        {/* BACK HAIR (For Afro, Puffs, Dreads volume behind)    */}
        {/* ==================================================== */}
        {customization.hairStyle === 'afro' && (
          <g id="hair-afro-back">
            <circle cx="80" cy="58" r="42" fill={hair.color} />
            <circle cx="50" cy="54" r="22" fill={hair.color} />
            <circle cx="110" cy="54" r="22" fill={hair.color} />
            <circle cx="80" cy="30" r="22" fill={hair.color} />
          </g>
        )}

        {customization.hairStyle === 'high_puff' && (
          <g id="hair-puff-back">
            <circle cx="80" cy="24" r="28" fill={hair.color} />
            <ellipse cx="80" cy="38" rx="14" ry="4" fill="#F59E0B" /> {/* Gold Hair Tie */}
          </g>
        )}

        {customization.hairStyle === 'dreads' && (
          <g id="hair-dreads-back">
            <rect x="42" y="44" width="8" height="42" rx="4" fill={hair.color} />
            <rect x="110" y="44" width="8" height="42" rx="4" fill={hair.color} />
            <rect x="34" y="52" width="7" height="34" rx="3.5" fill={hair.color} />
            <rect x="119" y="52" width="7" height="34" rx="3.5" fill={hair.color} />
          </g>
        )}

        {customization.hairStyle === 'curls' && (
          <g id="hair-curls-back">
            <circle cx="48" cy="58" r="18" fill={hair.color} />
            <circle cx="112" cy="58" r="18" fill={hair.color} />
          </g>
        )}

        {/* ==================================================== */}
        {/* BACK CLOTHING DETAILS (Hoodie hood, Robe back, etc.) */}
        {/* ==================================================== */}
        {customization.clothingStyle === 'street_hoodie' && (
          <g id="cloth-hoodie-back">
            <path
              d="M 48 94 C 48 80 112 80 112 94 C 118 108 108 116 80 116 C 52 116 42 108 48 94 Z"
              fill={clothing.secondary}
            />
            <ellipse cx="80" cy="98" rx="24" ry="7" fill={clothing.primary} opacity="0.6" />
          </g>
        )}

        {customization.clothingStyle === 'academic_robe' && (
          <g id="cloth-robe-back">
            <path d="M 52 94 Q 80 84 108 94 L 112 106 Q 80 112 48 106 Z" fill="#F59E0B" />
          </g>
        )}

        {customization.clothingStyle === 'traditional_wax' && (
          <g id="cloth-wax-back">
            <path d="M 52 96 Q 80 86 108 96 L 110 106 Q 80 112 50 106 Z" fill="#F59E0B" opacity="0.85" />
          </g>
        )}

        {/* ==================================================== */}
        {/* TORSO & CLOTHING                                     */}
        {/* ==================================================== */}
        <g id="avatar-torso">
          {/* Neck */}
          <rect x="69" y="88" width="22" height="24" rx="4" fill="url(#avatarSkinGrad)" />

          {/* Torso Base */}
          <path
            d="M 36 108 C 36 96 52 94 80 94 C 108 94 124 96 124 108 L 128 162 C 128 166 118 168 80 168 C 42 168 32 166 32 162 Z"
            fill="url(#avatarClothGrad)"
            filter="url(#avatarDropShadow)"
          />

          {/* 1. Uniforme Blazer Prestige */}
          {customization.clothingStyle === 'uniform_blazer' && (
            <g id="cloth-uniform-details">
              {/* White Shirt Triangle */}
              <polygon points="80,94 62,126 98,126" fill="#FFFFFF" />
              {/* Shirt Collar wings */}
              <polygon points="80,98 64,96 72,112 80,104" fill="#F8FAFC" />
              <polygon points="80,98 96,96 88,112 80,104" fill="#F8FAFC" />
              {/* Striped Red School Tie */}
              <polygon points="77,102 83,102 86,136 80,142 74,136" fill="#DC2626" />
              <line x1="76" y1="112" x2="84" y2="116" stroke="#F59E0B" strokeWidth="2.5" />
              <line x1="75" y1="122" x2="85" y2="126" stroke="#F59E0B" strokeWidth="2.5" />
              {/* Blazer Lapels */}
              <path d="M 52 96 L 70 134 L 46 128 Z" fill={clothing.secondary} />
              <path d="M 108 96 L 90 134 L 114 128 Z" fill={clothing.secondary} />
              {/* Blazer Center Split Line & Gold Buttons */}
              <line x1="80" y1="138" x2="80" y2="166" stroke={clothing.secondary} strokeWidth="2" />
              <circle cx="80" cy="144" r="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <circle cx="80" cy="154" r="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              {/* Gold AXIOM School Crest on left chest */}
              <circle cx="56" cy="130" r="6" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <polygon points="56,126 57.5,129 60.5,129 58,131 59,134 56,132 53,134 54,131 51.5,129 54.5,129" fill="#FFFFFF" />
              {/* Flap Pockets */}
              <rect x="40" y="146" width="18" height="4" rx="1.5" fill={clothing.secondary} />
              <rect x="102" y="146" width="18" height="4" rx="1.5" fill={clothing.secondary} />
            </g>
          )}

          {/* 2. Maillot National Panthères du Gabon */}
          {customization.clothingStyle === 'gabon_jersey' && (
            <g id="cloth-gabon-stripes">
              {/* Tricolor Bands */}
              <path d="M 36 108 C 42 98 60 96 80 96 C 100 96 118 98 124 108 L 126 120 L 34 120 Z" fill="#10B981" /> {/* Vert */}
              {/* V-Neck Collar */}
              <polygon points="80,108 68,96 74,96 80,102 86,96 92,96" fill="#FACC15" />
              <path d="M 34 120 L 126 120 L 127 138 L 33 138 Z" fill="#FACC15" /> {/* Jaune */}
              <path d="M 33 138 L 127 138 L 128 162 C 128 166 118 168 80 168 C 42 168 32 166 32 162 Z" fill="#2452FF" /> {/* Bleu */}
              {/* Gabon Panther Badge on Left Chest */}
              <circle cx="56" cy="128" r="6.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="56" cy="128" r="4.5" fill="#FACC15" />
              <polygon points="56,125 57.5,127.5 60,127.5 58,129 59,131.5 56,130 53,131.5 54,129 52,127.5 54.5,127.5" fill="#0F172A" />
              {/* Center Jersey Player Number 10 */}
              <text x="80" y="133" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif" fill="#0F172A">10</text>
              {/* Side Ventilation Stripes */}
              <line x1="38" y1="120" x2="36" y2="158" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
              <line x1="122" y1="120" x2="124" y2="158" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
            </g>
          )}

          {/* 3. Sweat à Capuche (Street Hoodie) */}
          {customization.clothingStyle === 'street_hoodie' && (
            <g id="cloth-hoodie-details">
              {/* Double-layered Hoodie Collar Opening */}
              <path d="M 64 96 C 64 114 96 114 96 96 C 104 104 102 114 80 114 C 58 114 56 104 64 96 Z" fill={clothing.secondary} />
              <ellipse cx="80" cy="101" rx="14" ry="5" fill="#0F172A" opacity="0.35" />
              {/* Hanging Drawstrings with Metal Aglets */}
              <path d="M 72 106 Q 71 122 73 134" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 88 106 Q 89 122 87 134" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="73" cy="135" r="2" fill="#CBD5E1" />
              <circle cx="87" cy="135" r="2" fill="#CBD5E1" />
              {/* Lightning Street Graphic */}
              <polygon points="79,114 83,114 80,121 84,121 78,130 80,123 76,123" fill="#FACC15" stroke={clothing.secondary} strokeWidth="0.8" />
              {/* Ample Kangaroo Pouch Pocket */}
              <path
                d="M 50 140 C 50 138 56 137 60 142 L 100 142 C 104 137 110 138 110 140 L 106 158 Q 80 162 54 158 Z"
                fill={clothing.secondary}
                stroke={clothing.light}
                strokeWidth="1"
                opacity="0.95"
              />
              {/* Ribbed Bottom Band */}
              <rect x="34" y="160" width="92" height="6" rx="2" fill={clothing.secondary} />
            </g>
          )}

          {/* 4. Polo Scientifique Tech */}
          {customization.clothingStyle === 'stem_polo' && (
            <g id="cloth-polo-details">
              {/* Crisp Contrast Folded Collar */}
              <polygon points="80,105 60,98 68,114 80,108" fill="#FFFFFF" />
              <polygon points="80,105 100,98 92,114 80,108" fill="#FFFFFF" />
              {/* Placket with 3 Stitched Buttons */}
              <rect x="77" y="108" width="6" height="24" rx="1" fill="#FFFFFF" />
              <circle cx="80" cy="113" r="1.3" fill="#475569" />
              <circle cx="80" cy="120" r="1.3" fill="#475569" />
              <circle cx="80" cy="127" r="1.3" fill="#475569" />
              {/* Science Pocket with Course Pens */}
              <rect x="52" y="124" width="16" height="18" rx="2" fill={clothing.secondary} stroke="#FFFFFF" strokeWidth="1" />
              <rect x="55" y="117" width="2.5" height="10" rx="1" fill="#2563EB" />
              <rect x="60" y="119" width="2.5" height="8" rx="1" fill="#DC2626" />
              <rect x="54" y="125" width="12" height="2" fill="#FFFFFF" opacity="0.8" />
            </g>
          )}

          {/* 5. Tunique Wax Traditionnelle & Broderies */}
          {customization.clothingStyle === 'traditional_wax' && (
            <g id="cloth-wax-details">
              {/* Grand Embroidered Gold Yoke */}
              <path d="M 58 96 C 58 122 102 122 102 96 C 110 128 50 128 58 96 Z" fill="#F59E0B" />
              <circle cx="80" cy="114" r="3.5" fill="#FEF3C7" />
              {/* Traditional Embroidery Chevron Lines */}
              <path d="M 66 102 L 72 112 L 80 105 L 88 112 L 94 102" stroke="#78350F" strokeWidth="2" fill="none" />
              {/* Wax Geometric Motifs on Torso */}
              <path d="M 46 132 L 56 122 L 66 132 L 56 142 Z" fill="#F59E0B" opacity="0.85" />
              <path d="M 94 132 L 104 122 L 114 132 L 104 142 Z" fill="#F59E0B" opacity="0.85" />
              <path d="M 70 146 L 80 136 L 90 146 L 80 156 Z" fill="#F59E0B" opacity="0.85" />
              {/* Golden Hem Trim */}
              <rect x="34" y="160" width="92" height="6" fill="#F59E0B" />
            </g>
          )}

          {/* 6. Blouse Blanche de Laboratoire */}
          {customization.clothingStyle === 'lab_coat' && (
            <g id="cloth-lab-details">
              {/* Inner shirt */}
              <polygon points="80,98 68,118 92,118" fill={clothing.primary} />
              {/* Crisp White Coat Body */}
              <path
                d="M 36 108 C 36 96 52 94 80 94 C 108 94 124 96 124 108 L 128 162 C 128 166 118 168 80 168 C 42 168 32 166 32 162 Z"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              {/* Tailored Lab Lapels */}
              <path d="M 54 96 L 72 130 L 46 122 Z" fill="#E2E8F0" />
              <path d="M 106 96 L 88 130 L 114 122 Z" fill="#E2E8F0" />
              {/* Center Line & Buttons */}
              <line x1="80" y1="130" x2="80" y2="166" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="80" cy="138" r="2" fill="#334155" />
              <circle cx="80" cy="148" r="2" fill="#334155" />
              <circle cx="80" cy="158" r="2" fill="#334155" />
              {/* Lab Pocket with Chemistry Tube & Ruler */}
              <rect x="46" y="126" width="16" height="16" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="50" y="118" width="3" height="12" rx="1" fill="#F59E0B" />
              <rect x="56" y="116" width="3.5" height="14" rx="1.75" fill="#10B981" stroke="#334155" strokeWidth="0.8" />
              <circle cx="57.75" cy="120" r="0.8" fill="#FFFFFF" />
              {/* Lower Tool Pockets */}
              <rect x="38" y="146" width="18" height="14" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="104" y="146" width="18" height="14" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            </g>
          )}

          {/* 7. Grande Toge d’Excellence */}
          {customization.clothingStyle === 'academic_robe' && (
            <g id="cloth-academic-details">
              {/* Pleated Robe Body Folds */}
              <line x1="62" y1="116" x2="56" y2="164" stroke="#0F172A" strokeWidth="1.5" opacity="0.4" />
              <line x1="98" y1="116" x2="104" y2="164" stroke="#0F172A" strokeWidth="1.5" opacity="0.4" />
              <line x1="80" y1="116" x2="80" y2="164" stroke="#0F172A" strokeWidth="1.5" opacity="0.5" />
              {/* Wide Golden Satin Stole */}
              <path d="M 64 96 L 70 162 L 78 162 L 74 104 Z" fill="#F59E0B" />
              <path d="M 96 96 L 90 162 L 82 162 L 86 104 Z" fill="#F59E0B" />
              <rect x="70" y="160" width="8" height="3" fill="#B45309" />
              <rect x="82" y="160" width="8" height="3" fill="#B45309" />
              {/* Major Honor Medallion with Emerald Ribbon */}
              <path d="M 72 100 Q 80 114 88 100" stroke="#10B981" strokeWidth="2.5" fill="none" />
              <circle cx="80" cy="116" r="6" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
              <polygon points="80,112 81.5,114.5 84,114.5 82,116 83,118.5 80,117 77,118.5 78,116 76,114.5 78.5,114.5" fill="#FEF3C7" />
            </g>
          )}
        </g>

        {/* ==================================================== */}
        {/* ARMS & HANDS (Styled per Outfit)                     */}
        {/* ==================================================== */}
        {/* Left Arm */}
        <motion.g
          id="avatar-left-arm"
          animate={
            isJoy
              ? { rotate: [-140, -110, -140], y: [-6, -2, -6] }
              : isThinking
              ? { rotate: [-35, -25, -35] }
              : isTapped
              ? { rotate: [-120, 0] }
              : { rotate: [0, 4, 0] }
          }
          transition={{ repeat: isJoy ? 3 : Infinity, duration: isJoy ? 0.35 : 2 }}
          style={{ transformOrigin: '42px 108px' }}
        >
          {/* Style Specific Sleeve */}
          {customization.clothingStyle === 'stem_polo' ? (
            /* Short Sleeve with visible Forearm */
            <>
              <path d="M 42 108 L 34 122 C 33 124 35 127 38 127 L 44 118 Z" fill={clothing.primary} />
              <line x1="34" y1="122" x2="42" y2="120" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Forearm */}
              <path d="M 36 122 L 28 134 C 26 137 28 140 33 140 L 40 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'uniform_blazer' ? (
            /* Blazer Sleeve with white shirt cuff and 2 gold buttons */
            <>
              <path d="M 42 108 L 30 128 C 28 131 30 135 34 135 L 44 122 Z" fill={clothing.primary} />
              {/* White shirt cuff */}
              <path d="M 30 128 L 27 133 C 26 135 28 138 32 138 L 34 135 Z" fill="#FFFFFF" />
              <circle cx="33" cy="128" r="1" fill="#F59E0B" />
              <circle cx="36" cy="125" r="1" fill="#F59E0B" />
            </>
          ) : customization.clothingStyle === 'gabon_jersey' ? (
            /* Sport Raglan Sleeve with Green & Yellow Stripes */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill="#10B981" />
              <path d="M 36 118 L 32 124 L 38 126 L 41 120 Z" fill="#FACC15" />
            </>
          ) : customization.clothingStyle === 'traditional_wax' ? (
            /* Wide Bell Flared Sleeve with Gold Trim */
            <>
              <path d="M 42 108 L 24 132 C 22 136 26 142 32 142 L 46 122 Z" fill={clothing.primary} />
              <path d="M 24 132 L 32 142" stroke="#F59E0B" strokeWidth="2.5" />
            </>
          ) : customization.clothingStyle === 'lab_coat' ? (
            /* White Lab Coat Sleeve with rolled cuff */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="27" y="130" width="10" height="4" rx="1.5" fill="#E2E8F0" />
            </>
          ) : customization.clothingStyle === 'academic_robe' ? (
            /* Flowing Bell Sleeve with Gold Trim */
            <>
              <path d="M 42 108 L 24 134 C 22 138 27 142 34 142 L 46 122 Z" fill={clothing.secondary} />
              <path d="M 24 134 L 34 142" stroke="#F59E0B" strokeWidth="3" />
            </>
          ) : (
            /* Street Hoodie Sleeve with Ribbed Wrist */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill={clothing.primary} />
              <rect x="27" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
            </>
          )}

          {/* Left Hand */}
          <circle cx="26" cy="138" r="7" fill={skin.color} />
          {/* Thumbs up on joy */}
          {isJoy && <circle cx="24" cy="132" r="3.5" fill={skin.color} />}
        </motion.g>

        {/* Right Arm */}
        <motion.g
          id="avatar-right-arm"
          animate={
            isJoy
              ? { rotate: [140, 110, 140], y: [-6, -2, -6] }
              : isThinking
              ? { rotate: [85, 75, 85], x: [-4, -2, -4] }
              : isSelected
              ? { rotate: [35, 25, 35] }
              : isTapped
              ? { rotate: [120, 0] }
              : { rotate: [0, -4, 0] }
          }
          transition={{ repeat: isJoy ? 3 : Infinity, duration: isJoy ? 0.35 : 2 }}
          style={{ transformOrigin: '118px 108px' }}
        >
          {/* Style Specific Sleeve */}
          {customization.clothingStyle === 'stem_polo' ? (
            <>
              <path d="M 118 108 L 126 122 C 127 124 125 127 122 127 L 116 118 Z" fill={clothing.primary} />
              <line x1="126" y1="122" x2="118" y2="120" stroke="#FFFFFF" strokeWidth="1.5" />
              <path d="M 124 122 L 132 134 C 134 137 132 140 127 140 L 120 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'uniform_blazer' ? (
            <>
              <path d="M 118 108 L 130 128 C 132 131 130 135 126 135 L 116 122 Z" fill={clothing.primary} />
              <path d="M 130 128 L 133 133 C 134 135 132 138 128 138 L 126 135 Z" fill="#FFFFFF" />
              <circle cx="127" cy="128" r="1" fill="#F59E0B" />
              <circle cx="124" cy="125" r="1" fill="#F59E0B" />
            </>
          ) : customization.clothingStyle === 'gabon_jersey' ? (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill="#10B981" />
              <path d="M 124 118 L 128 124 L 122 126 L 119 120 Z" fill="#FACC15" />
            </>
          ) : customization.clothingStyle === 'traditional_wax' ? (
            <>
              <path d="M 118 108 L 136 132 C 138 136 134 142 128 142 L 114 122 Z" fill={clothing.primary} />
              <path d="M 136 132 L 128 142" stroke="#F59E0B" strokeWidth="2.5" />
            </>
          ) : customization.clothingStyle === 'lab_coat' ? (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="123" y="130" width="10" height="4" rx="1.5" fill="#E2E8F0" />
            </>
          ) : customization.clothingStyle === 'academic_robe' ? (
            <>
              <path d="M 118 108 L 136 134 C 138 138 133 142 126 142 L 114 122 Z" fill={clothing.secondary} />
              <path d="M 136 134 L 126 142" stroke="#F59E0B" strokeWidth="3" />
            </>
          ) : (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill={clothing.primary} />
              <rect x="124" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
            </>
          )}

          {/* Right Hand */}
          <circle cx="134" cy="138" r="7" fill={skin.color} />
          {isJoy && <circle cx="136" cy="132" r="3.5" fill={skin.color} />}
        </motion.g>

        {/* ==================================================== */}
        {/* HEAD, EARS, FACE (Customizable Head Shape)           */}
        {/* ==================================================== */}
        <g id="avatar-head-group">
          {/* Ears with shadow (Adapted to head shape) */}
          {customization.headShape === 'diamond' ? (
            <>
              <circle cx="39" cy="67" r="8.5" fill={skin.color} />
              <circle cx="40" cy="67" r="4.5" fill={skin.shadow} opacity="0.6" />
              <circle cx="121" cy="67" r="8.5" fill={skin.color} />
              <circle cx="120" cy="67" r="4.5" fill={skin.shadow} opacity="0.6" />
            </>
          ) : (
            <>
              <circle cx="43" cy="67" r="9" fill={skin.color} />
              <circle cx="44" cy="67" r="5" fill={skin.shadow} opacity="0.6" />
              <circle cx="117" cy="67" r="9" fill={skin.color} />
              <circle cx="116" cy="67" r="5" fill={skin.shadow} opacity="0.6" />
            </>
          )}

          {/* Dynamic Head Shapes */}
          {customization.headShape === 'oval' ? (
            /* Ovale Harmonieuse */
            <path
              d="M 80 27 C 104 27 116 43 116 64 C 116 88 100 102 80 102 C 60 102 44 88 44 64 C 44 43 56 27 80 27 Z"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : customization.headShape === 'square' ? (
            /* Carrée & Mâchoire Définie */
            <path
              d="M 80 28 C 102 28 116 38 116 63 C 116 80 114 97 101 101 C 94 103 88 103 80 103 C 72 103 66 103 59 101 C 46 97 44 80 44 63 C 44 38 58 28 80 28 Z"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : customization.headShape === 'heart' ? (
            /* En Cœur & Délicate */
            <path
              d="M 80 28 C 105 28 118 42 118 62 C 118 78 102 96 85 104 C 82 105 78 105 75 104 C 58 96 42 78 42 62 C 42 42 55 28 80 28 Z"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : customization.headShape === 'diamond' ? (
            /* Diamant Évocatrice */
            <path
              d="M 80 27 C 98 27 109 38 120 62 C 118 82 100 97 84 104 C 81 105 79 105 76 104 C 60 97 42 82 40 62 C 51 38 62 27 80 27 Z"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : customization.headShape === 'rectangular' ? (
            /* Rectangulaire & Haute */
            <path
              d="M 80 26 C 99 26 114 36 114 62 C 114 84 112 101 98 104 C 90 105 86 105 80 105 C 74 105 70 105 62 104 C 48 101 46 84 46 62 C 46 36 61 26 80 26 Z"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : (
            /* Ronde & Douce (Style Duolingo par défaut) */
            <circle
              cx="80"
              cy="64"
              r="37"
              fill="url(#avatarSkinGrad)"
              filter="url(#avatarDropShadow)"
            />
          )}

          {/* Cute Cheek Blush (Dynamically adjusted to shape) */}
          <ellipse
            cx={customization.headShape === 'diamond' || customization.headShape === 'heart' ? 56 : 54}
            cy={customization.headShape === 'heart' ? 71 : 74}
            rx="7"
            ry="4"
            fill="#F472B6"
            opacity={isJoy ? 0.65 : 0.35}
          />
          <ellipse
            cx={customization.headShape === 'diamond' || customization.headShape === 'heart' ? 104 : 106}
            cy={customization.headShape === 'heart' ? 71 : 74}
            rx="7"
            ry="4"
            fill="#F472B6"
            opacity={isJoy ? 0.65 : 0.35}
          />

          {/* Nose */}
          <path
            d="M 78 68 Q 80 72 82 68"
            stroke={skin.shadow}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* ==================================================== */}
          {/* EXPRESSIVE EYES (Duolingo Animation States)          */}
          {/* ==================================================== */}
          <g id="avatar-eyes">
            {isJoy ? (
              /* Joyful Victory Arcs (^ ^) */
              <>
                <path
                  d="M 55 64 Q 65 50 75 64"
                  stroke="#0F172A"
                  strokeWidth="4.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 85 64 Q 95 50 105 64"
                  stroke="#0F172A"
                  strokeWidth="4.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Cheerful Eyebrows */}
                <path d="M 54 48 Q 65 42 76 48" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 84 48 Q 95 42 106 48" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : isSad ? (
              /* Empathetic Encouraging Droop with sweatdrop */
              <>
                {/* Eyes looking gently up */}
                <circle cx="65" cy="63" r="7" fill="#0F172A" />
                <circle cx="67" cy="61" r="2.5" fill="#FFFFFF" />
                <circle cx="95" cy="63" r="7" fill="#0F172A" />
                <circle cx="97" cy="61" r="2.5" fill="#FFFFFF" />
                {/* Empathetic soft eyebrows */}
                <path d="M 54 49 Q 65 55 76 50" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 84 50 Q 95 55 106 49" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Cute Sweatdrop on temple */}
                <motion.path
                  d="M 118 48 C 118 48 124 55 124 58 C 124 61 121 64 118 64 C 115 64 112 61 112 58 C 112 55 118 48 118 48 Z"
                  fill="#38BDF8"
                  animate={{ y: [0, 4, 0], opacity: [0.75, 1, 0.75] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                />
              </>
            ) : isThinking ? (
              /* Thinking Eyes Looking Up Right */
              <>
                <circle cx="65" cy="61" r="7" fill="#0F172A" />
                <circle cx="68" cy="58" r="3" fill="#FFFFFF" />
                <circle cx="95" cy="61" r="7" fill="#0F172A" />
                <circle cx="98" cy="58" r="3" fill="#FFFFFF" />
                {/* Raised inquisitive eyebrow */}
                <path d="M 54 48 Q 65 50 76 52" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 84 46 Q 95 40 106 45" stroke={hair.color} strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              /* Standard Alert Blinking Eyes */
              <>
                {/* Eyebrows */}
                <path d="M 55 50 Q 65 46 75 50" stroke={hair.color} strokeWidth="3.2" fill="none" strokeLinecap="round" />
                <path d="M 85 50 Q 95 46 105 50" stroke={hair.color} strokeWidth="3.2" fill="none" strokeLinecap="round" />

                {/* Animated Blinking Eyes */}
                <motion.g
                  animate={{ scaleY: [1, 1, 1, 0.08, 1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.6,
                    times: [0, 0.85, 0.9, 0.93, 0.96, 1],
                  }}
                  style={{ transformOrigin: '80px 62px' }}
                >
                  <circle cx="65" cy="62" r="7.5" fill="#0F172A" />
                  <circle cx="95" cy="62" r="7.5" fill="#0F172A" />
                  {/* Eye Highlights */}
                  <circle cx="67.5" cy="59.5" r="3" fill="#FFFFFF" />
                  <circle cx="63.5" cy="64" r="1.2" fill="#FFFFFF" />
                  <circle cx="97.5" cy="59.5" r="3" fill="#FFFFFF" />
                  <circle cx="93.5" cy="64" r="1.2" fill="#FFFFFF" />
                </motion.g>
              </>
            )}
          </g>

          {/* ==================================================== */}
          {/* MOUTH                                                */}
          {/* ==================================================== */}
          <g id="avatar-mouth">
            {isJoy ? (
              /* Big Happy Smile with Teeth & Tongue */
              <>
                <path
                  d="M 68 76 Q 80 96 92 76 Z"
                  fill="#7F1D1D"
                />
                <path
                  d="M 72 76 Q 80 82 88 76"
                  fill="#FFFFFF"
                />
                <path
                  d="M 74 86 Q 80 94 86 86"
                  fill="#F43F5E"
                />
              </>
            ) : isSad ? (
              /* Gentle Encouraging Small Smile (not depressing, warm) */
              <path
                d="M 72 82 Q 80 79 88 82"
                stroke="#1E293B"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            ) : isThinking ? (
              /* Concentrated 'O' mouth */
              <ellipse cx="80" cy="80" rx="3.5" ry="4" fill="#0F172A" />
            ) : (
              /* Confident warm smile */
              <path
                d="M 70 78 Q 80 88 90 78"
                stroke="#0F172A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            )}
          </g>
        </g>

        {/* ==================================================== */}
        {/* FRONT HAIR STYLES                                    */}
        {/* ==================================================== */}
        <g id="avatar-hair-front">
          {customization.hairStyle === 'afro' && (
            <g id="hair-afro-front">
              {/* Cloud-like curls defining top border */}
              <circle cx="60" cy="36" r="18" fill={hair.color} />
              <circle cx="80" cy="30" r="20" fill={hair.color} />
              <circle cx="100" cy="36" r="18" fill={hair.color} />
              <circle cx="48" cy="46" r="14" fill={hair.color} />
              <circle cx="112" cy="46" r="14" fill={hair.color} />
              {/* Forehead taper */}
              <path d="M 46 54 Q 80 42 114 54 Q 80 34 46 54 Z" fill={hair.color} />
              {/* Highlight shine */}
              <ellipse cx="76" cy="24" rx="14" ry="4" fill={hair.highlight} opacity="0.3" />
            </g>
          )}

          {customization.hairStyle === 'fade' && (
            <g id="hair-fade">
              {/* Modern clean taper line */}
              <path
                d="M 44 60 C 44 40 54 32 80 32 C 106 32 116 40 116 60 C 114 50 106 44 80 44 C 54 44 46 50 44 60 Z"
                fill={hair.color}
              />
              <path d="M 52 46 Q 80 38 108 46" stroke={hair.highlight} strokeWidth="2" fill="none" opacity="0.4" />
            </g>
          )}

          {customization.hairStyle === 'dreads' && (
            <g id="hair-dreads-front">
              {/* Front Dreadlock Strands with golden beads */}
              <rect x="52" y="36" width="7" height="34" rx="3.5" fill={hair.color} />
              <rect x="62" y="32" width="7" height="38" rx="3.5" fill={hair.color} />
              <rect x="91" y="32" width="7" height="38" rx="3.5" fill={hair.color} />
              <rect x="101" y="36" width="7" height="34" rx="3.5" fill={hair.color} />
              {/* Gold Ring Accessories on dreads */}
              <rect x="52" y="52" width="7" height="3" fill="#F59E0B" />
              <rect x="101" y="56" width="7" height="3" fill="#F59E0B" />
            </g>
          )}

          {customization.hairStyle === 'braids' && (
            <g id="hair-braids">
              <path d="M 46 54 C 54 34 106 34 114 54 C 104 42 56 42 46 54 Z" fill={hair.color} />
              {/* Braid pattern lines */}
              <line x1="60" y1="36" x2="68" y2="48" stroke={hair.highlight} strokeWidth="2" />
              <line x1="72" y1="34" x2="80" y2="48" stroke={hair.highlight} strokeWidth="2" />
              <line x1="88" y1="34" x2="80" y2="48" stroke={hair.highlight} strokeWidth="2" />
              <line x1="100" y1="36" x2="92" y2="48" stroke={hair.highlight} strokeWidth="2" />
              {/* Beads at bottom */}
              <circle cx="48" cy="62" r="3" fill="#F59E0B" />
              <circle cx="112" cy="62" r="3" fill="#F59E0B" />
            </g>
          )}

          {customization.hairStyle === 'curls' && (
            <g id="hair-curls-front">
              <circle cx="56" cy="40" r="14" fill={hair.color} />
              <circle cx="74" cy="34" r="14" fill={hair.color} />
              <circle cx="92" cy="34" r="14" fill={hair.color} />
              <circle cx="106" cy="42" r="13" fill={hair.color} />
              <circle cx="68" cy="46" r="10" fill={hair.color} />
              <circle cx="86" cy="46" r="10" fill={hair.color} />
            </g>
          )}

          {customization.hairStyle === 'side_part' && (
            <g id="hair-side-part">
              <path
                d="M 44 58 C 44 38 60 30 84 30 C 108 30 116 38 116 58 C 110 44 94 40 76 44 C 60 48 48 54 44 58 Z"
                fill={hair.color}
              />
              <path d="M 68 34 L 64 46" stroke={skin.color} strokeWidth="2" /> {/* Clean Part */}
            </g>
          )}

          {customization.hairStyle === 'high_puff' && (
            <g id="hair-puff-front">
              <path d="M 44 58 C 44 42 56 36 80 36 C 104 36 116 42 116 58 C 108 46 94 44 80 44 C 66 44 52 46 44 58 Z" fill={hair.color} />
            </g>
          )}

          {customization.hairStyle === 'buzz' && (
            <g id="hair-buzz">
              <path d="M 45 56 C 45 42 55 36 80 36 C 105 36 115 42 115 56 C 108 48 94 46 80 46 C 66 46 52 48 45 56 Z" fill={hair.color} opacity="0.8" />
            </g>
          )}
        </g>

        {/* ==================================================== */}
        {/* ACCESSORIES                                          */}
        {/* ==================================================== */}
        {customization.accessory === 'glasses_round' && (
          <g id="acc-glasses-round">
            <circle cx="65" cy="62" r="16" fill="none" stroke="#F59E0B" strokeWidth="3" />
            <circle cx="95" cy="62" r="16" fill="none" stroke="#F59E0B" strokeWidth="3" />
            <line x1="81" y1="62" x2="79" y2="62" stroke="#F59E0B" strokeWidth="3.5" />
            <line x1="49" y1="60" x2="44" y2="64" stroke="#F59E0B" strokeWidth="2.5" />
            <line x1="111" y1="60" x2="116" y2="64" stroke="#F59E0B" strokeWidth="2.5" />
            {/* Glass Glare */}
            <path d="M 56 54 L 62 50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 86 54 L 92 50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>
        )}

        {customization.accessory === 'glasses_square' && (
          <g id="acc-glasses-square">
            <rect x="50" y="52" width="26" height="20" rx="4" fill="none" stroke="#1E293B" strokeWidth="3" />
            <rect x="84" y="52" width="26" height="20" rx="4" fill="none" stroke="#1E293B" strokeWidth="3" />
            <line x1="76" y1="60" x2="84" y2="60" stroke="#1E293B" strokeWidth="3" />
            <line x1="50" y1="58" x2="44" y2="62" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="110" y1="58" x2="116" y2="62" stroke="#1E293B" strokeWidth="2.5" />
          </g>
        )}

        {customization.accessory === 'headphones' && (
          <g id="acc-headphones">
            {/* Around the neck headset */}
            <path d="M 52 98 C 52 116 108 116 108 98" stroke="#1E293B" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Left Ear Cushion */}
            <rect x="46" y="90" width="12" height="16" rx="6" fill="#2452FF" stroke="#1E293B" strokeWidth="2" />
            {/* Right Ear Cushion */}
            <rect x="102" y="90" width="12" height="16" rx="6" fill="#2452FF" stroke="#1E293B" strokeWidth="2" />
          </g>
        )}

        {customization.accessory === 'gabon_headband' && (
          <g id="acc-gabon-headband">
            <path d="M 44 48 Q 80 40 116 48 L 116 54 Q 80 46 44 54 Z" fill="#16C784" /> {/* Green */}
            <path d="M 44 51 Q 80 43 116 51 L 116 54 Q 80 46 44 54 Z" fill="#FACC15" /> {/* Yellow */}
            <path d="M 44 54 Q 80 46 116 54 L 116 57 Q 80 49 44 57 Z" fill="#2452FF" /> {/* Blue */}
          </g>
        )}

        {customization.accessory === 'scholar_cap' && (
          <g id="acc-scholar-cap" transform="translate(80, 24) rotate(-5) translate(-80, -24)">
            {/* Academic Mortarboard */}
            <polygon points="80,10 114,22 80,30 46,22" fill="#1E1B4B" />
            <path d="M 58 24 L 58 32 C 58 38 102 38 102 32 L 102 24 Z" fill="#312E81" />
            {/* Gold Tassel */}
            <line x1="80" y1="20" x2="114" y2="34" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="114" cy="35" r="3" fill="#F59E0B" />
          </g>
        )}

        {customization.accessory === 'cap_reversed' && (
          <g id="acc-cap-reversed">
            {/* Backward Baseball Cap */}
            <path d="M 44 50 C 44 32 54 26 80 26 C 106 26 116 32 116 50 Z" fill="#EF4444" />
            {/* Brim turned back */}
            <ellipse cx="80" cy="50" rx="36" ry="6" fill="#DC2626" />
            {/* Little Top Button */}
            <circle cx="80" cy="26" r="2.5" fill="#FFFFFF" />
          </g>
        )}
      </motion.svg>
    </div>
  );
};
