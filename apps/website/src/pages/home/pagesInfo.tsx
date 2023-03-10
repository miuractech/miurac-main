import HeroImg from '../../assets/img/internal tool.png';
import ITManagerImg from '../../assets/img/itManager.png';
import GoogleSheetImg from '../../assets/img/googleSheet.png';
import ScaleBusinessImg from '../../assets/img/scale.png';
import PayingMoreImg from '../../assets/img/pay.png';

export const pagesInfo: pageInfo[] = [
  {
    id: 'home',
    bgColor: '#cbd9ff',
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
    text: "Don't waste time scrolling Google sheets?",
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
          Whether it&#39;s 100 users or 100,000,000 users, we will help you
          scale seamlessly
        </div>
      </>
    ),
  },
  {
    id: 'paying-too-much',
    bgColor: '#E9E3DC',
    text: 'Paying too much for staffing?',
    img: PayingMoreImg,
    centerAlignText: false,
    captionText: (
      <>
        <div>Computers work 24/7, dont complain and don&#39;t make errors.</div>
        <div>Let smart intelligent systems handle your repetitive tasks.</div>
      </>
    ),
  },
];

type pageInfo = {
  id: string;
  bgColor: string;
  text: string;
  img: string;
  centerAlignText: boolean;
  captionText: React.ReactNode | JSX.Element;
  cta?: {
    onClick: () => undefined;
    link: string;
    buttonText: string;
  };
};
