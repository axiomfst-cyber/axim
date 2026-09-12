import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  Share2, 
  PlusSquare, 
  X, 
  CheckCircle, 
  Sparkles, 
  MoreVertical,
  Layers,
  ArrowRight,
  Package
} from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface PWAInstallBannerProps {
  compact?: boolean;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // If already running inside installed standalone PWA, render a discreet badge or nothing
  if (isInstalled) {
    if (compact) {
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>App installée</span>
        </div>
      );
    }
    return null;
  }

  if (isDismissed && !compact) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (!success) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  if (compact) {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#2452FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-md active:scale-95 transition-all cursor-pointer"
          title="Installer l'application Axiom Academy sur Android ou iOS"
        >
          <Smartphone className="w-3.5 h-3.5 text-amber-300" />
          <span>Installer l'App</span>
        </button>

        {showModal && (
          <MobileInstallModal 
            initialTab={isIOS ? 'ios' : 'android'} 
            onClose={() => setShowModal(false)}
            onDirectInstall={isInstallable ? install : undefined}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#1E293B] to-slate-900 text-white p-3.5 sm:p-4 shadow-lg border border-slate-800 my-3">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2452FF]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2452FF] to-emerald-500 flex items-center justify-center shrink-0 shadow-md border border-white/20">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-heading font-bold text-sm text-white truncate">
                  AXIOM ACADEMY Mobile
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                  Android & iOS
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-semibold">
                  PWA / APK
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                Installez l'application sur votre téléphone pour réviser hors-ligne et accéder à tous les chapitres du Gabon.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2452FF] hover:bg-blue-600 active:scale-95 text-white text-xs font-bold shadow-md transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Installer l'App</span>
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <MobileInstallModal 
          initialTab={isIOS ? 'ios' : 'android'} 
          onClose={() => setShowModal(false)}
          onDirectInstall={isInstallable ? install : undefined}
        />
      )}
    </>
  );
};

interface MobileInstallModalProps {
  initialTab?: 'android' | 'ios' | 'apk';
  onClose: () => void;
  onDirectInstall?: () => Promise<boolean>;
}

export const MobileInstallModal: React.FC<MobileInstallModalProps> = ({ 
  initialTab = 'android', 
  onClose,
  onDirectInstall 
}) => {
  const [activeOsTab, setActiveOsTab] = useState<'android' | 'ios' | 'apk'>(initialTab);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2452FF] flex items-center justify-center text-white font-black text-sm shadow-md">
              A
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span>Installer AXIOM ACADEMY</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-700 font-semibold">
                  Mobile
                </span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Application complète pour smartphones et tablettes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* OS Selector Tabs */}
        <div className="mt-4 flex rounded-xl bg-slate-100 p-1 gap-1">
          <button
            onClick={() => setActiveOsTab('android')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeOsTab === 'android'
                ? 'bg-white text-[#2452FF] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Android (Chrome)</span>
          </button>

          <button
            onClick={() => setActiveOsTab('ios')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeOsTab === 'ios'
                ? 'bg-white text-[#2452FF] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-slate-700" />
            <span>iPhone / iPad</span>
          </button>

          <button
            onClick={() => setActiveOsTab('apk')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeOsTab === 'apk'
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-indigo-600" />
            <span>Package APK</span>
          </button>
        </div>

        {/* Tab 1: Android Instructions */}
        {activeOsTab === 'android' && (
          <div className="mt-4 space-y-3 animate-fade-in">
            {onDirectInstall && (
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3">
                <div className="text-xs text-emerald-900">
                  <div className="font-bold">Installation directe disponible !</div>
                  <div className="text-[11px] text-emerald-700">Votre navigateur supporte l'installation immédiate.</div>
                </div>
                <button
                  onClick={async () => {
                    await onDirectInstall();
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs active:scale-95 transition whitespace-nowrap cursor-pointer"
                >
                  Installer maintenant
                </button>
              </div>
            )}

            <div className="text-xs text-slate-600 space-y-2.5">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <MoreVertical className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">1. Ouvrez le menu de Google Chrome</div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Sur votre téléphone Android (Samsung, Xiaomi, Tecno, Infinix, etc.), touchez les <strong>3 points verticaux (⋮)</strong> en haut à droite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-blue-50 text-[#2452FF] shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">2. Sélectionnez « Installer l'application »</div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Ou choisissez <strong>« Ajouter à l'écran d'accueil »</strong> dans la liste du menu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">3. Profitez de l'expérience native Android</div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    L'icône <strong>AXIOM ACADEMY</strong> s'installe dans le tiroir d'applications. Elle s'ouvre en plein écran sans interface de navigateur et fonctionne même avec un réseau faible ou hors-ligne.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
              <span>Compatible avec tous les smartphones Android 8.0+</span>
              <span className="font-semibold text-emerald-600">✓ 100% Gratuit</span>
            </div>
          </div>
        )}

        {/* Tab 2: iOS Instructions */}
        {activeOsTab === 'ios' && (
          <div className="mt-4 space-y-2.5 text-xs text-slate-600 animate-fade-in">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="p-2 rounded-xl bg-blue-50 text-[#2452FF] shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-800">1. Touchez le bouton Partager</div>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  En bas de l'écran sur Safari (icône carré avec une flèche vers le haut).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <PlusSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-800">2. Choisissez « Sur l'écran d'accueil »</div>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  Faites défiler la liste vers le bas et validez <strong>Sur l'écran d'accueil</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-800">3. Lancez comme une vraie App</div>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  L'application s'ouvre instantanément en plein écran avec votre compagnon d'apprentissage.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Package APK / TWA / Google Play */}
        {activeOsTab === 'apk' && (
          <div className="mt-4 space-y-3 animate-fade-in">
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-xs text-slate-700">
              <div className="font-bold text-indigo-950 flex items-center gap-1.5 mb-1">
                <Package className="w-4 h-4 text-indigo-600" />
                <span>Génération d'APK Android Natif & Google Play</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Le code d'Axiom Academy respecte scrupuleusement la spécification <strong>TWA (Trusted Web Activity)</strong> de Google. Vous pouvez générer un fichier <code>.apk</code> ou <code>.aab</code> pour distribution directe ou publication sur le Google Play Store.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-semibold text-slate-800">Méthode 1 : PWABuilder (Recommandé, sans code)</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Entrez l'URL de l'application sur <code>pwabuilder.com</code> et cliquez sur <strong>Package for Android</strong> pour télécharger le fichier APK directement.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-semibold text-slate-800">Méthode 2 : Bubblewrap CLI (Outil officiel Google)</div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Exécutez <code>bubblewrap init --manifest=manifest.json</code> puis <code>bubblewrap build</code> pour générer le binaire signé pour le Play Store.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Manifeste & Assets validés</span>
              <span className="font-semibold text-emerald-600">✓ Score PWA 100%</span>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm"
          >
            Fermer le guide
          </button>
        </div>
      </div>
    </div>
  );
};
