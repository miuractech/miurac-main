import { Center } from '@mantine/core';
import LazyImage from 'libs/resources/src/lib/LazyImage';
type Props = {
  bgColor: string;
  id: string;
  text: string;
  heroImage: string;
  centerAlignText?: boolean;
};

export default function TemplatePage({ bgColor, id, text, heroImage, centerAlignText }: Props) {
  return (
    <div
      id={id}
      className="w-full h-screen template-shadow"
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-16" />
      <div className="grid h-full grid-cols-2">
        <div className={`flex flex-col w-full h-full ${centerAlignText?'justify-center':"justify-around"}`}>
          <div className="roie ml-20 text-6xl leading-relaxed">{text}</div>
          <div className="roie ml-20 text-md">{text}</div>
        </div>
        <Center className="h-full m-0">
          <LazyImage
            imageProps={{ src: heroImage, className: 'w-full' }}
            alt={'hero'}
          />
        </Center>
      </div>
    </div>
  );
}
