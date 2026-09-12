import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeDashboardView } from './components/HomeDashboardView';
import { SkillTreeView } from './components/SkillTreeView';
import { ExerciseSessionView } from './components/ExerciseSessionView';
import { ProfileGamificationView } from './components/ProfileGamificationView';
import { StudentOnboardingModal } from './components/StudentOnboardingModal';
import { AccountSwitcherModal, syncAccountToList, getSavedAccounts } from './components/AccountSwitcherModal';
import { MobileBottomNav } from './components/mobile/MobileBottomNav';
import { OfflineIndicator } from './components/mobile/OfflineIndicator';
import { MascotId } from './components/mascot/mascotData';
import { 
  AvatarCustomization, 
  loadAvatarCustomization, 
  saveAvatarCustomization,
  extractFirstName
} from './components/mascot/avatarTypes';
import { AvatarCustomizerModal } from './components/mascot/AvatarCustomizerModal';
import { 
  INITIAL_SUBJECTS, 
  CLASS_SKILLS_DATA, 
  INITIAL_BADGES, 
  getTierFromScore 
} from './data/axiomData';
import { UserProfile, SkillNode, SchoolClassDefinition } from './types';

const STORAGE_SINGLE_USER_KEY = 'axiom_single_user_profile_v1';

const DEFAULT_SINGLE_USER: UserProfile = {
  id: 'usr-single',
  name: 'Moussa Obiang',
  email: 'moussa.obiang@lycee-leon-mba.ga',
  role: 'student',
  currentClass: 'Première S (Scientifique)',
  classId: '1ere-s',
  schoolName: 'Lycée National Léon Mba (Libreville)',
  schoolLevel: 'Lycée',
  totalXp: 450,
  streakDays: 5,
  subjectXp: {
    math: 280,
    physics: 110,
    svt: 60
  }
};

function loadSingleUser(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_SINGLE_USER_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to load user profile from storage', err);
  }
  return DEFAULT_SINGLE_USER;
}

