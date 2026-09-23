import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface SuccessCelebrationProps {
  title?: string;
  subtitle?: string;
  referenceId: string;
  projectType?: string;
  phone?: string;
  onPrimaryAction: () => void;
  primaryActionLabel?: string;
  variant?: 'modal' | 'embedded';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angleZ: number;
  angleX: number;
  spinZ: number;
  spinX: number;
  width: number;
  height: number;
  color: string;
  shape: 'slat' | 'tile' | 'disc';
}

// Brand-calibrated architectural color palette: Vermilion, Architectural Amber, Emerald, Teak, Champagne, Crisp White
const BRAND_CONFETTI_COLORS = [
  '#EB3B2C', // Primary Flame Red
  '#F49A3A', // Architectural Amber Gold
  '#10B981', // Verification Emerald
  '#D97706', // Teak / Warm Timber Bronze
  '#FDE68A', // Champagne Gold Highlight
  '#FFFFFF', // Clean White
];

export const SuccessCelebration: React.FC<SuccessCelebrationProps> = ({
  title = "Inquiry Logged Successfully",
  subtitle,
  referenceId,
  projectType,
  phone,
  onPrimaryAction,
  primaryActionLabel = "Done",
  variant = 'modal'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  // Confetti Animation Effect
  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Center origin of burst (emanating from behind the success check icon)
    const originX = width / 2;
    const originY = variant === 'modal' ? Math.min(height * 0.28, 120) : Math.min(height * 0.25, 140);

    // Controlled, elegant batch of 48 particles (tasteful architectural celebration, not party clutter)
    const particleCount = 48;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Fan out in an upward arc
      const angle = (Math.PI * 0.2) + Math.random() * (Math.PI * 0.6); // 36° to 144°
      const speed = 4.5 + Math.random() * 6.5;
      const color = BRAND_CONFETTI_COLORS[Math.floor(Math.random() * BRAND_CONFETTI_COLORS.length)];
      
      // Three architectural geometric shapes:
      // 'slat' (thin louver strip), 'tile' (square facade panel), 'disc' (minimalist anchor)
      const shapes: ('slat' | 'tile' | 'disc')[] = ['slat', 'slat', 'tile', 'disc'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      particles.push({
        x: originX + (Math.random() - 0.5) * 20,
        y: originY + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1) * 0.85,
        vy: -Math.sin(angle) * speed,
        angleZ: Math.random() * Math.PI * 2,
        angleX: Math.random() * Math.PI,
        spinZ: (Math.random() - 0.5) * 0.12,
        spinX: (Math.random() - 0.5) * 0.18,
        width: shape === 'slat' ? 4 + Math.random() * 3 : (shape === 'tile' ? 5 + Math.random() * 3 : 5),
        height: shape === 'slat' ? 10 + Math.random() * 5 : (shape === 'tile' ? 5 + Math.random() * 3 : 5),
        color,
        shape
      });
    }

    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 3200; // 3.2 seconds total animation time

    const render = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Fade out smoothly between 1.8s and 3.2s
      let globalAlpha = 1;
      if (elapsed > 1800) {
        globalAlpha = Math.max(0, 1 - (elapsed - 1800) / (duration - 1800));
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics update
        p.vx *= 0.985; // Air drag
        p.vy += 0.14;  // Gentle gravity
        p.x += p.vx;
        p.y += p.vy;

        p.angleZ += p.spinZ;
        p.angleX += p.spinX;

        // 3D tumbling projection using cosine
        const scaleX = Math.cos(p.angleX);

        ctx.save();
        ctx.globalAlpha = globalAlpha * 0.92;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angleZ);
        ctx.scale(scaleX, 1);

        ctx.fillStyle = p.color;

        if (p.shape === 'disc') {
          ctx.beginPath();
          ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Rounded small rectangle / tile
          ctx.beginPath();
          ctx.roundRect(-p.width / 2, -p.height / 2, p.width, p.height, 1);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant]);

  const copyReferenceId = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(referenceId);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello RAVGROUP team, I have logged inquiry ticket [${referenceId}] for ${projectType || 'architectural materials'}. Please connect regarding feasibility and specifications.`
  )}`;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden text-center select-none ${
        variant === 'modal' ? 'py-6 sm:py-8 space-y-5' : 'py-10 sm:py-14 space-y-6'
      }`}
    >
      {/* Subtle HTML5 Canvas Particle Confetti Burst */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-20 w-full h-full"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />

      {/* Central Animated Success Badge */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Subtle Ambient Ripple Rings */}
          <div
            className="absolute w-20 h-20 rounded-full border border-emerald-500/30 bg-emerald-500/10 animate-success-ring"
            aria-hidden="true"
          />
          <div
            className="absolute w-16 h-16 rounded-full border border-[#F49A3A]/20 bg-[#F49A3A]/5 animate-ping opacity-40"
            style={{ animationDuration: '2.4s' }}
            aria-hidden="true"
          />

          {/* Solid Iconic Core Badge */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-500/25 to-emerald-700/10 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.25)] animate-check-pop">
            <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
          </div>
        </div>

        {/* Verification Status Kickers */}
        <div className="mt-4 flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#F49A3A] uppercase font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>SPECIFICATION LOGGED &amp; DISPATCHED</span>
        </div>
      </div>

      {/* Primary Affirmation Copy */}
      <div className="relative z-10 space-y-2 max-w-md mx-auto px-2">
        <h4 className="text-xl sm:text-2xl font-black text-white font-['Plus_Jakarta_Sans'] tracking-tight">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {subtitle || (
            <>
              Your requirement {projectType ? <span className="text-white font-semibold">for {projectType}</span> : ''} has been assigned to our Technical Estimation Desk. Our engineering lead will connect on{' '}
              <span className="text-[#F49A3A] font-semibold">{phone || 'your phone number'}</span>.
            </>
          )}
        </p>
      </div>

      {/* Professional Reference Ticket Card */}
      <div className="relative z-10 max-w-sm mx-auto p-3.5 sm:p-4 rounded bg-[#151515] border border-neutral-800 shadow-inner">
        <div className="flex items-center justify-between text-left">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-semibold">
              Project Reference No.
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white tracking-wide mt-0.5">
              {referenceId}
            </div>
          </div>
          <button
            type="button"
            onClick={copyReferenceId}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#222222] hover:bg-[#2A2A2A] text-neutral-300 hover:text-white text-[11px] font-medium border border-neutral-700 transition-colors cursor-pointer"
            title="Copy Reference ID"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy ID</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Turnaround: &lt; 4 Business Hours
          </span>
          <span className="font-mono text-neutral-400">Dehradun, UK</span>
        </div>
      </div>

      {/* Action Buttons: Fast-Track WhatsApp & Primary Dismiss */}
      <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1F2E23] hover:bg-[#263b2c] border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>Track on WhatsApp</span>
          <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
        </a>

        <button
          type="button"
          onClick={onPrimaryAction}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#EB3B2C] hover:bg-[#d63426] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition-colors cursor-pointer"
        >
          {primaryActionLabel}
        </button>
      </div>
    </div>
  );
};
