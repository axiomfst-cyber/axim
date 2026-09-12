import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Check, 
  Trash2, 
  Sparkles, 
  School, 
  GraduationCap, 
  Search, 
  Mail, 
  User, 
  LogIn, 
  UserPlus, 
  Flame, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { UserProfile, SchoolClassDefinition } from '../types';
import { AVAILABLE_CLASSES, GABON_HIGH_SCHOOLS } from '../data/axiomData';

export interface SavedAccountItem {
  user: UserProfile;
  lastActive: number;
  isGoogle?: boolean;
}

interface AccountSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onSwitchUser: (newUser: UserProfile) => void;
  onOpenNewAccountOnboarding?: (prefill?: { name?: string; email?: string }) => void;
  onOpenEditAccountOnboarding?: (user: UserProfile) => void;
}

export const STORAGE_ACCOUNTS_KEY = 'axiom_registered_accounts_v1';

export function getSavedAccounts(): SavedAccountItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_ACCOUNTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Error reading saved accounts', err);
  }

  return [
    {
      user: {
        id: 'usr-1',
        name: 'Moussa Obiang',
        email: 'moussa.obiang@lycee-leon-mba.ga',
        role: 'student',
        currentClass: 'Première S (Scientifique)',
        classId: '1ere-s',
        schoolName: 'Lycée National Léon Mba (Libreville)',
        schoolLevel: 'Lycée',
        totalXp: 450,
        streakDays: 5,
        subjectXp: { math: 280, physics: 110, svt: 60 }
      },
      lastActive: Date.now(),
      isGoogle: false,
    },
    {
      user: {
        id: 'usr-2',
        name: 'Marie-Claire Ndong',
        email: 'marie.ndong@gmail.com',
        role: 'student',
        currentClass: 'Terminale C (Mathématiques & Physique)',
        classId: 'term-c',
        schoolName: 'Lycée d\'État de l\'Estuaire (Libreville)',
        schoolLevel: 'Lycée',
        totalXp: 1280,
        streakDays: 14,
        subjectXp: { math: 650, physics: 420, svt: 210 }
      },
      lastActive: Date.now() - 86400000,
      isGoogle: true,
    }
  ];
}

