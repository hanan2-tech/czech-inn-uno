import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';

const GOLD = '#C9A84C';
const CREAM = '#F5EDD6';
const DARK = '#0d0d0d';

const photos = [
  'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

function PhotoSlide({ src, from, duration, text, sub }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - from;

  const opacity = interpolate(localFrame, [0, 20, duration - 20, duration], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(localFrame, [0, duration], [1, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const textY = spring({ frame: localFrame, fps, config: { damping: 14, mass: 0.7 } });
  const textOpacity = interpolate(localFrame, [15, 35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ opacity }}>
      <AbsoluteFill>
        <img
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${scale})`,
          }}
        />
        <AbsoluteFill style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)',
        }} />
      </AbsoluteFill>
      {text && (
        <AbsoluteFill style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 100,
          opacity: textOpacity,
          transform: `translateY(${interpolate(textY, [0, 1], [30, 0])}px)`,
        }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 56,
            color: CREAM,
            fontWeight: 300,
            letterSpacing: '0.08em',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            textAlign: 'center',
          }}>{text}</div>
          {sub && (
            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: 20,
              color: GOLD,
              marginTop: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>{sub}</div>
          )}
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
}

function GoldLine() {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [0, 40], [0, 300], { extrapolateRight: 'clamp' });

  return (
    <div style={{
      width,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
      margin: '16px auto',
    }} />
  );
}

export function GoldLabelPromo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideLen = 150; // 5s at 30fps

  return (
    <AbsoluteFill style={{ background: DARK, fontFamily: 'Georgia, serif' }}>
      <Sequence from={0} durationInFrames={slideLen}>
        <PhotoSlide src={photos[0]} from={0} duration={slideLen} text="Gold Label" sub="Czech Inn Hotels × UNO" />
      </Sequence>
      <Sequence from={slideLen} durationInFrames={slideLen}>
        <PhotoSlide src={photos[1]} from={slideLen} duration={slideLen} text="Private Tours" sub="Exclusively Yours" />
      </Sequence>
      <Sequence from={slideLen * 2} durationInFrames={slideLen}>
        <PhotoSlide src={photos[2]} from={slideLen * 2} duration={slideLen} text="Penthouse Upgrades" sub="Arrive to Something Special" />
      </Sequence>
      <Sequence from={slideLen * 3} durationInFrames={slideLen}>
        <PhotoSlide src={photos[3]} from={slideLen * 3} duration={slideLen} text="Bespoke Concierge" sub="Every Detail Handled" />
      </Sequence>

      {/* Watermark */}
      <AbsoluteFill style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 32,
        pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: 13,
          color: 'rgba(201,168,76,0.6)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>Czech Inn Hotels</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