export default function App() {
  const [user, setUser] = useState<UserProfile>(() => loadSingleUser());

  const [activeTab, setActiveTab] = useState<string>('skills'); // Starts directly on skills path
  const [subjects] = useState(INITIAL_SUBJECTS);
  const [skills, setSkills] = useState<SkillNode[]>(() => CLASS_SKILLS_DATA[user.classId] || CLASS_SKILLS_DATA['1ere-s']);
  const [badges] = useState(INITIAL_BADGES);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('physics');
  const [activeExerciseSkillId, setActiveExerciseSkillId] = useState<string>('skill-1s-pc-chap1-cinematique');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);
  const [onboardingInitialUser, setOnboardingInitialUser] = useState<Partial<UserProfile> | null>(null);
  const [onboardingIsNewAccount, setOnboardingIsNewAccount] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);
  const [selectedMascotId] = useState<MascotId>('avatar');
  const [avatarCustomization, setAvatarCustomization] = useState<AvatarCustomization>(() => loadAvatarCustomization(user.name));
  const [isAvatarCustomizerOpen, setIsAvatarCustomizerOpen] = useState<boolean>(false);
  const [avatarCustomizerMode, setAvatarCustomizerMode] = useState<'wizard' | 'studio'>('wizard');

  // Save single user profile changes to localStorage and ensure it's in the accounts list
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SINGLE_USER_KEY, JSON.stringify(user));
      syncAccountToList(user);
    } catch (err) {
      console.warn('Failed to persist user profile', err);
    }
  }, [user]);

  const handleSwitchUser = (newUser: UserProfile) => {
    setUser(newUser);
    const newSkills = CLASS_SKILLS_DATA[newUser.classId] || CLASS_SKILLS_DATA['1ere-s'];
    setSkills(newSkills);
    if (newSkills.length > 0) {
      setActiveExerciseSkillId(newSkills[0].id);
      setSelectedSubjectId(newSkills[0].subjectId);
    }
    const loadedAvatar = loadAvatarCustomization(newUser.name);
    setAvatarCustomization(loadedAvatar);
    showToast(`Compte actif : ${newUser.name} (${newUser.currentClass})`);
  };

  const handleOpenNewAccountOnboarding = (prefill?: { name?: string; email?: string }) => {
    setOnboardingInitialUser(prefill ? { name: prefill.name || '', email: prefill.email || '' } : null);
    setOnboardingIsNewAccount(true);
    setIsOnboardingOpen(true);
  };

  const handleOpenEditAccountOnboarding = (targetUser: UserProfile) => {
    setOnboardingInitialUser(targetUser);
    setOnboardingIsNewAccount(false);
    setIsOnboardingOpen(true);
  };

  const handleOpenAvatarCustomizer = (mode: 'wizard' | 'studio' = 'studio') => {
    setAvatarCustomizerMode(mode);
    setIsAvatarCustomizerOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSelectSubject = (subjId: string) => {
    setSelectedSubjectId(subjId);
    const subjSkills = skills.filter(s => s.subjectId === subjId);
    if (subjSkills.length > 0) {
      setActiveExerciseSkillId(subjSkills[0].id);
    }
  };

  const handleStartExercise = (skillId: string) => {
    const targetSkill = skills.find(s => s.id === skillId);
    if (targetSkill) {
      setSelectedSubjectId(targetSkill.subjectId);
    }
    setActiveExerciseSkillId(skillId);
    setActiveTab('exercise');
  };

  const handleRegisterStudent = (data: {
    name: string;
    email: string;
    schoolName: string;
    selectedClass: SchoolClassDefinition;
    avatarConfig?: AvatarCustomization;
    openAvatarSetup?: boolean;
    existingAccountId?: string;
  }) => {
    const classId = data.selectedClass.id;
    const newSkills = CLASS_SKILLS_DATA[classId] || CLASS_SKILLS_DATA['1ere-s'];
    const studentFirstName = extractFirstName(data.name);

    const isExisting = Boolean(data.existingAccountId);
    const targetId = data.existingAccountId || (onboardingIsNewAccount ? `usr-${Date.now().toString(36)}` : user.id);

    const existingUserRecord = isExisting ? getSavedAccounts().find(a => a.user.id === targetId)?.user : null;

    const updatedUser: UserProfile = {
      id: targetId,
      name: data.name,
      email: data.email,
      schoolName: data.schoolName,
      currentClass: data.selectedClass.name,
      classId: classId,
      role: 'student',
      schoolLevel: 'Lycée',
      totalXp: existingUserRecord?.totalXp ?? (targetId === user.id ? user.totalXp : 100),
      streakDays: existingUserRecord?.streakDays ?? (targetId === user.id ? user.streakDays : 1),
      subjectXp: existingUserRecord?.subjectXp ?? (targetId === user.id ? user.subjectXp : {}),
    };

    setUser(updatedUser);
    syncAccountToList(updatedUser);

    // Synchronize avatar's configuration and name with student's first name
    setAvatarCustomization(prev => {
      const base = data.avatarConfig || prev;
      const updated: AvatarCustomization = {
        ...base,
        name: studentFirstName,
        isInitialized: true,
      };
      saveAvatarCustomization(updated);
      return updated;
    });

    setSkills(newSkills);
    if (newSkills.length > 0) {
      setActiveExerciseSkillId(newSkills[0].id);
      setSelectedSubjectId(newSkills[0].subjectId);
    }

    setIsOnboardingOpen(false);
    setActiveTab('skills');
    showToast(isExisting 
      ? `Profil mis à jour pour ${data.name} (${data.selectedClass.name}) !`
      : `Compte élève créé pour ${data.name} en ${data.selectedClass.name} !`
    );

    if (data.openAvatarSetup) {
      setTimeout(() => {
        handleOpenAvatarCustomizer('wizard');
      }, 400);
    }
  };

  const handleCompleteExercise = (newScore: number, xpGained: number) => {
    // 1. Update skill mastery score and tier
    setSkills(prev => prev.map(s => {
      if (s.id === activeExerciseSkillId) {
        const tier = getTierFromScore(newScore);
        const status = newScore >= 95 ? 'excellence' 
                     : newScore >= 80 ? 'mastered' 
                     : newScore >= 60 ? 'acquired' 
                     : newScore > 0 ? 'in_progress' 
                     : 'available';
        return {
          ...s,
          masteryScore: newScore,
          tier,
          status
        };
      }
      return s;
    }));

    // 2. Update user XP and subject XP (Gamification Engine)
    setUser(prev => ({
      ...prev,
      totalXp: prev.totalXp + xpGained,
      subjectXp: {
        ...prev.subjectXp,
        [selectedSubjectId]: (prev.subjectXp[selectedSubjectId] || 0) + xpGained
      }
    }));

    showToast(`Score de maîtrise recalculé par Axiom Engine : ${newScore}% (+${xpGained} XP)`);
  };

  const handleClaimWeeklyBonus = (bonusXp: number, challengeTitle: string) => {
    setUser(prev => ({
      ...prev,
      totalXp: prev.totalXp + bonusXp,
      subjectXp: {
        ...prev.subjectXp,
        'math-1ere-ab': (prev.subjectXp['math-1ere-ab'] || 0) + bonusXp
      }
    }));
    showToast(`🎉 Bonus Défi Hebdomadaire réclamé : +${bonusXp} XP (${challengeTitle}) !`);
  };

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const activeExerciseSkill = skills.find(s => s.id === activeExerciseSkillId) || skills[0];

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col text-slate-900 selection:bg-[#2452FF] selection:text-white">
      {/* Offline Connectivity Status Toast */}
      <OfflineIndicator />

      {/* App Header - Responsive Desktop & Mobile */}
      <Header
        user={user}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onOpenAccountSwitcher={() => setIsAccountModalOpen(true)}
        mascotId={selectedMascotId}
        customization={avatarCustomization}
        onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
      />

      {/* Main Full-Screen Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-y-auto">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2 animate-fade-in backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#16C784]" />
            <span className="whitespace-nowrap">{toastMessage}</span>
          </div>
        )}

        {activeTab === 'home' && (
          <HomeDashboardView
            user={user}
            subjects={subjects}
            skills={skills}
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={id => {
              handleSelectSubject(id);
              setActiveTab('skills');
            }}
            onStartExercise={handleStartExercise}
            onNavigateToSkills={() => setActiveTab('skills')}
            onOpenOnboarding={() => setIsOnboardingOpen(true)}
            mascotId={selectedMascotId}
            customization={avatarCustomization}
            onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
            onClaimWeeklyBonus={handleClaimWeeklyBonus}
          />
        )}

        {activeTab === 'skills' && (() => {
          const displayedSkills = skills.filter(s => s.subjectId === selectedSubjectId);
          const activeList = displayedSkills.length > 0 ? displayedSkills : skills;
          return (
            <SkillTreeView
              subject={currentSubject}
              skills={activeList}
              totalClassSkills={skills}
              allSubjects={subjects}
              selectedSubjectId={selectedSubjectId}
              onSelectSubject={handleSelectSubject}
              onStartExercise={handleStartExercise}
              userClass={user.currentClass}
              onOpenOnboarding={() => setIsOnboardingOpen(true)}
            />
          );
        })()}

        {activeTab === 'exercise' && (
          <ExerciseSessionView
            skill={activeExerciseSkill}
            onCompleteExercise={handleCompleteExercise}
            onBackToTree={() => setActiveTab('skills')}
            mascotId={selectedMascotId}
            customization={avatarCustomization}
            onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileGamificationView
            user={user}
            badges={badges}
            subjects={subjects}
            onOpenAccountSwitcher={() => setIsAccountModalOpen(true)}
          />
        )}
      </main>

      {/* Avatar Customizer Studio & Wizard Modal */}
      <AvatarCustomizerModal
        isOpen={isAvatarCustomizerOpen}
        onClose={() => setIsAvatarCustomizerOpen(false)}
        currentCustomization={avatarCustomization}
        studentName={user.name}
        initialMode={avatarCustomizerMode}
        onSave={(updated) => {
          setAvatarCustomization(updated);
          showToast('Avatar personnalisé avec succès ! 🎉');
        }}
      />

      {/* Student Onboarding & Class Selection Modal */}
      <StudentOnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => {
          setIsOnboardingOpen(false);
          setOnboardingInitialUser(null);
          setOnboardingIsNewAccount(false);
        }}
        onRegisterStudent={handleRegisterStudent}
        currentClassId={user.classId}
        initialProfile={onboardingInitialUser}
        isNewAccount={onboardingIsNewAccount}
      />

      {/* Account Switcher Modal */}
      <AccountSwitcherModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        currentUser={user}
        onSwitchUser={handleSwitchUser}
        onOpenNewAccountOnboarding={handleOpenNewAccountOnboarding}
        onOpenEditAccountOnboarding={handleOpenEditAccountOnboarding}
      />

      {/* Native Mobile Bottom Navigation Bar (Hidden on desktop md+) */}
      <div className="md:hidden">
        <MobileBottomNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeSkillName={activeExerciseSkill?.title}
        />
      </div>
    </div>
  );
}
