import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';

const GOLD = '#C9A84C';
const CREAM = '#F5EDD6';
const DARK = '#0d0d0d';

const stats = [
  { value: '€1.7M', label: 'Year 1 Revenue Share' },
  { value: '4.91★', label: 'Average Guest Rating' },
  { value: '28', label: 'Czech Inn Properties' },
  { value: '€395', label: 'Average Gold Label Spend' },
];

function StatCard({ value, label, delay }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const appear = spring({ frame: frame - delay, fps, config: { damping: 12, mass: 0.6 } });
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{
      background: 'rgba(201,168,76,0.1)',
      border: '1px solid rgba(201,168,76,0.3)',
      borderRadius: 12,
      padding: '32px 24px',
      textAlign: 'center',
      transform: `scale(${interpolate(appear, [0, 1], [0.7, 1])}) translateY(${interpolate(appear, [0, 1], [40, 0])}px)`,
      opacity,
      flex: 1,
    }}>
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: 44,
        color: GOLD,
        fontWeight: 'bold',
        lineHeight: 1,
      }}>{value}</div>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: 13,
        color: CREAM,
        marginTop: 8,
        opacity: 0.7,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
}

function BarChart() {
  const frame = useCurrentFrame();
  const bars = [
    { label: 'Standard Stay', value: 120, color: 'rgba(255,255,255,0.2)' },
    { label: 'Gold Label Stay', value: 395, color: GOLD },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: 40,
      alignItems: 'flex-end',
      height: 200,
      padding: '0 40px',
      justifyContent: 'center',
    }}>
      {bars.map((bar, i) => {
        const heightPct = interpolate(frame, [i * 15, i * 15 + 60], [0, (bar.value / 395) * 100], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        return (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 18,
              color: bar.color === GOLD ? GOLD : 'rgba(255,255,255,0.6)',
              fontWeight: 'bold',
            }}>€{bar.value}</div>
            <div style={{
              width: 80,
              height: `${heightPct * 1.8}px`,
              background: bar.color,
              borderRadius: '6px 6px 0 0',
              transition: 'height 0.3s ease',
              minHeight: 4,
            }} />
            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              maxWidth: 90,
            }}>{bar.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export function CorporateROI() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, ${DARK} 0%, #1a1008 100%)`,
      fontFamily: 'Arial, sans-serif',
      padding: 60,
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
    }}>
      {/* Header */}
      <div style={{
        opacity: titleOpacity,
        transform: `translateY(${interpolate(titleY, [0, 1], [30, 0])}px)`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 13, color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
          Czech Inn Hotels × UNO
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 48, color: CREAM, fontWeight: 300 }}>
          The Business Case
        </div>
        <div style={{ width: 60, height: 1, background: GOLD, margin: '16px auto 0' }} />
      </div>

      {/* Stats */}
      <Sequence from={40}>
        <div style={{ display: 'flex', gap: 20 }}>
          {stats.map((s, i) => <StatCard key={i} {...s} delay={i * 12} />)}
        </div>
      </Sequence>

      {/* Chart */}
      <Sequence from={100}>
        <div>
          <div style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
            Revenue Per Guest
          </div>
          <BarChart />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
}
