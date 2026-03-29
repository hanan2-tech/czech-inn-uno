import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';

const GOLD = '#C9A84C';
const CREAM = '#F5EDD6';
const DARK = '#0d0d0d';

const phases = [
  {
    week: 'Week 1–2',
    title: 'Integration',
    items: ['PMS connection', 'QR setup', 'Staff briefing'],
    color: 'rgba(201,168,76,0.15)',
  },
  {
    week: 'Week 3–4',
    title: 'Soft Launch',
    items: ['First guests', 'Concierge live', 'Feedback loop'],
    color: 'rgba(201,168,76,0.25)',
  },
  {
    week: 'Month 2–3',
    title: 'Full Revenue',
    items: ['Gold Label active', 'All 26 extras live', 'Monthly reporting'],
    color: 'rgba(201,168,76,0.35)',
  },
];

function Phase({ data, delay }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const appear = spring({ frame: frame - delay, fps, config: { damping: 13, mass: 0.7 } });
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{
      background: data.color,
      border: '1px solid rgba(201,168,76,0.3)',
      borderRadius: 16,
      padding: '28px 24px',
      flex: 1,
      opacity,
      transform: `scale(${interpolate(appear, [0, 1], [0.8, 1])}) translateY(${interpolate(appear, [0, 1], [50, 0])}px)`,
    }}>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: 11,
        color: GOLD,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}>{data.week}</div>
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: 28,
        color: CREAM,
        marginBottom: 16,
      }}>{data.title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {data.items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 6, height: 6, background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: 'rgba(245,237,214,0.7)' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnershipTimeline() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
  const lineWidth = interpolate(frame, [40, 100], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const ctaOpacity = interpolate(frame, [160, 180], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, #0a0a0a 0%, #121008 100%)`,
      fontFamily: 'Arial, sans-serif',
      padding: 60,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 40,
    }}>
      {/* Header */}
      <div style={{ opacity: titleOpacity, textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
          Partnership Journey
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 44, color: CREAM, fontWeight: 300 }}>
          90 Days to Transformation
        </div>
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          width: `${lineWidth}%`,
          margin: '16px auto 0',
        }} />
      </div>

      {/* Phases */}
      <Sequence from={50}>
        <div style={{ display: 'flex', gap: 20 }}>
          {phases.map((phase, i) => (
            <Phase key={i} data={phase} delay={i * 20} />
          ))}
        </div>
      </Sequence>

      {/* CTA */}
      <div style={{ opacity: ctaOpacity, textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          border: `1px solid ${GOLD}`,
          color: GOLD,
          padding: '14px 40px',
          borderRadius: 40,
          fontSize: 14,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: 'Arial, sans-serif',
        }}>
          Zero Upfront Cost
        </div>
      </div>
    </AbsoluteFill>
  );
}
