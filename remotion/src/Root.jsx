import { Composition } from 'remotion';
import { GoldLabelPromo } from './GoldLabelPromo';
import { CorporateROI } from './CorporateROI';
import { PartnershipTimeline } from './PartnershipTimeline';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="GoldLabelPromo"
        component={GoldLabelPromo}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CorporateROI"
        component={CorporateROI}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PartnershipTimeline"
        component={PartnershipTimeline}
        durationInFrames={390}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
