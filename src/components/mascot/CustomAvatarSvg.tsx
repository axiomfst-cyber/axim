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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3.5 bg-slate-900/25 rounded-full blur-[1px]"
      />

      {/* Main Avatar Character Body */}
      <motion.svg
        viewBox="0 0 160 215"
        className="w-full h-full overflow-visible"
        animate={
          isJoy
            ? {
                y: [0, 6, -26, 3, 0],
                scaleX: [1, 1.15, 0.88, 1.05, 1],
                scaleY: [1, 0.84, 1.18, 0.96, 1],
                rotate: [0, -2.5, 2.5, -1, 0],
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

        {customization.clothingStyle === 'traditional_kaba' && (
          <g id="cloth-kaba-back">
            <path d="M 50 94 Q 80 82 110 94 L 114 108 Q 80 114 46 108 Z" fill="#F59E0B" opacity="0.9" />
          </g>
        )}

        {customization.clothingStyle === 'varsity_jacket' && (
          <g id="cloth-varsity-back">
            <path d="M 54 94 Q 80 88 106 94 L 108 102 Q 80 98 52 102 Z" fill="#1E293B" />
            <line x1="56" y1="96" x2="104" y2="96" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        )}

        {customization.clothingStyle === 'tracksuit_retro' && (
          <g id="cloth-tracksuit-back">
            <path d="M 56 94 Q 80 88 104 94 L 106 102 Q 80 98 54 102 Z" fill={clothing.secondary} />
          </g>
        )}

        {customization.clothingStyle === 'traditional_boubou_femme' && (
          <g id="cloth-boubou-femme-back">
            <path d="M 46 94 Q 80 80 114 94 L 118 112 Q 80 116 42 112 Z" fill="#F59E0B" opacity="0.95" />
            <path d="M 44 98 Q 80 108 116 98" stroke="#FEF3C7" strokeWidth="2" fill="none" />
          </g>
        )}

        {customization.clothingStyle === 'cyber_pilot' && (
          <g id="cloth-cyber-back">
            <rect x="62" y="86" width="36" height="18" rx="4" fill="#0F172A" stroke="#06B6D4" strokeWidth="1" />
            <circle cx="70" cy="94" r="2.5" fill="#06B6D4" />
            <circle cx="90" cy="94" r="2.5" fill="#06B6D4" />
          </g>
        )}

        {customization.clothingStyle === 'high_school_skirt_uniform' && (
          <g id="cloth-skirt-uniform-back">
            <path d="M 54 94 Q 80 88 106 94 L 108 102 Q 80 98 52 102 Z" fill={clothing.secondary} />
          </g>
        )}

        {customization.clothingStyle === 'business_suit_chic' && (
          <g id="cloth-suit-back">
            <path d="M 54 94 Q 80 88 106 94 L 108 102 Q 80 98 52 102 Z" fill="#0F172A" />
            <line x1="56" y1="96" x2="104" y2="96" stroke="#475569" strokeWidth="1" />
          </g>
        )}

        {/* ==================================================== */}
        {/* LEGS & FEET (Pants, Shorts, Shoes adapted to Outfit) */}
        {/* ==================================================== */}
        <g id="avatar-legs-and-feet">
          {/* Ground Foot Shadows */}
          <ellipse cx="60" cy="209" rx="14" ry="3.5" fill="#0F172A" opacity="0.3" />
          <ellipse cx="100" cy="209" rx="14" ry="3.5" fill="#0F172A" opacity="0.3" />

          {/* 1. Uniforme Blazer: Tailored Navy Trousers & Polished Oxford Shoes */}
          {customization.clothingStyle === 'uniform_blazer' && (
            <g id="legs-uniform">
              {/* Belt & Waistband */}
              <rect x="50" y="148" width="60" height="7" rx="1.5" fill="#0F172A" />
              <rect x="75" y="147" width="10" height="9" rx="1" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <rect x="78" y="149" width="4" height="5" rx="0.5" fill="#0F172A" />
              {/* Left Leg */}
              <path d="M 52 153 L 50 196 L 69 196 L 73 158 Z" fill="#1E293B" />
              <line x1="60" y1="158" x2="59" y2="194" stroke="#334155" strokeWidth="1" opacity="0.8" /> {/* Crease */}
              <rect x="49" y="193" width="21" height="3.5" rx="1" fill="#0F172A" /> {/* Trouser Cuff */}
              {/* Right Leg */}
              <path d="M 87 158 L 91 196 L 110 196 L 108 153 Z" fill="#1E293B" />
              <line x1="100" y1="158" x2="101" y2="194" stroke="#334155" strokeWidth="1" opacity="0.8" /> {/* Crease */}
              <rect x="90" y="193" width="21" height="3.5" rx="1" fill="#0F172A" /> {/* Trouser Cuff */}
              {/* Left Oxford Shoe */}
              <path d="M 44 200 C 44 196 52 195 62 195 C 71 195 73 198 73 203 L 73 207 C 73 209 70 210 60 210 C 46 210 44 206 44 200 Z" fill="#0F172A" />
              <path d="M 43 206 L 73 206 L 73 209 C 73 210 68 210 58 210 C 46 210 43 208 43 206 Z" fill="#78350F" /> {/* Leather Sole */}
              <ellipse cx="50" cy="199" rx="3.5" ry="1.5" fill="#FFFFFF" opacity="0.4" /> {/* Shine */}
              {/* Right Oxford Shoe */}
              <path d="M 87 203 C 87 198 89 195 98 195 C 108 195 116 196 116 200 C 116 206 114 210 100 210 C 90 210 87 209 87 207 Z" fill="#0F172A" />
              <path d="M 87 206 L 117 206 L 117 209 C 114 210 102 210 90 210 C 87 210 87 208 87 206 Z" fill="#78350F" /> {/* Leather Sole */}
              <ellipse cx="110" cy="199" rx="3.5" ry="1.5" fill="#FFFFFF" opacity="0.4" /> {/* Shine */}
            </g>
          )}

          {/* 2. Maillot National Gabon: Royal Blue Sport Shorts, Bare Knees, Tricolor Socks, Cleats */}
          {customization.clothingStyle === 'gabon_jersey' && (
            <g id="legs-gabon-sport">
              {/* Athletic Shorts */}
              <path d="M 48 148 L 46 174 L 73 174 L 80 156 L 87 174 L 114 174 L 112 148 Z" fill="#2452FF" />
              {/* Yellow & Green Side Stripes on Shorts */}
              <line x1="48" y1="149" x2="46" y2="173" stroke="#FACC15" strokeWidth="2" />
              <line x1="50" y1="149" x2="48" y2="173" stroke="#10B981" strokeWidth="1.5" />
              <line x1="112" y1="149" x2="114" y2="173" stroke="#FACC15" strokeWidth="2" />
              <line x1="110" y1="149" x2="112" y2="173" stroke="#10B981" strokeWidth="1.5" />
              {/* Bare Athletic Knees & Legs (Skin Tone) */}
              <rect x="50" y="172" width="18" height="15" rx="3" fill="url(#avatarSkinGrad)" />
              <rect x="92" y="172" width="18" height="15" rx="3" fill="url(#avatarSkinGrad)" />
              {/* Tricolor National High Socks (Vert - Jaune - Bleu) */}
              {/* Left Sock */}
              <rect x="50" y="185" width="18" height="12" rx="2" fill="#10B981" />
              <rect x="50" y="188" width="18" height="3" fill="#FACC15" />
              <rect x="50" y="191" width="18" height="3" fill="#2452FF" />
              {/* Right Sock */}
              <rect x="92" y="185" width="18" height="12" rx="2" fill="#10B981" />
              <rect x="92" y="188" width="18" height="3" fill="#FACC15" />
              <rect x="92" y="191" width="18" height="3" fill="#2452FF" />
              {/* Left Panther Cleat / Sneaker */}
              <path d="M 42 200 C 42 195 50 195 62 195 C 72 195 72 199 72 204 L 72 208 C 72 210 68 210 58 210 C 44 210 42 206 42 200 Z" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" />
              <path d="M 44 201 Q 56 197 68 203" stroke="#FACC15" strokeWidth="2.5" fill="none" />
              <rect x="42" y="207" width="30" height="3" rx="1" fill="#0F172A" /> {/* Studded Sole */}
              {/* Right Panther Cleat / Sneaker */}
              <path d="M 88 204 C 88 199 88 195 98 195 C 110 195 118 195 118 200 C 118 206 116 210 102 210 C 92 210 88 210 88 208 Z" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" />
              <path d="M 92 203 Q 104 197 116 201" stroke="#FACC15" strokeWidth="2.5" fill="none" />
              <rect x="88" y="207" width="30" height="3" rx="1" fill="#0F172A" /> {/* Studded Sole */}
            </g>
          )}

          {/* 3. Street Hoodie: Modern Cargo Joggers & Chunky Streetwear Sneakers */}
          {customization.clothingStyle === 'street_hoodie' && (
            <g id="legs-streetwear">
              {/* Jogger Waistband */}
              <rect x="48" y="148" width="64" height="7" rx="2" fill={clothing.secondary} />
              {/* Hanging Jogger Drawstrings */}
              <path d="M 77 153 Q 76 163 74 168" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M 83 153 Q 84 163 86 168" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              {/* Left Jogger Leg with Cargo Pocket */}
              <path d="M 48 153 L 47 192 C 47 194 54 195 62 195 C 70 195 72 194 73 192 L 77 158 Z" fill={clothing.secondary} />
              <rect x="45" y="167" width="7" height="11" rx="1.5" fill={clothing.primary} stroke={clothing.light} strokeWidth="0.8" /> {/* Cargo Pocket */}
              <rect x="48" y="191" width="22" height="4" rx="1.5" fill="#0F172A" /> {/* Elastic Ankle Cuff */}
              {/* Right Jogger Leg with Cargo Pocket */}
              <path d="M 83 158 L 87 192 C 88 194 90 195 98 195 C 106 195 113 194 113 192 L 112 153 Z" fill={clothing.secondary} />
              <rect x="108" y="167" width="7" height="11" rx="1.5" fill={clothing.primary} stroke={clothing.light} strokeWidth="0.8" /> {/* Cargo Pocket */}
              <rect x="90" y="191" width="22" height="4" rx="1.5" fill="#0F172A" /> {/* Elastic Ankle Cuff */}
              {/* Left Chunky Sneaker */}
              <path d="M 42 201 C 42 195 50 194 62 194 C 72 194 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 44 210 42 207 42 201 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="41" y="206" width="34" height="4" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" /> {/* Chunky Sole */}
              <path d="M 46 200 Q 56 198 68 202" stroke={clothing.primary} strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Right Chunky Sneaker */}
              <path d="M 86 204 C 86 198 88 194 98 194 C 110 194 118 195 118 201 C 118 207 116 210 102 210 C 92 210 86 210 86 208 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="85" y="206" width="34" height="4" rx="1.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" /> {/* Chunky Sole */}
              <path d="M 92 202 Q 104 198 114 200" stroke={clothing.primary} strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* 4. Polo STEM: Straight Chinos & Classic Crisp White Sneakers */}
          {customization.clothingStyle === 'stem_polo' && (
            <g id="legs-stem-chinos">
              <rect x="50" y="148" width="60" height="7" rx="1.5" fill="#334155" />
              {/* Left Chino Leg */}
              <path d="M 52 153 L 51 195 L 70 195 L 74 158 Z" fill="#475569" />
              <rect x="50" y="192" width="21" height="3" rx="1" fill="#334155" /> {/* Hem */}
              {/* Right Chino Leg */}
              <path d="M 86 158 L 90 195 L 109 195 L 108 153 Z" fill="#475569" />
              <rect x="89" y="192" width="21" height="3" rx="1" fill="#334155" /> {/* Hem */}
              {/* Left Sneaker */}
              <path d="M 44 201 C 44 196 52 195 62 195 C 71 195 73 198 73 204 L 73 208 C 73 210 68 210 58 210 C 45 210 44 207 44 201 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="43" y="207" width="31" height="3" rx="1" fill="#E2E8F0" />
              {/* Right Sneaker */}
              <path d="M 87 204 C 87 198 89 195 98 195 C 108 195 116 196 116 201 C 116 207 115 210 102 210 C 92 210 87 210 87 208 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="86" y="207" width="31" height="3" rx="1" fill="#E2E8F0" />
            </g>
          )}

          {/* 5. Tunique Wax: Matching Embroidered Wax Trousers & Ceremonial Leather Loafers */}
          {customization.clothingStyle === 'traditional_wax' && (
            <g id="legs-traditional-wax">
              {/* Left Trousers Leg with Wax Motifs */}
              <path d="M 50 153 L 49 194 L 70 194 L 75 158 Z" fill={clothing.primary} />
              <path d="M 52 168 L 60 160 L 68 168 L 60 176 Z" fill="#F59E0B" opacity="0.8" />
              <rect x="48" y="191" width="23" height="4" fill="#F59E0B" /> {/* Gold Anklet Border */}
              {/* Right Trousers Leg with Wax Motifs */}
              <path d="M 85 158 L 90 194 L 111 194 L 110 153 Z" fill={clothing.primary} />
              <path d="M 92 168 L 100 160 L 108 168 L 100 176 Z" fill="#F59E0B" opacity="0.8" />
              <rect x="89" y="191" width="23" height="4" fill="#F59E0B" /> {/* Gold Anklet Border */}
              {/* Left Traditional Loafer with Gold Buckle */}
              <path d="M 44 202 C 44 196 52 195 62 195 C 72 195 73 198 73 204 L 73 208 C 73 210 68 210 58 210 C 46 210 44 207 44 202 Z" fill="#78350F" />
              <rect x="52" y="197" width="8" height="3" rx="1" fill="#F59E0B" />
              {/* Right Traditional Loafer with Gold Buckle */}
              <path d="M 87 204 C 87 198 88 195 98 195 C 108 195 116 196 116 202 C 116 207 114 210 102 210 C 92 210 87 210 87 208 Z" fill="#78350F" />
              <rect x="100" y="197" width="8" height="3" rx="1" fill="#F59E0B" />
            </g>
          )}

          {/* 6. Blouse Labo: Mid-thigh Lab Coat Split, Dark Trousers, Non-slip Safety Shoes */}
          {customization.clothingStyle === 'lab_coat' && (
            <g id="legs-lab-safety">
              {/* Dark Trousers underneath */}
              <path d="M 52 158 L 51 196 L 69 196 L 73 166 Z" fill="#1E293B" />
              <path d="M 87 166 L 91 196 L 109 196 L 108 158 Z" fill="#1E293B" />
              {/* Extended Lab Coat Flaps falling to upper thighs */}
              <path d="M 38 148 L 36 172 C 36 176 56 176 74 174 L 74 148 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <path d="M 86 148 L 86 174 C 104 176 124 176 124 172 L 122 148 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              {/* Left Safety Shoe */}
              <path d="M 44 201 C 44 196 52 195 62 195 C 71 195 73 198 73 204 L 73 208 C 73 210 68 210 58 210 C 45 210 44 207 44 201 Z" fill="#334155" />
              <rect x="43" y="206" width="31" height="3.5" rx="1" fill="#10B981" opacity="0.8" /> {/* Non-slip Grip Line */}
              {/* Right Safety Shoe */}
              <path d="M 87 204 C 87 198 89 195 98 195 C 108 195 116 196 116 201 C 116 207 115 210 102 210 C 92 210 87 210 87 208 Z" fill="#334155" />
              <rect x="86" y="206" width="31" height="3.5" rx="1" fill="#10B981" opacity="0.8" /> {/* Non-slip Grip Line */}
            </g>
          )}

          {/* 7. Grande Toge d’Excellence: Flowing Academic Gown Hem & Polished Black Shoes */}
          {customization.clothingStyle === 'academic_robe' && (
            <g id="legs-academic-robe">
              {/* Deep Flowing Robe Skirt */}
              <path
                d="M 34 150 C 34 186 38 198 48 198 L 112 198 C 122 198 126 186 126 150 Z"
                fill={clothing.secondary}
                filter="url(#avatarDropShadow)"
              />
              {/* Robe Vertical Folds */}
              <line x1="56" y1="156" x2="54" y2="198" stroke="#0F172A" strokeWidth="2" opacity="0.6" />
              <line x1="80" y1="156" x2="80" y2="198" stroke="#0F172A" strokeWidth="2" opacity="0.6" />
              <line x1="104" y1="156" x2="106" y2="198" stroke="#0F172A" strokeWidth="2" opacity="0.6" />
              {/* Gold Satin Stole Ends Hanging Down */}
              <rect x="70" y="162" width="7" height="32" fill="#F59E0B" />
              <rect x="83" y="162" width="7" height="32" fill="#F59E0B" />
              <rect x="70" y="190" width="7" height="4" fill="#B45309" />
              <rect x="83" y="190" width="7" height="4" fill="#B45309" />
              {/* Formal Dress Shoes Peeking from under Gown */}
              <path d="M 48 202 C 48 198 54 196 62 196 C 70 196 71 199 71 205 L 71 208 C 71 210 66 210 58 210 C 49 210 48 207 48 202 Z" fill="#0F172A" />
              <ellipse cx="54" cy="201" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.4" />
              <path d="M 89 205 C 89 199 90 196 98 196 C 106 196 112 198 112 202 C 112 207 111 210 102 210 C 94 210 89 210 89 208 Z" fill="#0F172A" />
              <ellipse cx="106" cy="201" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.4" />
            </g>
          )}

          {/* 8. Uniforme Écogarde: Safari Cargo Trousers, Side Bellows Pockets, Explorer Field Boots */}
          {customization.clothingStyle === 'ecogarde_ranger' && (
            <g id="legs-ecogarde">
              {/* Heavy Leather Cargo Belt */}
              <rect x="50" y="148" width="60" height="7" rx="1.5" fill="#3E2723" />
              <rect x="76" y="147" width="8" height="9" rx="1" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              {/* Left Cargo Leg */}
              <path d="M 52 153 L 49 194 L 70 194 L 74 158 Z" fill="#6B655B" />
              <rect x="44" y="166" width="8" height="12" rx="1.5" fill="#57534E" stroke="#3E2723" strokeWidth="0.7" /> {/* Left Thigh Pocket */}
              <circle cx="48" cy="168" r="0.8" fill="#F59E0B" />
              <rect x="48" y="191" width="23" height="3.5" rx="1" fill="#57534E" />
              {/* Right Cargo Leg */}
              <path d="M 86 158 L 90 194 L 111 194 L 108 153 Z" fill="#6B655B" />
              <rect x="108" y="166" width="8" height="12" rx="1.5" fill="#57534E" stroke="#3E2723" strokeWidth="0.7" /> {/* Right Thigh Pocket */}
              <circle cx="112" cy="168" r="0.8" fill="#F59E0B" />
              <rect x="89" y="191" width="23" height="3.5" rx="1" fill="#57534E" />
              {/* Left Explorer Field Boot */}
              <path d="M 43 200 C 43 195 51 194 62 194 C 72 194 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 45 210 43 207 43 200 Z" fill="#451A03" />
              <rect x="42" y="206" width="33" height="4" rx="1" fill="#1C1917" /> {/* Lug Sole */}
              <line x1="52" y1="196" x2="60" y2="201" stroke="#D97706" strokeWidth="1.2" /> {/* Laces */}
              <line x1="60" y1="196" x2="52" y2="201" stroke="#D97706" strokeWidth="1.2" />
              {/* Right Explorer Field Boot */}
              <path d="M 86 204 C 86 198 88 194 98 194 C 109 194 117 195 117 200 C 117 207 115 210 102 210 C 92 210 86 210 86 208 Z" fill="#451A03" />
              <rect x="85" y="206" width="33" height="4" rx="1" fill="#1C1917" /> {/* Lug Sole */}
              <line x1="95" y1="196" x2="103" y2="201" stroke="#D97706" strokeWidth="1.2" /> {/* Laces */}
              <line x1="103" y1="196" x2="95" y2="201" stroke="#D97706" strokeWidth="1.2" />
            </g>
          )}

          {/* 9. Boubou d’Apparat: Ceremonial Embroidered Wrap & Traditional Woven Leather Sandals */}
          {customization.clothingStyle === 'traditional_kaba' && (
            <g id="legs-traditional-kaba">
              {/* Flowing Ceremonial Pagne Skirt */}
              <path
                d="M 38 148 C 38 184 42 196 50 196 L 110 196 C 118 196 122 184 122 148 Z"
                fill={clothing.secondary}
                filter="url(#avatarDropShadow)"
              />
              {/* Golden Tribal Border on Hem */}
              <rect x="39" y="192" width="82" height="4.5" fill="#F59E0B" />
              <path d="M 44 194 L 48 192 L 52 194 L 48 196 Z" fill="#FEF3C7" />
              <path d="M 64 194 L 68 192 L 72 194 L 68 196 Z" fill="#FEF3C7" />
              <path d="M 84 194 L 88 192 L 92 194 L 88 196 Z" fill="#FEF3C7" />
              <path d="M 104 194 L 108 192 L 112 194 L 108 196 Z" fill="#FEF3C7" />
              {/* Bare Ankles Peeking */}
              <rect x="52" y="194" width="16" height="5" rx="1" fill="url(#avatarSkinGrad)" />
              <rect x="92" y="194" width="16" height="5" rx="1" fill="url(#avatarSkinGrad)" />
              {/* Left Traditional Woven Sandal */}
              <path d="M 44 202 C 44 197 52 196 62 196 C 71 196 73 199 73 204 L 73 208 C 73 210 68 210 58 210 C 46 210 44 207 44 202 Z" fill="#78350F" />
              <line x1="48" y1="199" x2="68" y2="199" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="58" cy="199" r="1.5" fill="#FEF3C7" />
              {/* Right Traditional Woven Sandal */}
              <path d="M 87 204 C 87 199 89 196 98 196 C 108 196 116 197 116 202 C 116 207 114 210 102 210 C 92 210 87 210 87 208 Z" fill="#78350F" />
              <line x1="91" y1="199" x2="111" y2="199" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="101" cy="199" r="1.5" fill="#FEF3C7" />
            </g>
          )}

          {/* 10. Veste Varsity Campus: Slim Indigo Jeans & Retro High-Top Sneakers */}
          {customization.clothingStyle === 'varsity_jacket' && (
            <g id="legs-varsity-jeans">
              {/* Indigo Jeans Waistband */}
              <rect x="50" y="148" width="60" height="7" rx="1.5" fill="#1E293B" />
              <line x1="50" y1="154" x2="110" y2="154" stroke="#D97706" strokeWidth="0.8" /> {/* Gold Topstitching */}
              {/* Left Jeans Leg */}
              <path d="M 52 153 L 50 193 L 69 193 L 73 158 Z" fill="#1E293B" />
              <line x1="53" y1="154" x2="51" y2="192" stroke="#D97706" strokeWidth="0.8" /> {/* Side Seam */}
              <rect x="49" y="190" width="21" height="4" rx="1" fill="#334155" /> {/* Rolled Hem */}
              {/* Right Jeans Leg */}
              <path d="M 87 158 L 91 193 L 110 193 L 108 153 Z" fill="#1E293B" />
              <line x1="107" y1="154" x2="109" y2="192" stroke="#D97706" strokeWidth="0.8" />
              <rect x="90" y="190" width="21" height="4" rx="1" fill="#334155" /> {/* Rolled Hem */}
              {/* Left High-Top Sneaker */}
              <path d="M 43 200 C 43 195 51 194 62 194 C 72 194 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 45 210 43 207 43 200 Z" fill={clothing.primary} />
              <rect x="42" y="206" width="33" height="4" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" /> {/* White Rubber Sole */}
              <path d="M 42 201 C 42 197 46 195 51 195 L 51 206 L 42 206 Z" fill="#FFFFFF" /> {/* White Toe Cap */}
              <circle cx="64" cy="201" r="2.5" fill="#FFFFFF" />
              <polygon points="64,199 64.6,200.5 66,200.5 65,201.5 65.4,203 64,202 62.6,203 63,201.5 62,200.5 63.4,200.5" fill={clothing.primary} />
              {/* Right High-Top Sneaker */}
              <path d="M 86 204 C 86 198 88 194 98 194 C 109 194 117 195 117 200 C 117 207 115 210 102 210 C 92 210 86 210 86 208 Z" fill={clothing.primary} />
              <rect x="85" y="206" width="33" height="4" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <path d="M 109 195 C 114 195 118 197 118 201 L 118 206 L 109 206 Z" fill="#FFFFFF" />
              <circle cx="96" cy="201" r="2.5" fill="#FFFFFF" />
              <polygon points="96,199 96.6,200.5 98,200.5 97,201.5 97.4,203 96,202 94.6,203 95,201.5 94,200.5 95.4,200.5" fill={clothing.primary} />
            </g>
          )}

          {/* 11. Salopette d’Artiste: Blue Denim Dungarees, Knee Stitching & Retro Canvas Sneakers */}
          {customization.clothingStyle === 'artist_dungarees' && (
            <g id="legs-dungarees">
              {/* Left Denim Dungaree Leg */}
              <path d="M 52 153 L 49 193 L 70 193 L 74 158 Z" fill="#2563EB" />
              <rect x="52" y="168" width="14" height="11" rx="2" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="0.7" /> {/* Left Knee Patch */}
              <rect x="48" y="190" width="23" height="4" rx="1" fill="#1E40AF" /> {/* Rolled Hem */}
              {/* Right Denim Dungaree Leg */}
              <path d="M 86 158 L 90 193 L 111 193 L 108 153 Z" fill="#2563EB" />
              <rect x="94" y="168" width="14" height="11" rx="2" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="0.7" /> {/* Right Knee Patch */}
              <rect x="89" y="190" width="23" height="4" rx="1" fill="#1E40AF" />
              {/* Left Retro Canvas Sneaker */}
              <path d="M 43 201 C 43 196 51 195 62 195 C 72 195 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 45 210 43 207 43 201 Z" fill="#DC2626" />
              <rect x="42" y="206" width="33" height="4" rx="1" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <path d="M 42 201 C 42 197 46 195 50 195 L 50 206 L 42 206 Z" fill="#FFFFFF" />
              <line x1="42" y1="208" x2="75" y2="208" stroke="#0F172A" strokeWidth="0.8" /> {/* Foxing Stripe */}
              {/* Right Retro Canvas Sneaker */}
              <path d="M 86 204 C 86 198 88 195 98 195 C 109 195 117 196 117 201 C 117 207 115 210 102 210 C 92 210 86 210 86 208 Z" fill="#DC2626" />
              <rect x="85" y="206" width="33" height="4" rx="1" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <path d="M 110 195 C 114 195 118 197 118 201 L 118 206 L 110 206 Z" fill="#FFFFFF" />
              <line x1="85" y1="208" x2="118" y2="208" stroke="#0F172A" strokeWidth="0.8" />
            </g>
          )}

          {/* 12. Survêtement Rétro Coupe-Vent: Tracksuit Bottoms with Dual Vintage Stripes & Runners */}
          {customization.clothingStyle === 'tracksuit_retro' && (
            <g id="legs-tracksuit-retro">
              {/* Left Tracksuit Leg */}
              <path d="M 50 150 L 48 193 C 48 195 55 196 63 196 C 71 196 73 195 74 193 L 78 158 Z" fill={clothing.secondary} />
              {/* Vintage Dual Side Stripes */}
              <line x1="49" y1="151" x2="47" y2="192" stroke="#FFFFFF" strokeWidth="1.8" />
              <line x1="52" y1="151" x2="50" y2="192" stroke="#FACC15" strokeWidth="1.5" />
              <rect x="47" y="191" width="23" height="4" rx="1.5" fill="#0F172A" /> {/* Ribbed Ankle */}
              {/* Right Tracksuit Leg */}
              <path d="M 82 158 L 86 193 C 87 195 89 196 97 196 C 105 196 112 195 112 193 L 110 150 Z" fill={clothing.secondary} />
              <line x1="111" y1="151" x2="113" y2="192" stroke="#FFFFFF" strokeWidth="1.8" />
              <line x1="108" y1="151" x2="110" y2="192" stroke="#FACC15" strokeWidth="1.5" />
              <rect x="89" y="191" width="23" height="4" rx="1.5" fill="#0F172A" />
              {/* Left Aerodynamic Runner */}
              <path d="M 42 201 C 42 195 50 194 62 194 C 72 194 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 44 210 42 207 42 201 Z" fill="#0F172A" />
              <path d="M 41 206 Q 58 204 74 207 L 74 210 C 68 210 46 210 41 208 Z" fill="#FFFFFF" /> {/* Chunky Foam Wedge */}
              <path d="M 46 200 Q 58 198 68 202" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Right Aerodynamic Runner */}
              <path d="M 86 204 C 86 198 88 194 98 194 C 110 194 118 195 118 201 C 118 207 116 210 102 210 C 92 210 86 210 86 208 Z" fill="#0F172A" />
              <path d="M 85 207 Q 102 204 118 206 L 118 208 C 114 210 92 210 85 210 Z" fill="#FFFFFF" />
              <path d="M 92 202 Q 102 198 114 200" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          )}

          {/* 13. Robe Évasée Wax & Dentelle: Flared Gathered Wax Skirt & Chic Pumps */}
          {customization.clothingStyle === 'wax_dress_modern' && (
            <g id="legs-wax-dress">
              {/* Slender Legs */}
              <rect x="56" y="190" width="8" height="12" rx="3" fill={skin.color} />
              <rect x="96" y="190" width="8" height="12" rx="3" fill={skin.color} />
              {/* Flared Wax Skirt with Gathered Ruffles */}
              <path
                d="M 46 148 C 36 162 26 182 22 195 C 38 198 60 195 80 197 C 100 195 122 198 138 195 C 134 182 124 162 114 148 Z"
                fill={clothing.primary}
                stroke={clothing.secondary}
                strokeWidth="1.2"
              />
              {/* Wax Geometric Print Waves & Ruffles */}
              <path d="M 28 178 Q 54 186 80 178 Q 106 186 132 178" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
              <path d="M 24 190 Q 52 196 80 191 Q 108 196 136 190" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              {/* Golden Hem Trimming */}
              <path d="M 22 195 Q 80 200 138 195" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
              {/* Left Chic High-Heel Pump */}
              <path d="M 52 201 C 52 197 58 196 64 196 C 70 196 73 199 73 204 L 73 208 C 73 210 68 210 60 210 C 52 210 52 207 52 201 Z" fill="#0F172A" />
              <path d="M 52 202 L 53 209" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="61" cy="198" rx="2" ry="1.2" fill="#F59E0B" />
              {/* Right Chic High-Heel Pump */}
              <path d="M 87 204 C 87 199 90 196 96 196 C 102 196 108 197 108 201 C 108 207 108 210 100 210 C 92 210 87 210 87 208 Z" fill="#0F172A" />
              <path d="M 107 202 L 107 209" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="99" cy="198" rx="2" ry="1.2" fill="#F59E0B" />
            </g>
          )}

          {/* 14. Uniforme Lycéenne (Jupe & Veste): Pleated High School Skirt, High Socks & Derbies */}
          {customization.clothingStyle === 'high_school_skirt_uniform' && (
            <g id="legs-skirt-uniform">
              {/* Pleated Skirt */}
              <path d="M 48 148 L 36 186 L 124 186 L 112 148 Z" fill="#1E293B" />
              {/* Skirt Pleats */}
              <line x1="50" y1="148" x2="48" y2="186" stroke="#334155" strokeWidth="1.5" />
              <line x1="62" y1="148" x2="62" y2="186" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="74" y1="148" x2="74" y2="186" stroke="#334155" strokeWidth="1.5" />
              <line x1="86" y1="148" x2="86" y2="186" stroke="#334155" strokeWidth="1.5" />
              <line x1="98" y1="148" x2="98" y2="186" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="110" y1="148" x2="112" y2="186" stroke="#334155" strokeWidth="1.5" />
              <line x1="36" y1="184" x2="124" y2="184" stroke="#DC2626" strokeWidth="1.5" />
              {/* Left Knee & High White Sock with Navy Stripes */}
              <rect x="54" y="186" width="12" height="12" rx="2" fill="#FFFFFF" />
              <line x1="54" y1="189" x2="66" y2="189" stroke="#1E293B" strokeWidth="1" />
              <line x1="54" y1="192" x2="66" y2="192" stroke="#DC2626" strokeWidth="1" />
              {/* Right Knee & High White Sock */}
              <rect x="94" y="186" width="12" height="12" rx="2" fill="#FFFFFF" />
              <line x1="94" y1="189" x2="106" y2="189" stroke="#1E293B" strokeWidth="1" />
              <line x1="94" y1="192" x2="106" y2="192" stroke="#DC2626" strokeWidth="1" />
              {/* Left Glossy Derby Shoe */}
              <path d="M 47 201 C 47 196 54 195 62 195 C 70 195 72 198 72 203 L 72 207 C 72 209 69 210 60 210 C 49 210 47 206 47 201 Z" fill="#0F172A" />
              <rect x="53" y="198" width="8" height="2" rx="1" fill="#CBD5E1" />
              {/* Right Glossy Derby Shoe */}
              <path d="M 88 203 C 88 198 90 195 98 195 C 106 195 113 196 113 201 C 113 207 111 210 100 210 C 91 210 88 210 88 207 Z" fill="#0F172A" />
              <rect x="99" y="198" width="8" height="2" rx="1" fill="#CBD5E1" />
            </g>
          )}

          {/* 15. Grand Bazin Royal: Long Flowing Ceremonial Pagne & Golden Babouches */}
          {customization.clothingStyle === 'traditional_boubou_femme' && (
            <g id="legs-boubou-femme">
              {/* Floor-Length Flowing Bazin Gown */}
              <path
                d="M 44 148 C 38 168 36 190 38 203 C 58 206 80 204 102 206 C 122 204 122 190 116 148 Z"
                fill={clothing.primary}
              />
              {/* Intricate Gold Filigree Border at Hemline */}
              <path d="M 38 197 Q 80 201 122 197" stroke="#F59E0B" strokeWidth="3.5" fill="none" />
              <path d="M 38 202 Q 80 205 122 202" stroke="#FEF3C7" strokeWidth="1.5" fill="none" />
              <path d="M 42 194 Q 48 188 54 194 Q 60 188 66 194 Q 72 188 78 194 Q 84 188 90 194 Q 96 188 102 194 Q 108 188 114 194" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
              {/* Left Pointed Golden Babouche */}
              <path d="M 46 206 C 46 203 52 201 62 201 C 68 201 70 204 70 208 L 70 210 C 70 211 65 211 58 211 C 48 211 46 209 46 206 Z" fill="#F59E0B" />
              <path d="M 43 207 L 47 206 L 47 208 Z" fill="#D97706" />
              {/* Right Pointed Golden Babouche */}
              <path d="M 90 208 C 90 204 92 201 98 201 C 108 201 114 203 114 206 C 114 209 112 211 102 211 C 95 211 90 211 90 210 Z" fill="#F59E0B" />
              <path d="M 117 207 L 113 206 L 113 208 Z" fill="#D97706" />
            </g>
          )}

          {/* 16. Tenue Basket Panthère Pro: Basketball Shorts, Knee Pads & High-Top Pro Kicks */}
          {customization.clothingStyle === 'basketball_tank' && (
            <g id="legs-basketball">
              {/* Left Basketball Short Leg */}
              <path d="M 48 148 L 42 186 L 73 186 L 76 156 Z" fill="#10B981" />
              <line x1="43" y1="149" x2="40" y2="185" stroke="#FACC15" strokeWidth="2.5" />
              <line x1="46" y1="149" x2="43" y2="185" stroke="#2452FF" strokeWidth="2" />
              {/* Right Basketball Short Leg */}
              <path d="M 84 156 L 87 186 L 118 186 L 112 148 Z" fill="#10B981" />
              <line x1="117" y1="149" x2="120" y2="185" stroke="#FACC15" strokeWidth="2.5" />
              <line x1="114" y1="149" x2="117" y2="185" stroke="#2452FF" strokeWidth="2" />
              {/* Bare Athletic Knees & Compression Sleeves */}
              <rect x="52" y="186" width="14" height="8" rx="2" fill={skin.color} />
              <rect x="94" y="186" width="14" height="8" rx="2" fill={skin.color} />
              <rect x="52" y="191" width="14" height="4" rx="1.5" fill="#0F172A" />
              <rect x="94" y="191" width="14" height="4" rx="1.5" fill="#0F172A" />
              {/* Left High-Top Pro Basketball Sneaker with Air Bubble */}
              <path d="M 44 200 C 44 194 52 193 62 193 C 72 193 74 197 74 203 L 74 208 C 74 210 68 210 58 210 C 46 210 44 207 44 200 Z" fill="#0F172A" />
              <path d="M 43 205 Q 58 203 74 206 L 74 210 C 68 210 48 210 43 208 Z" fill="#FACC15" />
              <line x1="46" y1="207" x2="68" y2="207" stroke="#2452FF" strokeWidth="1.5" />
              {/* Right High-Top Sneaker */}
              <path d="M 86 203 C 86 197 88 193 98 193 C 108 193 116 194 116 200 C 116 207 114 210 102 210 C 92 210 86 210 86 208 Z" fill="#0F172A" />
              <path d="M 86 206 Q 102 203 117 205 L 117 208 C 112 210 92 210 86 210 Z" fill="#FACC15" />
              <line x1="92" y1="207" x2="114" y2="207" stroke="#2452FF" strokeWidth="1.5" />
            </g>
          )}

          {/* 17. Costume Tailleur Diplomatique: Creased Tailored Trousers & Italian Leather Oxford Shoes */}
          {customization.clothingStyle === 'business_suit_chic' && (
            <g id="legs-suit-chic">
              {/* Gold Buckle Belt */}
              <rect x="50" y="148" width="60" height="7" rx="1.5" fill="#0F172A" />
              <rect x="75" y="147" width="10" height="9" rx="1" fill="#F59E0B" />
              {/* Left Trouser Leg */}
              <path d="M 50 153 L 48 197 L 69 197 L 74 158 Z" fill="#0F172A" />
              <line x1="59" y1="156" x2="58" y2="195" stroke="#334155" strokeWidth="1.2" />
              {/* Right Trouser Leg */}
              <path d="M 86 158 L 91 197 L 112 197 L 110 153 Z" fill="#0F172A" />
              <line x1="101" y1="156" x2="102" y2="195" stroke="#334155" strokeWidth="1.2" />
              {/* Left Polished Patent Leather Shoe */}
              <path d="M 43 201 C 43 196 52 195 62 195 C 71 195 73 198 73 203 L 73 207 C 73 209 70 210 60 210 C 46 210 43 206 43 201 Z" fill="#020617" />
              <ellipse cx="50" cy="198" rx="4" ry="1.5" fill="#FFFFFF" opacity="0.5" />
              {/* Right Polished Patent Leather Shoe */}
              <path d="M 87 203 C 87 198 89 195 98 195 C 108 195 117 196 117 201 C 117 206 114 210 100 210 C 90 210 87 209 87 207 Z" fill="#020617" />
              <ellipse cx="110" cy="198" rx="4" ry="1.5" fill="#FFFFFF" opacity="0.5" />
            </g>
          )}

          {/* 18. Combinaison Spatiale & Robotique STEM: Pressurized Jumpsuit & Magnetic Gravity Boots */}
          {customization.clothingStyle === 'cyber_pilot' && (
            <g id="legs-cyber-pilot">
              {/* Left Pressurized Leg */}
              <path d="M 50 150 L 48 194 L 71 194 L 76 158 Z" fill="#0F172A" />
              <line x1="49" y1="151" x2="47" y2="193" stroke="#06B6D4" strokeWidth="1.8" />
              {/* Left Segmented Knee Pad */}
              <rect x="52" y="168" width="14" height="10" rx="2.5" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <circle cx="59" cy="173" r="1.5" fill="#06B6D4" />
              {/* Right Pressurized Leg */}
              <path d="M 84 158 L 89 194 L 112 194 L 110 150 Z" fill="#0F172A" />
              <line x1="111" y1="151" x2="113" y2="193" stroke="#06B6D4" strokeWidth="1.8" />
              {/* Right Knee Pad */}
              <rect x="94" y="168" width="14" height="10" rx="2.5" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <circle cx="101" cy="173" r="1.5" fill="#06B6D4" />
              {/* Left Magnetic Gravity Boot with Glowing Propulsion Sole */}
              <path d="M 42 201 C 42 195 50 194 62 194 C 72 194 74 198 74 204 L 74 208 C 74 210 68 210 58 210 C 44 210 42 207 42 201 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <path d="M 41 206 L 74 206 L 74 210 L 41 210 Z" fill="#06B6D4" opacity="0.9" />
              {/* Right Magnetic Gravity Boot */}
              <path d="M 86 204 C 86 198 88 194 98 194 C 110 194 118 195 118 201 C 118 207 116 210 102 210 C 92 210 86 210 86 208 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <path d="M 86 206 L 119 206 L 119 210 L 86 210 Z" fill="#06B6D4" opacity="0.9" />
            </g>
          )}
        </g>

        {/* ==================================================== */}
        {/* TORSO & CLOTHING                                     */}
        {/* ==================================================== */}
        <g id="avatar-torso">
          {/* Dynamic Neck adapted to Silhouette */}
          {customization.genderStyle === 'feminine' ? (
            <rect x="71" y="88" width="18" height="24" rx="4" fill="url(#avatarSkinGrad)" />
          ) : customization.genderStyle === 'masculine' ? (
            <rect x="67" y="88" width="26" height="24" rx="4" fill="url(#avatarSkinGrad)" />
          ) : (
            <rect x="69" y="88" width="22" height="24" rx="4" fill="url(#avatarSkinGrad)" />
          )}

          {/* Dynamic Torso Base adapted to Silhouette (Féminin cintrée / Masculin athlétique en V / Neutre) */}
          {customization.genderStyle === 'feminine' ? (
            <path
              d="M 39 107 C 39 96 54 94 80 94 C 106 94 121 96 121 107 C 119 120 112 128 112 136 C 112 144 125 152 125 156 C 125 160 114 162 80 162 C 46 162 35 160 35 156 C 35 152 48 144 48 136 C 48 128 41 120 39 107 Z"
              fill="url(#avatarClothGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : customization.genderStyle === 'masculine' ? (
            <path
              d="M 33 108 C 33 94 50 92 80 92 C 110 92 127 94 127 108 L 126 156 C 126 160 116 162 80 162 C 44 162 34 160 34 156 Z"
              fill="url(#avatarClothGrad)"
              filter="url(#avatarDropShadow)"
            />
          ) : (
            <path
              d="M 36 108 C 36 96 52 94 80 94 C 108 94 124 96 124 108 L 128 156 C 128 160 118 162 80 162 C 42 162 32 160 32 156 Z"
              fill="url(#avatarClothGrad)"
              filter="url(#avatarDropShadow)"
            />
          )}

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
              <line x1="80" y1="138" x2="80" y2="158" stroke={clothing.secondary} strokeWidth="2" />
              <circle cx="80" cy="144" r="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <circle cx="80" cy="152" r="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
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
              <path d="M 33 138 L 127 138 L 128 156 C 128 160 118 162 80 162 C 42 162 32 160 32 156 Z" fill="#2452FF" /> {/* Bleu */}
              {/* Gabon Panther Badge on Left Chest */}
              <circle cx="56" cy="128" r="6.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="56" cy="128" r="4.5" fill="#FACC15" />
              <polygon points="56,125 57.5,127.5 60,127.5 58,129 59,131.5 56,130 53,131.5 54,129 52,127.5 54.5,127.5" fill="#0F172A" />
              {/* Center Jersey Player Number 10 */}
              <text x="80" y="133" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif" fill="#0F172A">10</text>
              {/* Side Ventilation Stripes */}
              <line x1="38" y1="120" x2="36" y2="154" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
              <line x1="122" y1="120" x2="124" y2="154" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
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
                d="M 50 138 C 50 136 56 135 60 140 L 100 140 C 104 135 110 136 110 138 L 106 154 Q 80 158 54 154 Z"
                fill={clothing.secondary}
                stroke={clothing.light}
                strokeWidth="1"
                opacity="0.95"
              />
              {/* Ribbed Bottom Band */}
              <rect x="34" y="154" width="92" height="6" rx="2" fill={clothing.secondary} />
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
              <path d="M 70 144 L 80 134 L 90 144 L 80 154 Z" fill="#F59E0B" opacity="0.85" />
              {/* Golden Hem Trim */}
              <rect x="34" y="154" width="92" height="6" fill="#F59E0B" />
            </g>
          )}

          {/* 6. Blouse Blanche de Laboratoire */}
          {customization.clothingStyle === 'lab_coat' && (
            <g id="cloth-lab-details">
              {/* Inner shirt */}
              <polygon points="80,98 68,118 92,118" fill={clothing.primary} />
              {/* Crisp White Coat Body */}
              <path
                d="M 36 108 C 36 96 52 94 80 94 C 108 94 124 96 124 108 L 128 156 C 128 160 118 162 80 162 C 42 162 32 160 32 156 Z"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
              {/* Tailored Lab Lapels */}
              <path d="M 54 96 L 72 130 L 46 122 Z" fill="#E2E8F0" />
              <path d="M 106 96 L 88 130 L 114 122 Z" fill="#E2E8F0" />
              {/* Center Line & Buttons */}
              <line x1="80" y1="130" x2="80" y2="158" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="80" cy="138" r="2" fill="#334155" />
              <circle cx="80" cy="148" r="2" fill="#334155" />
              {/* Lab Pocket with Chemistry Tube & Ruler */}
              <rect x="46" y="126" width="16" height="16" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="50" y="118" width="3" height="12" rx="1" fill="#F59E0B" />
              <rect x="56" y="116" width="3.5" height="14" rx="1.75" fill="#10B981" stroke="#334155" strokeWidth="0.8" />
              <circle cx="57.75" cy="120" r="0.8" fill="#FFFFFF" />
            </g>
          )}

          {/* 7. Grande Toge d’Excellence */}
          {customization.clothingStyle === 'academic_robe' && (
            <g id="cloth-academic-details">
              {/* Pleated Robe Body Folds */}
              <line x1="62" y1="116" x2="56" y2="158" stroke="#0F172A" strokeWidth="1.5" opacity="0.4" />
              <line x1="98" y1="116" x2="104" y2="158" stroke="#0F172A" strokeWidth="1.5" opacity="0.4" />
              <line x1="80" y1="116" x2="80" y2="158" stroke="#0F172A" strokeWidth="1.5" opacity="0.5" />
              {/* Wide Golden Satin Stole */}
              <path d="M 64 96 L 70 162 L 78 162 L 74 104 Z" fill="#F59E0B" />
              <path d="M 96 96 L 90 162 L 82 162 L 86 104 Z" fill="#F59E0B" />
              {/* Major Honor Medallion with Emerald Ribbon */}
              <path d="M 72 100 Q 80 114 88 100" stroke="#10B981" strokeWidth="2.5" fill="none" />
              <circle cx="80" cy="116" r="6" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
              <polygon points="80,112 81.5,114.5 84,114.5 82,116 83,118.5 80,117 77,118.5 78,116 76,114.5 78.5,114.5" fill="#FEF3C7" />
            </g>
          )}

          {/* 8. Uniforme Écogarde (Parcs Gabon) */}
          {customization.clothingStyle === 'ecogarde_ranger' && (
            <g id="cloth-ecogarde-details">
              {/* Field Khaki Shirt Body */}
              <path
                d="M 36 108 C 36 96 52 94 80 94 C 108 94 124 96 124 108 L 128 156 C 128 160 118 162 80 162 C 42 162 32 160 32 156 Z"
                fill="#78716C"
              />
              {/* Open Safari Collar Lapels */}
              <polygon points="68,96 80,114 62,110" fill="#57534E" />
              <polygon points="92,96 80,114 98,110" fill="#57534E" />
              <polygon points="76,96 80,108 84,96" fill="url(#avatarSkinGrad)" /> {/* Neck Triangle */}
              {/* Center Placket & Brass Buttons */}
              <line x1="80" y1="114" x2="80" y2="156" stroke="#57534E" strokeWidth="2" />
              <circle cx="80" cy="122" r="1.5" fill="#F59E0B" />
              <circle cx="80" cy="134" r="1.5" fill="#F59E0B" />
              <circle cx="80" cy="146" r="1.5" fill="#F59E0B" />
              {/* Left Chest Pocket with Buttoned Flap */}
              <rect x="44" y="122" width="16" height="15" rx="1.5" fill="#6B655B" stroke="#57534E" strokeWidth="0.8" />
              <path d="M 43 122 L 52 125 L 61 122 Z" fill="#57534E" />
              <circle cx="52" cy="125" r="1" fill="#F59E0B" />
              {/* Right Chest Pocket with Buttoned Flap */}
              <rect x="100" y="122" width="16" height="15" rx="1.5" fill="#6B655B" stroke="#57534E" strokeWidth="0.8" />
              <path d="M 99 122 L 108 125 L 117 122 Z" fill="#57534E" />
              <circle cx="108" cy="125" r="1" fill="#F59E0B" />
              {/* Official ANPN Gabon Wildlife Embroidered Badge on Left Chest */}
              <circle cx="52" cy="112" r="6" fill="#047857" stroke="#FACC15" strokeWidth="1" />
              {/* Elephant / Gabon Forest Silhouette */}
              <path d="M 48 114 C 48 111 50 109 53 109 C 55 109 56 110 56 112 L 56 115 L 53 115 L 53 113 L 51 113 L 51 115 Z" fill="#FEF3C7" />
              <circle cx="54" cy="111" r="0.6" fill="#047857" />
            </g>
          )}

          {/* 9. Boubou d’Apparat & Pagne Cérémoniel */}
          {customization.clothingStyle === 'traditional_kaba' && (
            <g id="cloth-kaba-details">
              {/* Ornate Ceremonial Gold Embroidered Yoke */}
              <polygon points="80,132 50,96 110,96" fill="#F59E0B" />
              <polygon points="80,126 56,96 104,96" fill={clothing.primary} />
              {/* Inner V-Neck Opening */}
              <polygon points="80,114 66,96 94,96" fill="url(#avatarSkinGrad)" />
              {/* Traditional African Clay Bead Necklace */}
              <path d="M 64 96 Q 80 110 96 96" stroke="#B45309" strokeWidth="2.5" strokeDasharray="3 2" fill="none" />
              {/* Central Cauri Shell Pendant */}
              <ellipse cx="80" cy="110" rx="3.5" ry="4.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.8" />
              <line x1="80" y1="107" x2="80" y2="113" stroke="#B45309" strokeWidth="1" />
              {/* Center Vertical Gold Brocade Band */}
              <rect x="76" y="126" width="8" height="34" fill="#F59E0B" />
              <line x1="80" y1="126" x2="80" y2="160" stroke="#FEF3C7" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Geometric Diamond Motifs */}
              <polygon points="56,136 60,132 64,136 60,140" fill="#F59E0B" />
              <polygon points="104,136 100,132 96,136 100,140" fill="#F59E0B" />
            </g>
          )}

          {/* 10. Veste Varsity Campus AXIOM */}
          {customization.clothingStyle === 'varsity_jacket' && (
            <g id="cloth-varsity-details">
              {/* Inner T-shirt */}
              <polygon points="80,108 66,96 94,96" fill="#FFFFFF" />
              {/* Striped Ribbed Stand-up Collar */}
              <path d="M 60 96 Q 80 102 100 96" stroke="#1E293B" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M 60 96 Q 80 102 100 96" stroke="#FFFFFF" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              {/* Center White Snap Button Placket */}
              <rect x="77" y="100" width="6" height="58" fill="#1E293B" opacity="0.3" />
              <circle cx="80" cy="108" r="1.8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              <circle cx="80" cy="120" r="1.8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              <circle cx="80" cy="132" r="1.8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              <circle cx="80" cy="144" r="1.8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              <circle cx="80" cy="154" r="1.8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
              {/* Slanted White Welt Slash Pockets */}
              <line x1="44" y1="138" x2="56" y2="148" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="116" y1="138" x2="104" y2="148" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              {/* Large Collegiate Chenille Letter "A" on Left Chest */}
              <g id="varsity-chenille-letter">
                <path
                  d="M 52 110 L 46 128 L 50 128 L 52 122 L 58 122 L 60 128 L 64 128 L 58 110 Z M 55 113.5 L 57 119 L 53 119 Z"
                  fill="#F59E0B"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                />
              </g>
              {/* Ribbed Bottom Waistband */}
              <rect x="34" y="156" width="92" height="6" rx="1.5" fill="#1E293B" />
              <line x1="36" y1="159" x2="124" y2="159" stroke="#FFFFFF" strokeWidth="1.2" />
            </g>
          )}

          {/* 11. Salopette Créative & Design */}
          {customization.clothingStyle === 'artist_dungarees' && (
            <g id="cloth-dungarees-details">
              {/* Breton Striped T-shirt Base */}
              <rect x="42" y="96" width="76" height="24" fill="#FFFFFF" />
              <line x1="44" y1="101" x2="116" y2="101" stroke="#1D4ED8" strokeWidth="2" />
              <line x1="42" y1="106" x2="118" y2="106" stroke="#1D4ED8" strokeWidth="2" />
              <line x1="40" y1="111" x2="120" y2="111" stroke="#1D4ED8" strokeWidth="2" />
              {/* Denim Dungarees Body */}
              <path
                d="M 50 116 L 110 116 L 114 162 L 46 162 Z"
                fill="#2563EB"
              />
              {/* Left & Right Suspender Straps */}
              <rect x="52" y="96" width="8" height="24" rx="1" fill="#1D4ED8" />
              <rect x="100" y="96" width="8" height="24" rx="1" fill="#1D4ED8" />
              {/* Brass Suspender Clips */}
              <rect x="51" y="116" width="10" height="5" rx="1" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <circle cx="56" cy="118.5" r="1.2" fill="#78350F" />
              <rect x="99" y="116" width="10" height="5" rx="1" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
              <circle cx="104" cy="118.5" r="1.2" fill="#78350F" />
              {/* Center Dungaree Kangaroo Pocket */}
              <path d="M 64 126 L 96 126 L 94 148 L 66 148 Z" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="0.8" />
              {/* Artist Supplies Peeking from Pocket */}
              {/* Yellow Architect's Ruler */}
              <rect x="67" y="114" width="4" height="16" rx="0.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="0.5" transform="rotate(-12 69 122)" />
              {/* Paintbrush with Wooden Handle & Red Bristle */}
              <rect x="75" y="115" width="2.5" height="15" rx="0.5" fill="#D97706" transform="rotate(8 76 122)" />
              <rect x="75.2" y="112" width="3" height="4" rx="0.5" fill="#CBD5E1" transform="rotate(8 76 122)" />
              <path d="M 77 108 C 75 110 75 113 77 113 C 79 113 79 110 77 108 Z" fill="#EF4444" />
              {/* Colorful Paint Splatters */}
              <circle cx="52" cy="142" r="1.5" fill="#EC4899" />
              <circle cx="106" cy="138" r="1.8" fill="#10B981" />
              <circle cx="103" cy="144" r="1" fill="#F59E0B" />
            </g>
          )}

          {/* 12. Survêtement Athlétique Coupe-Vent */}
          {customization.clothingStyle === 'tracksuit_retro' && (
            <g id="cloth-tracksuit-details">
              {/* Athletic Windbreaker Standing Collar */}
              <rect x="68" y="94" width="24" height="8" rx="2" fill={clothing.secondary} />
              {/* Dynamic Retro Tricolor Chevron across chest */}
              <polygon points="34,116 80,132 126,116 125,124 80,140 35,124" fill="#10B981" /> {/* Forest Green */}
              <polygon points="35,124 80,140 125,124 125,130 80,146 35,130" fill="#FACC15" /> {/* Golden Sun */}
              <polygon points="35,130 80,146 125,130 126,136 80,152 34,136" fill="#2452FF" /> {/* Deep Royal Blue */}
              {/* Center Silver Zipper Track & Metallic Slider */}
              <line x1="80" y1="94" x2="80" y2="158" stroke="#CBD5E1" strokeWidth="1.5" />
              <rect x="78.5" y="102" width="3" height="5" rx="1" fill="#94A3B8" stroke="#475569" strokeWidth="0.5" />
              <circle cx="80" cy="105" r="0.7" fill="#0F172A" />
              {/* Athletic Crest on Left Chest */}
              <circle cx="54" cy="108" r="4.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <polygon points="54,105 55,107 57,107 55.5,108.5 56,110.5 54,109 52,110.5 52.5,108.5 51,107 53,107" fill="#F59E0B" />
              {/* Ribbed Waistband */}
              <rect x="34" y="156" width="92" height="6" rx="1.5" fill={clothing.secondary} />
              <line x1="36" y1="159" x2="124" y2="159" stroke="#FACC15" strokeWidth="1.2" />
            </g>
          )}

          {/* 13. Robe Évasée Wax & Dentelle */}
          {customization.clothingStyle === 'wax_dress_modern' && (
            <g id="cloth-wax-dress-details">
              {/* Elegant Lace Boat-Neck Trimming */}
              <path d="M 52 96 Q 80 108 108 96" stroke="#FEF3C7" strokeWidth="3" fill="none" />
              <path d="M 54 98 Q 80 110 106 98" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
              {/* Scalloped Lace Edge */}
              <path d="M 56 100 Q 62 104 68 100 Q 74 104 80 100 Q 86 104 92 100 Q 98 104 104 100" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
              {/* Cinched Golden Waistband & Tied Sash Ribbon */}
              <path d="M 44 144 Q 80 148 116 144 L 115 150 Q 80 154 45 150 Z" fill="#F59E0B" />
              <circle cx="80" cy="147" r="3" fill="#D97706" />
              <path d="M 77 147 Q 71 143 73 149 Q 77 148 80 147" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />
              <path d="M 83 147 Q 89 143 87 149 Q 83 148 80 147" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />
              <path d="M 78 149 L 75 159" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <path d="M 82 149 L 85 158" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              {/* Traditional African Geometric Embroidery Motif on Bodice */}
              <polygon points="80,118 72,130 88,130" fill="none" stroke="#F59E0B" strokeWidth="1.8" />
              <polygon points="80,122 75,129 85,129" fill="#FEF3C7" />
              <circle cx="80" cy="126" r="1.5" fill="#B45309" />
            </g>
          )}

          {/* 14. Uniforme Lycéenne (Jupe & Veste) */}
          {customization.clothingStyle === 'high_school_skirt_uniform' && (
            <g id="cloth-skirt-uniform-details">
              {/* Crisp White Shirt Opening & Peter Pan Collar */}
              <polygon points="80,94 66,118 94,118" fill="#FFFFFF" />
              <path d="M 80 98 C 72 96 66 102 70 108 C 75 112 80 106 80 98 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
              <path d="M 80 98 C 88 96 94 102 90 108 C 85 112 80 106 80 98 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
              {/* Crimson Ribbon School Tie */}
              <polygon points="78,104 82,104 84,118 80,123 76,118" fill="#DC2626" />
              <circle cx="80" cy="106" r="2.2" fill="#991B1B" />
              {/* Tailored Blazer Curved Front Lapels */}
              <path d="M 52 96 L 66 122 L 48 118 Z" fill={clothing.secondary} />
              <path d="M 108 96 L 94 122 L 112 118 Z" fill={clothing.secondary} />
              {/* Center Closing & Mother-of-Pearl Buttons */}
              <line x1="80" y1="124" x2="80" y2="152" stroke={clothing.secondary} strokeWidth="2" />
              <circle cx="80" cy="132" r="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <circle cx="80" cy="142" r="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              {/* School Crest on Chest Pocket */}
              <rect x="44" y="128" width="14" height="13" rx="1.5" fill={clothing.secondary} />
              <circle cx="51" cy="134" r="3.5" fill="#F59E0B" />
              <polygon points="51,132 52,133.5 53.5,133.5 52,134.5 52.5,136 51,135 49.5,136 50,134.5 48.5,133.5 50,133.5" fill="#FFFFFF" />
            </g>
          )}

          {/* 15. Grand Bazin Royal & Voile Cérémoniel */}
          {customization.clothingStyle === 'traditional_boubou_femme' && (
            <g id="cloth-boubou-femme-details">
              {/* Golden Imperial Filigree Yoke */}
              <path d="M 50 96 C 50 96 70 128 80 128 C 90 128 110 96 110 96 Z" fill="#F59E0B" />
              <path d="M 54 96 C 54 96 72 122 80 122 C 88 122 106 96 106 96 Z" fill={clothing.primary} />
              {/* Gold Filigree Embroidery Patterns */}
              <line x1="80" y1="96" x2="80" y2="124" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="80" cy="104" r="2.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.8" />
              <circle cx="80" cy="114" r="2.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.8" />
              {/* Draped Ceremonial Gold Silk Sash */}
              <path d="M 44 98 C 42 118 64 142 84 158 L 94 158 C 72 140 50 114 52 98 Z" fill="#F59E0B" opacity="0.9" />
              <path d="M 46 98 Q 62 136 88 158" stroke="#FEF3C7" strokeWidth="1.5" fill="none" />
              {/* Multi-layered Queen Necklace with Golden Baubles */}
              <path d="M 64 96 Q 80 108 96 96" stroke="#FEF3C7" strokeWidth="2.5" fill="none" />
              <circle cx="72" cy="101" r="1.5" fill="#F59E0B" />
              <circle cx="80" cy="105" r="1.8" fill="#F59E0B" />
              <circle cx="88" cy="101" r="1.5" fill="#F59E0B" />
            </g>
          )}

          {/* 16. Tenue Basket Panthère Pro (N°7) */}
          {customization.clothingStyle === 'basketball_tank' && (
            <g id="cloth-basketball-details">
              {/* Deep Athletic Tank Scoop Neck Opening */}
              <path d="M 62 94 C 62 116 98 116 98 94 Z" fill="url(#avatarSkinGrad)" />
              {/* Gabon Tricolor Ribbed Collar Band */}
              <path d="M 62 94 C 62 118 98 118 98 94" stroke="#10B981" strokeWidth="4" fill="none" />
              <path d="M 62 94 C 62 118 98 118 98 94" stroke="#FACC15" strokeWidth="2" fill="none" />
              {/* Arched Bold Team Name "AXIOM" */}
              <text x="80" y="122" textAnchor="middle" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" fill="#FFFFFF">
                AXIOM
              </text>
              {/* Pro Player Number 7 in Gold & Black */}
              <text x="80" y="142" textAnchor="middle" fontSize="16" fontWeight="900" fontFamily="sans-serif" fill="#FACC15" stroke="#0F172A" strokeWidth="0.8">
                7
              </text>
              {/* Side Breathable Mesh Panels */}
              <line x1="38" y1="112" x2="36" y2="152" stroke="#FACC15" strokeWidth="2" />
              <line x1="41" y1="112" x2="39" y2="152" stroke="#2452FF" strokeWidth="1.5" />
              <line x1="122" y1="112" x2="124" y2="152" stroke="#FACC15" strokeWidth="2" />
              <line x1="119" y1="112" x2="121" y2="152" stroke="#2452FF" strokeWidth="1.5" />
            </g>
          )}

          {/* 17. Costume Tailleur Diplomatique */}
          {customization.clothingStyle === 'business_suit_chic' && (
            <g id="cloth-suit-chic-details">
              {/* Crisp Cream Silk Shirt Triangle */}
              <polygon points="80,94 68,124 92,124" fill="#FEF3C7" />
              {/* Shirt Collar Points */}
              <polygon points="80,98 68,96 74,112 80,104" fill="#FFFFFF" />
              <polygon points="80,98 92,96 86,112 80,104" fill="#FFFFFF" />
              {/* Elegant Gold Chain / Silk Tie */}
              <path d="M 74 104 Q 80 114 86 104" stroke="#F59E0B" strokeWidth="1.8" fill="none" />
              <circle cx="80" cy="111" r="1.5" fill="#F59E0B" />
              {/* Sharp Peak Lapels in Midnight Black Satin */}
              <path d="M 48 96 L 70 132 L 44 126 Z" fill="#020617" />
              <path d="M 112 96 L 90 132 L 116 126 Z" fill="#020617" />
              {/* White Folded Silk Pocket Square in Breast Pocket */}
              <rect x="42" y="126" width="16" height="3" rx="0.8" fill="#020617" />
              <polygon points="45,126 48,121 52,126" fill="#FFFFFF" />
              <polygon points="50,126 53,122 56,126" fill="#F59E0B" />
              {/* Center Split & Polished Gold Buttons */}
              <line x1="80" y1="134" x2="80" y2="156" stroke="#020617" strokeWidth="2" />
              <circle cx="80" cy="140" r="2.2" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />
              <circle cx="80" cy="148" r="2.2" fill="#F59E0B" stroke="#B45309" strokeWidth="0.6" />
            </g>
          )}

          {/* 18. Combinaison Spatiale & Robotique STEM */}
          {customization.clothingStyle === 'cyber_pilot' && (
            <g id="cloth-cyber-details">
              {/* High-Tech Sealed Collar Ring */}
              <rect x="66" y="92" width="28" height="6" rx="2" fill="#1E293B" stroke="#06B6D4" strokeWidth="1" />
              {/* Glowing Quantum Fusion Core on Chest */}
              <circle cx="80" cy="126" r="9" fill="#0F172A" stroke="#06B6D4" strokeWidth="1.5" />
              <circle cx="80" cy="126" r="6.5" fill="#0891B2" opacity="0.6" />
              <circle cx="80" cy="126" r="3.5" fill="#22D3EE" />
              {/* Concentric Telemetry Lines */}
              <path d="M 71 126 L 46 126" stroke="#06B6D4" strokeWidth="1.5" />
              <path d="M 89 126 L 114 126" stroke="#06B6D4" strokeWidth="1.5" />
              <path d="M 80 117 L 80 102" stroke="#06B6D4" strokeWidth="1.5" />
              <path d="M 80 135 L 80 156" stroke="#06B6D4" strokeWidth="1.5" />
              {/* Telemetry Status LEDs */}
              <circle cx="48" cy="114" r="1.8" fill="#10B981" />
              <circle cx="53" cy="114" r="1.8" fill="#06B6D4" />
              <circle cx="58" cy="114" r="1.8" fill="#FACC15" />
              {/* Mission Patch: Gabon Orbital Research Lab */}
              <rect x="98" y="110" width="18" height="10" rx="2" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <polygon points="103,115 107,112 111,115" fill="#22D3EE" />
              <circle cx="107" cy="117" r="1" fill="#FACC15" />
              {/* Pressurized Waist Seam */}
              <rect x="34" y="154" width="92" height="6" rx="2" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <line x1="36" y1="157" x2="124" y2="157" stroke="#22D3EE" strokeWidth="1.2" />
            </g>
          )}

          {/* ==================================================== */}
          {/* STUDENT NAME BADGE (Porte le nom de l'élève)        */}
          {/* ==================================================== */}
          <g id="avatar-student-name-badge">
            {customization.clothingStyle === 'gabon_jersey' ? (
              /* Flocage officiel Maillot au Nom de l'Élève */
              <g id="jersey-student-name">
                <rect x="52" y="112" width="56" height="7.5" rx="1.5" fill="#0F172A" opacity="0.85" />
                <text
                  x="80"
                  y="117.5"
                  textAnchor="middle"
                  fontSize="5.5"
                  fontWeight="900"
                  fontFamily="sans-serif"
                  letterSpacing="0.6"
                  fill="#FACC15"
                >
                  {(customization.name || 'MOUSSA').toUpperCase().slice(0, 10)}
                </text>
              </g>
            ) : (
              /* Badge Nominatif Officiel de l'Élève AXIOM */
              <g id="student-pin-badge">
                <rect
                  x="88"
                  y="126"
                  width="33"
                  height="9.5"
                  rx="2.5"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="0.8"
                  filter="url(#avatarDropShadow)"
                />
                <circle cx="91" cy="130.8" r="1.3" fill="#2452FF" />
                <text
                  x="105"
                  y="133"
                  textAnchor="middle"
                  fontSize="5.2"
                  fontWeight="800"
                  fontFamily="sans-serif"
                  fill="#1E293B"
                >
                  {(customization.name || 'ÉLÈVE').toUpperCase().slice(0, 8)}
                </text>
              </g>
            )}
          </g>
        </g>

        {/* ==================================================== */}
        {/* ARMS & ARTICULATED HANDS (Fingers, gestures)         */}
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
          ) : customization.clothingStyle === 'ecogarde_ranger' ? (
            /* Safari Rolled Sleeve with Tab & Forearm */
            <>
              <path d="M 42 108 L 32 122 C 30 124 33 127 37 127 L 44 118 Z" fill="#78716C" />
              <rect x="33" y="117" width="5" height="10" rx="1.5" fill="#57534E" />
              <circle cx="35.5" cy="120" r="0.9" fill="#F59E0B" />
              {/* Forearm */}
              <path d="M 35 122 L 28 134 C 26 137 28 140 33 140 L 40 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'artist_dungarees' ? (
            /* Breton Striped Short Sleeve & Forearm */
            <>
              <path d="M 42 108 L 34 122 C 33 124 35 127 38 127 L 44 118 Z" fill="#FFFFFF" />
              <line x1="36" y1="113" x2="43" y2="111" stroke="#1D4ED8" strokeWidth="1.5" />
              <line x1="34" y1="118" x2="41" y2="116" stroke="#1D4ED8" strokeWidth="1.5" />
              {/* Forearm */}
              <path d="M 36 122 L 28 134 C 26 137 28 140 33 140 L 40 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'varsity_jacket' ? (
            /* Crisp White Sleeve with Striped Ribbed Cuff */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8" />
              <rect x="27" y="131" width="9" height="5" rx="1.5" fill="#1E293B" />
              <line x1="27" y1="133.5" x2="36" y2="133.5" stroke="#FFFFFF" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'tracksuit_retro' ? (
            /* Retro Tracksuit Sleeve with Dual Stripes & Elastic Cuff */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill={clothing.primary} />
              <line x1="40" y1="110" x2="28" y2="133" stroke="#FFFFFF" strokeWidth="1.8" />
              <line x1="43" y1="113" x2="31" y2="136" stroke="#FACC15" strokeWidth="1.5" />
              <rect x="27" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
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
          ) : customization.clothingStyle === 'traditional_wax' || customization.clothingStyle === 'traditional_kaba' ? (
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
          ) : customization.clothingStyle === 'wax_dress_modern' ? (
            /* Wax Cap Flutter Sleeve & Bare Arms with Gold Bangles */
            <>
              <path d="M 42 108 L 34 120 C 35 122 38 123 42 121 L 44 114 Z" fill={clothing.primary} />
              <path d="M 34 120 Q 38 123 42 121" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
              {/* Bare Slender Arm */}
              <path d="M 38 118 L 28 132 C 26 135 28 140 33 140 L 42 122 Z" fill={skin.color} />
              {/* Gold Wrist Bangles */}
              <ellipse cx="29" cy="133" rx="4" ry="1.8" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
              <ellipse cx="30" cy="135" rx="3.8" ry="1.8" fill="none" stroke="#FEF3C7" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'high_school_skirt_uniform' ? (
            /* High School Blazer Sleeve with White Shirt Cuff */
            <>
              <path d="M 42 108 L 30 128 C 28 131 30 135 34 135 L 44 122 Z" fill={clothing.secondary} />
              <path d="M 30 128 L 27 133 C 26 135 28 138 32 138 L 34 135 Z" fill="#FFFFFF" />
              <circle cx="33" cy="128" r="1" fill="#CBD5E1" />
            </>
          ) : customization.clothingStyle === 'traditional_boubou_femme' ? (
            /* Grand Bazin Bell Sleeve with Ornate Gold Border */
            <>
              <path d="M 42 108 L 22 134 C 20 138 25 144 32 144 L 46 122 Z" fill={clothing.primary} />
              <path d="M 22 134 L 32 144" stroke="#F59E0B" strokeWidth="3.5" />
              <path d="M 24 133 L 31 142" stroke="#FEF3C7" strokeWidth="1.2" />
              <ellipse cx="28" cy="135" rx="3.2" ry="1.5" fill="none" stroke="#F59E0B" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'basketball_tank' ? (
            /* Sleeveless Athletic Arm & Gabon Wristband */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill={skin.color} />
              <rect x="27" y="131" width="9" height="5" rx="1.5" fill="#10B981" />
              <line x1="27" y1="133.5" x2="36" y2="133.5" stroke="#FACC15" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'business_suit_chic' ? (
            /* Tailored Diplomatic Blazer Sleeve & Gold Watch */
            <>
              <path d="M 42 108 L 30 128 C 28 131 30 135 34 135 L 44 122 Z" fill="#020617" />
              <path d="M 30 128 L 27 133 C 26 135 28 138 32 138 L 34 135 Z" fill="#FEF3C7" />
              <rect x="27" y="131" width="9" height="3" rx="1" fill="#F59E0B" />
            </>
          ) : customization.clothingStyle === 'cyber_pilot' ? (
            /* Cybernetic Space Suit Sleeve & Cyan Neon Stripe */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <line x1="41" y1="110" x2="29" y2="133" stroke="#06B6D4" strokeWidth="1.5" />
              <rect x="27" y="131" width="9" height="4" rx="1" fill="#0F172A" stroke="#06B6D4" strokeWidth="0.8" />
            </>
          ) : (
            /* Street Hoodie Sleeve with Ribbed Wrist */
            <>
              <path d="M 42 108 L 28 132 C 26 135 28 140 33 140 L 44 124 Z" fill={clothing.primary} />
              <rect x="27" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
            </>
          )}

          {/* Left Hand with Articulated Cartoon Fingers */}
          <g id="avatar-left-fingers">
            {isJoy ? (
              /* Joyful Victory Hand: Index and Middle finger in V sign */
              <g id="left-hand-victory">
                <circle cx="26" cy="138" r="5.5" fill={skin.color} />
                {/* Index Finger */}
                <rect x="20" y="124" width="4" height="12" rx="2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-15 22 130)" />
                {/* Middle Finger */}
                <rect x="27" y="123" width="4" height="13" rx="2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(15 29 129)" />
                {/* Folded Thumb over knuckles */}
                <circle cx="25" cy="136" r="3" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
              </g>
            ) : (
              /* Friendly Open Hand with 4 articulated fingers + thumb */
              <g id="left-hand-open">
                {/* Palm Base */}
                <path d="M 24 132 C 28 132 32 135 31 140 C 30 144 25 145 22 141 C 20 137 21 132 24 132 Z" fill={skin.color} />
                {/* Outstretched Thumb */}
                <path d="M 22 133 C 16 131 15 137 19 139 C 21 140 23 137 22 133 Z" fill={skin.color} stroke={skin.shadow} strokeWidth="0.6" />
                {/* Index Finger */}
                <rect x="18" y="138" width="3.5" height="8" rx="1.75" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(10 20 142)" />
                {/* Middle Finger */}
                <rect x="22" y="140" width="3.5" height="9" rx="1.75" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
                {/* Ring Finger */}
                <rect x="26" y="140" width="3.3" height="8.5" rx="1.65" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-5 27 144)" />
                {/* Pinky Finger */}
                <rect x="29" y="138" width="3" height="7" rx="1.5" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-15 30 141)" />
              </g>
            )}
          </g>
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
          ) : customization.clothingStyle === 'ecogarde_ranger' ? (
            <>
              <path d="M 118 108 L 128 122 C 130 124 127 127 123 127 L 116 118 Z" fill="#78716C" />
              <rect x="122" y="117" width="5" height="10" rx="1.5" fill="#57534E" />
              <circle cx="124.5" cy="120" r="0.9" fill="#F59E0B" />
              <path d="M 125 122 L 132 134 C 134 137 132 140 127 140 L 120 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'artist_dungarees' ? (
            <>
              <path d="M 118 108 L 126 122 C 127 124 125 127 122 127 L 116 118 Z" fill="#FFFFFF" />
              <line x1="124" y1="113" x2="117" y2="111" stroke="#1D4ED8" strokeWidth="1.5" />
              <line x1="126" y1="118" x2="119" y2="116" stroke="#1D4ED8" strokeWidth="1.5" />
              <path d="M 124 122 L 132 134 C 134 137 132 140 127 140 L 120 128 Z" fill={skin.color} />
            </>
          ) : customization.clothingStyle === 'varsity_jacket' ? (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8" />
              <rect x="124" y="131" width="9" height="5" rx="1.5" fill="#1E293B" />
              <line x1="124" y1="133.5" x2="133" y2="133.5" stroke="#FFFFFF" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'tracksuit_retro' ? (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill={clothing.primary} />
              <line x1="120" y1="110" x2="132" y2="133" stroke="#FFFFFF" strokeWidth="1.8" />
              <line x1="117" y1="113" x2="129" y2="136" stroke="#FACC15" strokeWidth="1.5" />
              <rect x="124" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
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
          ) : customization.clothingStyle === 'traditional_wax' || customization.clothingStyle === 'traditional_kaba' ? (
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
          ) : customization.clothingStyle === 'wax_dress_modern' ? (
            /* Wax Cap Flutter Sleeve & Bare Arms with Gold Bangles */
            <>
              <path d="M 118 108 L 126 120 C 125 122 122 123 118 121 L 116 114 Z" fill={clothing.primary} />
              <path d="M 126 120 Q 122 123 118 121" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
              {/* Bare Slender Arm */}
              <path d="M 122 118 L 132 132 C 134 135 132 140 127 140 L 118 122 Z" fill={skin.color} />
              {/* Gold Wrist Bangles */}
              <ellipse cx="131" cy="133" rx="4" ry="1.8" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
              <ellipse cx="130" cy="135" rx="3.8" ry="1.8" fill="none" stroke="#FEF3C7" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'high_school_skirt_uniform' ? (
            /* High School Blazer Sleeve with White Shirt Cuff */
            <>
              <path d="M 118 108 L 130 128 C 132 131 130 135 126 135 L 116 122 Z" fill={clothing.secondary} />
              <path d="M 130 128 L 133 133 C 134 135 132 138 128 138 L 126 135 Z" fill="#FFFFFF" />
              <circle cx="127" cy="128" r="1" fill="#CBD5E1" />
            </>
          ) : customization.clothingStyle === 'traditional_boubou_femme' ? (
            /* Grand Bazin Bell Sleeve with Ornate Gold Border */
            <>
              <path d="M 118 108 L 138 134 C 140 138 135 144 128 144 L 114 122 Z" fill={clothing.primary} />
              <path d="M 138 134 L 128 144" stroke="#F59E0B" strokeWidth="3.5" />
              <path d="M 136 133 L 129 142" stroke="#FEF3C7" strokeWidth="1.2" />
              <ellipse cx="132" cy="135" rx="3.2" ry="1.5" fill="none" stroke="#F59E0B" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'basketball_tank' ? (
            /* Sleeveless Athletic Arm & Gabon Wristband */
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill={skin.color} />
              <rect x="124" y="131" width="9" height="5" rx="1.5" fill="#10B981" />
              <line x1="124" y1="133.5" x2="133" y2="133.5" stroke="#FACC15" strokeWidth="1" />
            </>
          ) : customization.clothingStyle === 'business_suit_chic' ? (
            /* Tailored Diplomatic Blazer Sleeve */
            <>
              <path d="M 118 108 L 130 128 C 132 131 130 135 126 135 L 116 122 Z" fill="#020617" />
              <path d="M 130 128 L 133 133 C 134 135 132 138 128 138 L 126 135 Z" fill="#FEF3C7" />
              <circle cx="127" cy="128" r="1.2" fill="#F59E0B" />
            </>
          ) : customization.clothingStyle === 'cyber_pilot' ? (
            /* Cybernetic Space Suit Sleeve & Cyan Neon Stripe */
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="0.8" />
              <line x1="119" y1="110" x2="131" y2="133" stroke="#06B6D4" strokeWidth="1.5" />
              <rect x="124" y="131" width="9" height="4" rx="1" fill="#0F172A" stroke="#06B6D4" strokeWidth="0.8" />
            </>
          ) : (
            <>
              <path d="M 118 108 L 132 132 C 134 135 132 140 127 140 L 116 124 Z" fill={clothing.primary} />
              <rect x="124" y="132" width="9" height="4" rx="1" fill={clothing.secondary} />
            </>
          )}

          {/* Right Hand with Articulated Cartoon Fingers */}
          <g id="avatar-right-fingers">
            {isJoy ? (
              /* Joyful Victory Hand: Index and Middle finger in V sign */
              <g id="right-hand-victory">
                <circle cx="134" cy="138" r="5.5" fill={skin.color} />
                <rect x="135" y="124" width="4" height="12" rx="2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(15 137 130)" />
                <rect x="128" y="123" width="4" height="13" rx="2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-15 130 129)" />
                <circle cx="133" cy="136" r="3" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
              </g>
            ) : isThinking ? (
              /* Thoughtful Hand: Index pointing up to cheek, Thumb resting on jaw */
              <g id="right-hand-thinking">
                <circle cx="130" cy="136" r="5" fill={skin.color} />
                {/* Index finger pointing upwards to temple */}
                <rect x="126" y="122" width="4" height="13" rx="2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-25 128 128)" />
                {/* Thumb resting under jaw */}
                <rect x="121" y="132" width="3.8" height="9" rx="1.9" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-65 123 136)" />
                {/* Folded fingers */}
                <circle cx="132" cy="132" r="2.6" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
                <circle cx="134" cy="136" r="2.5" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
                <circle cx="135" cy="140" r="2.2" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
              </g>
            ) : (
              /* Friendly Open Hand with 4 articulated fingers + thumb */
              <g id="right-hand-open">
                <path d="M 136 132 C 132 132 128 135 129 140 C 130 144 135 145 138 141 C 140 137 139 132 136 132 Z" fill={skin.color} />
                {/* Thumb */}
                <path d="M 138 133 C 144 131 145 137 141 139 C 139 140 137 137 138 133 Z" fill={skin.color} stroke={skin.shadow} strokeWidth="0.6" />
                {/* Index Finger */}
                <rect x="138" y="138" width="3.5" height="8" rx="1.75" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(-10 140 142)" />
                {/* Middle Finger */}
                <rect x="134" y="140" width="3.5" height="9" rx="1.75" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" />
                {/* Ring Finger */}
                <rect x="130" y="140" width="3.3" height="8.5" rx="1.65" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(5 131 144)" />
                {/* Pinky Finger */}
                <rect x="127" y="138" width="3" height="7" rx="1.5" fill={skin.color} stroke={skin.shadow} strokeWidth="0.5" transform="rotate(15 128 141)" />
              </g>
            )}
          </g>
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
            /* Ronde & Douce (Forme par défaut) */
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
          {/* EXPRESSIVE EYES (Axiom Animated Expression States)   */}
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
                {/* Feminine Eyelashes in Joy State */}
                {customization.genderStyle === 'feminine' && (
                  <>
                    <path d="M 54 62 Q 50 58 48 59" stroke="#0F172A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                    <path d="M 106 62 Q 110 58 112 59" stroke="#0F172A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                  </>
                )}
                {/* Cheerful Eyebrows */}
                <path d="M 54 48 Q 65 42 76 48" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
                <path d="M 84 48 Q 95 42 106 48" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
              </>
            ) : isSad ? (
              /* Empathetic Encouraging Droop with sweatdrop */
              <>
                {/* Eyes looking gently up */}
                <circle cx="65" cy="63" r="7" fill="#0F172A" />
                <circle cx="67" cy="61" r="2.5" fill="#FFFFFF" />
                <circle cx="95" cy="63" r="7" fill="#0F172A" />
                <circle cx="97" cy="61" r="2.5" fill="#FFFFFF" />
                {/* Feminine Eyelashes */}
                {customization.genderStyle === 'feminine' && (
                  <>
                    <path d="M 58 59 Q 55 56 53 58" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M 102 59 Q 105 56 107 58" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  </>
                )}
                {/* Empathetic soft eyebrows */}
                <path d="M 54 49 Q 65 55 76 50" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
                <path d="M 84 50 Q 95 55 106 49" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
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
                {/* Feminine Eyelashes */}
                {customization.genderStyle === 'feminine' && (
                  <>
                    <path d="M 58 57 Q 55 54 53 56" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M 102 57 Q 105 54 107 56" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  </>
                )}
                {/* Raised inquisitive eyebrow */}
                <path d="M 54 48 Q 65 50 76 52" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
                <path d="M 84 46 Q 95 40 106 45" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '3.8' : customization.genderStyle === 'feminine' ? '2.4' : '3'} fill="none" strokeLinecap="round" />
              </>
            ) : (
              /* Standard Alert Blinking Eyes */
              <>
                {/* Eyebrows */}
                <path d="M 55 50 Q 65 46 75 50" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '4' : customization.genderStyle === 'feminine' ? '2.5' : '3.2'} fill="none" strokeLinecap="round" />
                <path d="M 85 50 Q 95 46 105 50" stroke={hair.color} strokeWidth={customization.genderStyle === 'masculine' ? '4' : customization.genderStyle === 'feminine' ? '2.5' : '3.2'} fill="none" strokeLinecap="round" />

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

                  {/* Feminine Flutter Eyelashes */}
                  {customization.genderStyle === 'feminine' && (
                    <>
                      <path d="M 58 57 Q 54 53 52 55" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M 61 55 Q 58 50 56 52" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      <path d="M 102 57 Q 106 53 108 55" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M 99 55 Q 102 50 104 52" stroke="#0F172A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    </>
                  )}
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
