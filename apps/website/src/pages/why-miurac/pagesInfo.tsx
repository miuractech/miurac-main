import CheapCostImg from '../../assets/img/cheap cost.png';
import FastSetupImg from '../../assets/img/fast setup.png';
import ModernSoftwareImg from '../../assets/img/modern software.png';
import TailorFitImg from '../../assets/img/tailor fit.png';
import InternalToolImg from '../../assets/img/internal tool.png';
import CustomAppsImg from '../../assets/img/custom apps.png';

export const pagesInfo = [
  {
    id: 'Cheapest-cost',
    bgColor: '#FFE1D2',
    text: 'Cheapest cost you can find!',
    img: CheapCostImg,
    centerAlignText: false,
    captionText: <>We are the cheapest in the market. We can guarantee that.</>,
  },
  {
    id: 'Lightning-fast',
    bgColor: '#D3D8FF',
    text: 'Lightning fast setup ',
    img: FastSetupImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>We setup your business/startups in matter of weeks</div>
        <div>
          You need not have to wait several months to validate your idea.{' '}
        </div>
      </>
    ),
  },
  {
    id: 'modern-apps',
    bgColor: '#C4EDE7',
    text: 'Modern Apps and infrastructure.',
    img: ModernSoftwareImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          Industry leading tech stack that are used by tech giants like google,
          facebook, etc
        </div>
        <div>Miurac updates and maintains your apps upto date.</div>
      </>
    ),
  },
  {
    id: 'tailor-fit',
    bgColor: '#FFEDE8',
    text: 'Tailor fit branding',
    img: TailorFitImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          Get your own brand identity that help you to stand out of the crowd.
        </div>
        <div> Your idea is unique, so should your brand! </div>
      </>
    ),
  },
  {
    id: 'cit',
    bgColor: '#CADEF2',
    text: 'Complex Internal Tools made easy',
    img: InternalToolImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          We build anything from a simple user form, all the way to a rocket
          dashboard!
        </div>
        {/* <div>Let smart intelligent systems handle your repetitive tasks.</div> */}
      </>
    ),
  },
  {
    id: 'custom-apps',
    bgColor: '#D6E7E7',
    text: 'Custom Apps for your business',
    img: CustomAppsImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          Tailor-made apps for your business needs and customise your apps to
          reflect your brand identity.
        </div>
        {/* <div>Let smart intelligent systems handle your repetitive tasks.</div> */}
      </>
    ),
  },
];
