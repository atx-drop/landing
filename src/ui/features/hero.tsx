import Image from 'next/image';

import { Background } from '../layouts/background';

const Hero = () => (
  <Background color="bg-sky-100">
    <div className="divide-y-4 divide-black">
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        {/* <Image
        className="absolute animate-spin hidden lg:block mb-20"
        src="/assets/images/circle-spinner.png"
        alt="Spinner"
        height="800"
        width="800"
      /> */}
        <Image
          className="z-10 mb-36"
          src="/assets/images/temp-logo.png"
          alt="ATX Drop Logo"
          height="300"
          width="300"
        />
      </div>

      <div className="absolute flex flex-col gap-2 bottom-2 text-center justify-center items-center w-full mx-auto pt-12">
        <span className="font-semibold text-lg">ATX Drop LLC</span>
        <span className="text-sm">
          1999 Bryan Street, Suite 900
          <br /> Dallas, Texas 75201
        </span>
        <span className="text-sm">legal@atxdrop.live</span>
        <span className="text-sm">+1-737-279-4408</span>
      </div>
    </div>
  </Background>
);

export { Hero };