export function saveSavedAccounts(accounts: SavedAccountItem[]): void {
  try {
    localStorage.setItem(STORAGE_ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch (err) {
    console.warn('Error persisting saved accounts', err);
  }
}

export function syncAccountToList(user: UserProfile, isGoogle = false): void {
  const accounts = getSavedAccounts();
  const idx = accounts.findIndex(a => a.user.id === user.id || a.user.email.toLowerCase() === user.email.toLowerCase());
  const item: SavedAccountItem = {
    user,
    lastActive: Date.now(),
    isGoogle: isGoogle || user.email.toLowerCase().includes('@gmail.com'),
  };
  if (idx >= 0) {
    accounts[idx] = {
      ...accounts[idx],
      ...item,
      user: {
        ...accounts[idx].user,
        ...user,
      }
    };
  } else {
    accounts.unshift(item);
  }
  saveSavedAccounts(accounts);
}

export const AccountSwitcherModal: React.FC<AccountSwitcherModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSwitchUser,
  onOpenNewAccountOnboarding,
}) => {
  const [savedAccounts, setSavedAccounts] = useState<SavedAccountItem[]>(() => getSavedAccounts());
  // Main modes: 'login' (Me connecter / J'ai déjà un compte) or 'register' (Créer un compte)
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [searchQuery, setSearchQuery] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regSchool, setRegSchool] = useState(GABON_HIGH_SCHOOLS[0]);
  const [regClassId, setRegClassId] = useState('1ere-s');

  // Google quick sign in
  const [showGooglePrompt, setShowGooglePrompt] = useState(false);
  const [googleEmail, setGoogleEmail] = useState('');
  const [googleName, setGoogleName] = useState('');

  if (!isOpen) return null;

  // Search match: find if any existing account matches the search query by email or name
  const trimmedSearch = searchQuery.trim().toLowerCase();
  const matchedExistingAccount = trimmedSearch.length >= 2 
    ? savedAccounts.find(item => 
        item.user.email.toLowerCase() === trimmedSearch ||
        item.user.name.toLowerCase() === trimmedSearch ||
        item.user.email.toLowerCase().includes(trimmedSearch) ||
        item.user.name.toLowerCase().includes(trimmedSearch)
      )
    : null;

  // Direct switch to an existing saved account
  const handleSelectAccount = (account: SavedAccountItem) => {
    syncAccountToList(currentUser);
    onSwitchUser(account.user);
    onClose();
  };

  // Remove an account from this device's storage
  const handleRemoveAccount = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === currentUser.id) {
      alert("Ce compte est actuellement actif. Basculez d'abord sur un autre compte pour le retirer.");
      return;
    }
    const updated = savedAccounts.filter(a => a.user.id !== id);
    setSavedAccounts(updated);
    saveSavedAccounts(updated);
  };

  // Submit registration: create new account with initial progression
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) return;

    const selectedClass = AVAILABLE_CLASSES.find(c => c.id === regClassId) || AVAILABLE_CLASSES[0];
    const emailToUse = regEmail.trim() || `${regName.trim().toLowerCase().replace(/\s+/g, '.')}@axiom.ga`;

    // Check if account with this email already exists
    const existing = savedAccounts.find(a => a.user.email.toLowerCase() === emailToUse.toLowerCase());
    if (existing) {
      syncAccountToList(currentUser);
      onSwitchUser(existing.user);
      onClose();
      return;
    }

    const newId = `usr-${Date.now().toString(36)}`;
    const newUser: UserProfile = {
      id: newId,
      name: regName.trim(),
      email: emailToUse,
      role: 'student',
      schoolName: regSchool,
      currentClass: selectedClass.name,
      classId: selectedClass.id,
      schoolLevel: 'Lycée',
      totalXp: 100,
      streakDays: 1,
      subjectXp: {},
    };

    syncAccountToList(newUser);
    setSavedAccounts(getSavedAccounts());
    onSwitchUser(newUser);
    onClose();
  };

  // Google sign in / sign up handler
  const handleGoogleAuth = () => {
    const finalEmail = (googleEmail.trim() || 'eleve@gmail.com').toLowerCase();
    const finalName = googleName.trim() || 'Élève Google';

    const existing = savedAccounts.find(a => a.user.email.toLowerCase() === finalEmail);
    if (existing) {
      syncAccountToList(currentUser);
      onSwitchUser(existing.user);
      onClose();
      return;
    }

    // Create new Google account
    const selectedClass = AVAILABLE_CLASSES.find(c => c.id === regClassId) || AVAILABLE_CLASSES[0];
    const newUser: UserProfile = {
      id: `usr-g-${Date.now().toString(36)}`,
      name: finalName,
      email: finalEmail,
      role: 'student',
      currentClass: selectedClass.name,
      classId: selectedClass.id,
      schoolName: regSchool,
      schoolLevel: 'Lycée',
      totalXp: 200,
      streakDays: 2,
      subjectXp: { math: 100, physics: 50, svt: 50 }
    };

    syncAccountToList(newUser, true);
    setSavedAccounts(getSavedAccounts());
    onSwitchUser(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#2452FF] flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/30">
              A
            </div>
            <div>
              <h2 className="font-heading font-black text-base sm:text-lg text-white">
                Compte Élève AXIOM
              </h2>
              <p className="text-xs text-blue-200">
                Connectez-vous pour retrouver votre progression ou créez un nouveau compte
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs: Me connecter VS Créer un compte */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2 shrink-0">
          <button
            onClick={() => setActiveTab('login')}
            className={`pb-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'login'
                ? 'border-[#2452FF] text-[#2452FF]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Me connecter (J'ai déjà un compte)</span>
          </button>

          <button
            onClick={() => setActiveTab('register')}
            className={`pb-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'register'
                ? 'border-[#2452FF] text-[#2452FF]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Créer un compte</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* ==================================================== */}
          {/* TAB 1: ME CONNECTER (J'AI DÉJÀ UN COMPTE)            */}
          {/* ==================================================== */}
          {activeTab === 'login' && (
            <>
              {/* Search or Filter for Existing Account */}
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2.5">
                <label className="text-xs font-bold text-slate-700 block flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-[#2452FF]" />
                    Rechercher mon compte
                  </span>
                  <span className="text-[11px] font-normal text-slate-400">
                    Nom ou Email de l'élève
                  </span>
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tapez votre nom ou email pour vous connecter..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 outline-hidden"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-slate-400 hover:text-slate-600 absolute right-3 top-3 text-xs font-bold"
                    >
                      Effacer
                    </button>
                  )}
                </div>

                {/* Account Found in Search */}
                {matchedExistingAccount && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-emerald-800 font-bold text-xs">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        Compte trouvé avec sa progression :
                      </span>
                      <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-extrabold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {matchedExistingAccount.user.totalXp} XP
                      </span>
                    </div>

                    <div className="p-2.5 bg-white rounded-lg border border-emerald-200 text-xs text-slate-700 space-y-1">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{matchedExistingAccount.user.name}</span>
                        <span className="text-[#2452FF] font-semibold text-[11px]">
                          {matchedExistingAccount.user.currentClass}
                        </span>
                      </div>
                      <p className="text-slate-500 text-[11px] truncate">
                        {matchedExistingAccount.user.email}
                      </p>
                      <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-600">
                        <span className="truncate">{matchedExistingAccount.user.schoolName}</span>
                        <span className="text-amber-600 font-bold flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                          {matchedExistingAccount.user.streakDays} jours consécutifs
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectAccount(matchedExistingAccount)}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Se connecter avec ce compte et reprendre la progression</span>
                    </button>
                  </div>
                )}

                {/* Not Found -> Prompt to Register */}
                {trimmedSearch.length >= 2 && !matchedExistingAccount && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between gap-3 animate-fade-in">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-blue-900">
                        Compte non trouvé pour "{searchQuery}"
                      </p>
                      <p className="text-[11px] text-blue-700">
                        Pas encore inscrit ? Vous pouvez créer votre compte en 30 secondes.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setRegName(searchQuery.includes('@') ? '' : searchQuery);
                        setRegEmail(searchQuery.includes('@') ? searchQuery : '');
                        setActiveTab('register');
                      }}
                      className="py-1.5 px-3 rounded-lg bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs shrink-0 shadow-xs cursor-pointer transition-colors"
                    >
                      Créer un compte
                    </button>
                  </div>
                )}
              </div>

              {/* Active Account Status */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    Compte connecté actuellement
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold">
                    Session active
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2452FF] to-blue-500 text-white font-black text-lg flex items-center justify-center shadow-sm shrink-0">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-black text-slate-900 text-base leading-tight truncate">
                      {currentUser.name}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {currentUser.email}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200 truncate">
                        {currentUser.currentClass}
                      </span>
                      <span className="text-[11px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {currentUser.totalXp} XP
                      </span>
                      <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200 flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                        {currentUser.streakDays}j
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Saved Accounts with Progression */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Comptes enregistrés ({savedAccounts.length})
                  </h4>
                  <button
                    onClick={() => setActiveTab('register')}
                    className="text-xs font-bold text-[#2452FF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Créer un autre compte</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {savedAccounts.map((item) => {
                    const isCurrent = item.user.id === currentUser.id;
                    return (
                      <div
                        key={item.user.id}
                        className={`p-3.5 rounded-2xl border transition-all ${
                          isCurrent
                            ? 'bg-blue-50/40 border-blue-300 ring-2 ring-blue-500/20'
                            : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div 
                            onClick={() => !isCurrent && handleSelectAccount(item)}
                            className="flex items-start gap-3 min-w-0 flex-1 cursor-pointer"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-sm border border-slate-200 shrink-0 mt-0.5">
                              {item.user.name ? item.user.name.charAt(0).toUpperCase() : 'U'}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                                  {item.user.name}
                                </p>
                                {item.isGoogle && (
                                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                                    Google
                                  </span>
                                )}
                                {isCurrent && (
                                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-blue-100 text-blue-700">
                                    Actif
                                  </span>
                                )}
                              </div>

                              <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                {item.user.email}
                              </p>

                              {/* Progression Details: Class, School, XP, Streak */}
                              <div className="flex flex-wrap items-center gap-1.5 mt-1.5 text-[10px]">
                                <span className="font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 truncate">
                                  {item.user.currentClass}
                                </span>
                                <span className="text-slate-500 truncate max-w-[140px]">
                                  {item.user.schoolName || 'Lycée au Gabon'}
                                </span>
                                <span className="font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 flex items-center gap-0.5">
                                  <Zap className="w-2.5 h-2.5 fill-amber-500" />
                                  {item.user.totalXp} XP
                                </span>
                                <span className="font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200 flex items-center gap-0.5">
                                  <Flame className="w-2.5 h-2.5 fill-orange-500" />
                                  {item.user.streakDays}j
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                            {isCurrent ? (
                              <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center gap-1 shadow-xs">
                                <Check className="w-3.5 h-3.5" />
                                <span>Actif</span>
                              </span>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleSelectAccount(item)}
                                  className="py-1.5 px-3 rounded-lg bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs flex items-center gap-1"
                                >
                                  <LogIn className="w-3.5 h-3.5" />
                                  <span>Se connecter</span>
                                </button>
                                <button
                                  onClick={(e) => handleRemoveAccount(item.user.id, e)}
                                  title="Retirer ce compte de l'appareil"
                                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Google Sign In Quick Option */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <button
                  type="button"
                  onClick={() => setShowGooglePrompt(!showGooglePrompt)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 flex items-center justify-center gap-2.5 shadow-xs cursor-pointer transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span>Continuer avec un compte Google</span>
                </button>

                {showGooglePrompt && (
                  <div className="pt-2 space-y-2 border-t border-slate-200 animate-fade-in">
                    <input
                      type="email"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      placeholder="Votre adresse Gmail (ex: eleve@gmail.com)"
                      className="w-full px-3 py-2 text-xs bg-white rounded-xl border border-slate-300 focus:border-[#2452FF] outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={handleGoogleAuth}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Valider la connexion Google</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Direct Switch to Create Account */}
              <div className="p-3 bg-slate-50 rounded-xl text-center border border-slate-200">
                <p className="text-xs text-slate-600">
                  Vous n'avez pas encore de compte ?{' '}
                  <button
                    onClick={() => setActiveTab('register')}
                    className="font-bold text-[#2452FF] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    Créer un compte
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </p>
              </div>
            </>
          )}

          {/* ==================================================== */}
          {/* TAB 2: CRÉER UN COMPTE                               */}
          {/* ==================================================== */}
          {activeTab === 'register' && (
            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950">
                <h3 className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <UserPlus className="w-4 h-4 text-[#2452FF]" />
                  <span>Nouveau compte élève</span>
                </h3>
                <p className="text-xs mt-1 text-blue-800">
                  Inscrivez-vous pour enregistrer vos points XP, suivre votre progression et accéder au programme officiel du lycée.
                </p>
              </div>

              {/* Input Fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2452FF]" />
                    Nom complet de l'élève *
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Ex: Danielle Nguema, Jean-Marc Ndong..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2452FF]" />
                    Adresse email
                  </label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="Ex: eleve@gmail.com (ou vide pour génération automatique)"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-[#2452FF]" />
                    Établissement scolaire au Gabon *
                  </label>
                  <select
                    value={regSchool}
                    onChange={(e) => setRegSchool(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 outline-hidden"
                  >
                    {GABON_HIGH_SCHOOLS.map((hs, i) => (
                      <option key={i} value={hs}>{hs}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2452FF]" />
                    Classe & Série du Lycée *
                  </label>
                  <select
                    value={regClassId}
                    onChange={(e) => setRegClassId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-slate-300 focus:border-[#2452FF] focus:ring-2 focus:ring-[#2452FF]/20 outline-hidden font-medium"
                  >
                    {AVAILABLE_CLASSES.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {cls.name} — {cls.grade} ({cls.track})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#2452FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer transition-colors"
                >
                  <Check className="w-4 h-4" />
                  <span>Créer mon compte et commencer ma progression</span>
                </button>
              </div>

              {/* Switch to Login */}
              <div className="p-3 bg-slate-50 rounded-xl text-center border border-slate-200">
                <p className="text-xs text-slate-600">
                  Vous avez déjà un compte ?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="font-bold text-[#2452FF] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    Me connecter
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer: Simple, clean & no unwanted labels */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          {activeTab === 'login' ? (
            <button
              onClick={() => setActiveTab('register')}
              className="w-full sm:w-auto py-2 px-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2452FF] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-blue-200"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Créer un nouveau compte</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveTab('login')}
              className="w-full sm:w-auto py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-300"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>J'ai déjà un compte</span>
            </button>
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {onOpenNewAccountOnboarding && (
              <button
                onClick={() => {
                  onClose();
                  onOpenNewAccountOnboarding();
                }}
                title="Créer un compte avec assistant complet et avatar personnalisé"
                className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">Assistant & Avatar</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="py-2 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
