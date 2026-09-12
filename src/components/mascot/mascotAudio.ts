// Lightweight Web Audio API synthesizer for Axiom Academy audio feedback
// Pure synthesized audio - 0 external asset dependency, works offline & in any browser

class MascotAudioEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    // Lazy initialize AudioContext on first user interaction
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  // Cheerful triumphant chime (C5 - G5 - C6)
  public playCorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Note 1
      this.playTone(ctx, 523.25, now, 0.12, 'sine', 0.18);
      // Note 2
      this.playTone(ctx, 659.25, now + 0.1, 0.14, 'sine', 0.22);
      // Note 3 (High chime with sparkle)
      this.playTone(ctx, 1046.50, now + 0.22, 0.35, 'triangle', 0.25);
    } catch {
      // Ignore audio policy restrictions
    }
  }

  // Gentle, friendly "try again" boing (non-punitive, warm)
  public playIncorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      this.playTone(ctx, 349.23, now, 0.15, 'sine', 0.15);
      this.playTone(ctx, 293.66, now + 0.12, 0.22, 'sine', 0.12);
    } catch {
      // Ignore audio policy restrictions
    }
  }

  // Cute pop / chirping sound when tapping the mascot
  public playTap() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch {
      // Ignore audio policy restrictions
    }
  }

  // Celebratory victory fanfare when session completes!
  public playVictory() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        this.playTone(ctx, freq, now + idx * 0.09, 0.25, 'triangle', 0.18);
      });
    } catch {
      // Ignore audio policy restrictions
    }
  }

  private playTone(
    ctx: AudioContext,
    freq: number,
    startTime: number,
    duration: number,
    type: OscillatorType,
    volume: number
  ) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }
}

export const mascotAudio = new MascotAudioEngine();
