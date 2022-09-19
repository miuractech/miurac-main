// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Container, FileButton, Grid } from '@mantine/core';
import man from './man.png';
import woman from './woman.png';
import designText from './designText.svg';
import { useState } from 'react';
import { IconUpload } from '@tabler/icons';
import Topbar from '../components/topbar';
import FooterComponent from '../components/footer/footer';
const mockups = [
  { img: man, position: { x: 190, y: 310, rotate: 5 } },
  { img: woman, position: { x: 210, y: 310, rotate: -5 } },
];
export function App() {
  const [uploaded, setUploaded] = useState<string>(designText);
  const removeWhiteBg = (imgUrl: string) => {
    const canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      image = document.createElement('img');
    image.onload = async () => {
      if (ctx) {
        canvas.height = image.height;
        canvas.width = image.width;
        ctx.drawImage(image, 0, 0);

        const imgd = ctx.getImageData(0, 0, image.width, image.height),
          pix = imgd.data,
          newColor = { r: 0, g: 0, b: 0, a: 0 };

        for (let i = 0, n = pix.length; i < n; i += 4) {
          const r = pix[i],
            g = pix[i + 1],
            b = pix[i + 2];

          // If its white then change it
          if (r > 250 && g > 250 && b > 250) {
            // Change the white to whatever.
            pix[i] = newColor.r;
            pix[i + 1] = newColor.g;
            pix[i + 2] = newColor.b;
            pix[i + 3] = newColor.a;
          }
        }

        ctx.putImageData(imgd, 0, 0);
        setUploaded(canvas.toDataURL());
      }
    };
    image.src = imgUrl;
  };
  return (
      <>
    <Topbar >
          <Container fluid >
            <div className='text-center' >
              <FileButton
                onChange={(e) => {
                  if (e) removeWhiteBg(URL.createObjectURL(e));
                }}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button leftIcon={<IconUpload />} {...props}>
                    Upload image
                  </Button>
                )}
              </FileButton>
            </div>
            <div className='flex gap-3 flex-wrap justify-center'>
              {mockups.map((i) => (
                <div >
                  <div className="relative h-[560px] w-[435px] m-auto">
                    <div className="absolute">
                      <img
                        className="block w-full h-full m-3"
                        src={i.img}
                        alt="mockup"
                      />
                    </div>
                    <div
                      className="absolute flex items-center"
                      style={{
                        top: i.position.y,
                        left: i.position.x,
                        width: 120,
                        height: 120,
                        transform: `rotate(${i.position.rotate}deg)`,
                      }}
                    >
                      <img
                        className="block max-w-[120px] max-h-[120px]"
                        src={uploaded}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
    </Topbar>
          <FooterComponent />
      </>
  );
}

export default App;
