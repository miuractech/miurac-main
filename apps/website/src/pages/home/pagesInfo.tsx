import HeroImg from '../../assets/img/hero.svg';
import ITManagerImg from '../../assets/img/itManager.svg';
import GoogleSheetImg from '../../assets/img/googleSheet.svg';
import ScaleBusinessImg from '../../assets/img/scale.svg';
import PayingMoreImg from '../../assets/img/pay.svg';
import CheapCostImg from '../../assets/img/cheap cost.svg';
import FastSetupImg from '../../assets/img/fast setup.svg';
import ModernSoftwareImg from '../../assets/img/modern software.svg';
import TailorFitImg from '../../assets/img/tailor fit.svg';
import InternalToolImg from '../../assets/img/internal tool.svg';
import CustomAppsImg from '../../assets/img/custom apps.svg';

export const pagesInfo = [
  {
    id: 'home',
    bgColor: '#FBEDEA',
    text: 'From Garage to \n Ipo',
    img: HeroImg,
    centerAlignText: true,
    captionText: 'We transform your ideas into successful scalable Business.',
    cta: {
      onClick: () => void 0,
      link: ``,
      buttonText: "Let's start now",
    },
  },
  {
    id: 'it-manager',
    bgColor: '#FBEAF9',
    text: 'Life is too short for searching CTO',
    img: ITManagerImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          They are expensive, take a significant chunk of your equity too.
        </div>
        <div>Focus on business and let us take care of your tech</div>
      </>
    ),
   
  },
  {
    id: 'google-sheet',
    bgColor: '#DDEBFF',
    text: 'Don\'t spend time scrolling Google sheets?',
    img: GoogleSheetImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>
          Hard to find Data in a spreadsheet when it has hundreds of rows,
          multiple tabs.
        </div>
        <div>
          Let us build a simplified software that will do it in a blink.
        </div>
      </>
    ),
   
  },
  {
    id: 'scale-swiftly',
    bgColor: '#FFF0EB',
    text: 'Scale your business swiftly',
    img: ScaleBusinessImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>Be prepared for a huge traffic as you may go viral any time.</div>
        <div>
          Whether it&#39;s 100 users or 100,000,000 users, we will help you scale
          seamlessly
        </div>
      </>
    ),
    
  },
  // {
  //   id: 'paying-too-much',
  //   bgColor: '#E9E3DC',
  //   text: 'Paying too much for staffing?',
  //   img: PayingMoreImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       <div>Computers work 24/7, dont complain and don&#39;t make errors.</div>
  //       <div>Let smart intelligent systems handle your repetitive tasks.</div>
  //     </>
  //   ),
   
  // },
  // {
  //   id: 'Cheapest-cost',
  //   bgColor: '#F6F4F3',
  //   text: 'Cheapest cost you can find!',
  //   img: CheapCostImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       We are the cheapest in the market. We can guarantee that.
  //     </>
  //   ),
   
  // },
  // {
  //   id: 'Lightning-fast',
  //   bgColor: '#D3D8FF',
  //   text: 'Lightning fast setup ',
  //   img: FastSetupImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       <div>We setup your business/startups in matter of weeks</div>
  //       <div>You need not have to wait several months to validate your idea. </div>
  //     </>
  //   ),
   
  // },
  // {
  //   id: 'modern-apps',
  //   bgColor: '#C4EDE7',
  //   text: 'Modern Apps and infrastructure.',
  //   img: ModernSoftwareImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       <div>Industry leading tech stack that are used by tech giants like google, facebook, etc</div>
  //       <div>Miurac updates and maintains your apps upto date.</div>
  //     </>
  //   ),
   
  // },
  // {
  //   id: 'tailor-fit',
  //   bgColor: '#FFEDE8',
  //   text: 'Tailor fit branding',
  //   img: TailorFitImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       <div>Get your own brand identity that help you to stand out of the crowd.</div>
  //       <div> Your idea is unique, so should your brand! </div>
  //     </>
  //   ),
   
  // },
  // {
  //   id: 'cit',
  //   bgColor: '#CADEF2',
  //   text: 'Complex Internal Tools made easy',
  //   img: InternalToolImg,
  //   centerAlignText: false,
  //   captionText: (
  //     <>
  //       <div>We build anything from a simple user form, all the way to a rocket dashboard!</div>
  //       {/* <div>Let smart intelligent systems handle your repetitive tasks.</div> */}
  //     </>
  //   ),
   
  // },

  
];
