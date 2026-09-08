import React, { useState } from 'react';
import { Header } from './components/Header';
import { MonorepoSetupView } from './components/MonorepoSetupView';
import { HomeDashboardView } from './components/HomeDashboardView';
import { SkillTreeView } from './components/SkillTreeView';
import { ExerciseSessionView } from './components/ExerciseSessionView';
import { ProfileGamificationView } from './components/ProfileGamificationView';
import { StudentOnboardingModal } from './components/StudentOnboardingModal';
import { MascotId } from './components/mascot/mascotData';
import { MascotSelectorModal } from './components/mascot/MascotSelectorModal';
import { 
  AvatarCustomization, 
  loadAvatarCustomization, 
  saveAvatarCustomization,
  extractFirstName
} from './components/mascot/avatarTypes';
import { AvatarCustomizerModal } from './components/mascot/AvatarCustomizerModal';
import { 
  INITIAL_SUBJECTS, 
  INITIAL_SKILLS, 
  CLASS_SKILLS_DATA,
  INITIAL_BADGES, 
  getTierFromScore 
} from './data/axiomData';
import { UserProfile, UserRole, SkillNode, SchoolClassDefinition } from './types';

export default function App() {
  const [user, setUser] = useState<UserProfile>({
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
    subjectXp: {
      math: 280,
      physics: 110,
      svt: 60
    }
  });

  const [activeTab, setActiveTab] = useState<string>('skills'); // Starts directly on skills path
  const [subjects] = useState(INITIAL_SUBJECTS);
  const [skills, setSkills] = useState<SkillNode[]>(CLASS_SKILLS_DATA['1ere-s']);
  const [badges, setBadges] = useState(INITIAL_BADGES);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('physics');
  const [activeExerciseSkillId, setActiveExerciseSkillId] = useState<string>('skill-1s-pc-chap1-cinematique');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);
  const [selectedMascotId, setSelectedMascotId] = useState<MascotId>('avatar');
  const [isMascotModalOpen, setIsMascotModalOpen] = useState<boolean>(false);
  const [avatarCustomization, setAvatarCustomization] = useState<AvatarCustomization>(() => loadAvatarCustomization('Moussa Obiang'));
  const [isAvatarCustomizerOpen, setIsAvatarCustomizerOpen] = useState<boolean>(false);
  const [avatarCustomizerMode, setAvatarCustomizerMode] = useState<'wizard' | 'studio'>('wizard');

  const handleOpenAvatarCustomizer = (mode: 'wizard' | 'studio' = 'studio') => {
    setAvatarCustomizerMode(mode);
    setIsAvatarCustomizerOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleRoleChange = (role: UserRole) => {
    setUser(prev => ({ ...prev, role }));
    showToast(`Rôle basculé vers : ${role.toUpperCase()}`);
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
    openAvatarSetup?: boolean;
  }) => {
    const classId = data.selectedClass.id;
    const newSkills = CLASS_SKILLS_DATA[classId] || CLASS_SKILLS_DATA['term-c'];
    const studentFirstName = extractFirstName(data.name);

    setUser(prev => ({
      ...prev,
      name: data.name,
      email: data.email,
      schoolName: data.schoolName,
      currentClass: data.selectedClass.name,
      classId: classId,
      role: 'student',
    }));

    // Synchronize avatar's name with student's first name
    setAvatarCustomization(prev => {
      const updated: AvatarCustomization = {
        ...prev,
        name: studentFirstName,
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
    showToast(`Compte activé pour ${data.name} en ${data.selectedClass.name} !`);

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

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const activeExerciseSkill = skills.find(s => s.id === activeExerciseSkillId) || skills[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      {/* App Header */}
      <Header
        user={user}
        onRoleChange={handleRoleChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        mascotId={selectedMascotId}
        onOpenMascotSelector={() => setIsMascotModalOpen(true)}
        customization={avatarCustomization}
        onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#16C784]" />
            {toastMessage}
          </div>
        )}

        {/* Tab Router */}
        {activeTab === 'setup' && <MonorepoSetupView />}

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
            onOpenMascotSelector={() => setIsMascotModalOpen(true)}
            customization={avatarCustomization}
            onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
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
            onOpenMascotSelector={() => setIsMascotModalOpen(true)}
            customization={avatarCustomization}
            onOpenAvatarCustomizer={handleOpenAvatarCustomizer}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileGamificationView
            user={user}
            badges={badges}
            subjects={subjects}
            onRoleChange={handleRoleChange}
          />
        )}
      </main>

      {/* Duolingo Mascot Selector Modal */}
      <MascotSelectorModal
        isOpen={isMascotModalOpen}
        onClose={() => setIsMascotModalOpen(false)}
        selectedMascotId={selectedMascotId}
        customization={avatarCustomization}
        onOpenCustomizer={(mode) => {
          setIsMascotModalOpen(false);
          handleOpenAvatarCustomizer(mode || 'wizard');
        }}
        onSelectMascot={(id) => {
          setSelectedMascotId(id);
          const names: Record<MascotId, string> = {
            avatar: avatarCustomization.name || 'Mon Avatar',
            koko: avatarCustomization.name || 'Mon Avatar',
            bao: 'Bao la Panthère',
            lily: 'Lily la Renarde'
          };
          showToast(`Compagnon sélectionné : ${names[id]} !`);
        }}
      />

      {/* Avatar Customizer Studio & Wizard Modal */}
      <AvatarCustomizerModal
        isOpen={isAvatarCustomizerOpen}
        onClose={() => setIsAvatarCustomizerOpen(false)}
        currentCustomization={avatarCustomization}
        studentName={user.name}
        initialMode={avatarCustomizerMode}
        onSave={(updated) => {
          setAvatarCustomization(updated);
          setSelectedMascotId('avatar');
          if (updated.name && updated.name.trim()) {
            setUser(prev => {
              const prevParts = prev.name.trim().split(/\s+/);
              const lastName = prevParts.length > 1 ? prevParts.slice(1).join(' ') : '';
              const newFullName = lastName ? `${updated.name.trim()} ${lastName}` : updated.name.trim();
              return { ...prev, name: newFullName };
            });
          }
          showToast(`Avatar personnalisé : ${updated.name || 'Mon Avatar'} sauvegardé ! 🎉`);
        }}
      />

      {/* Student Onboarding & Class Selection Modal */}
      <StudentOnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onRegisterStudent={handleRegisterStudent}
        currentClassId={user.classId}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-slate-800">
              AXIOM ACADEMY
            </span>
            <span>•</span>
            <span>Moteur pédagogique de compétences scolaires (Gabon : 2nde à Terminale)</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => setIsOnboardingOpen(true)}
              className="text-[#2452FF] hover:underline font-semibold cursor-pointer"
            >
              Créer un profil élève / Changer de niveau
            </button>
            <span>•</span>
            <span>PostgreSQL 16</span>
            <span>FastAPI Backend</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
