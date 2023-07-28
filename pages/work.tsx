import type { NextPage } from "next";
import Footer from "../components/footer";
import DashboardContainer from "../components/dashboard-container";

const Work: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1534px] overflow-hidden text-left text-11xl text-dark-color font-heebo">
      <div className="absolute top-[160px] left-[235px] text-25xl leading-[60px] font-black inline-block w-[156px] h-[69px]">
        Work
      </div>
      <img
        className="absolute top-[1022.5px] left-[235px] w-[682px] h-px"
        alt=""
        src="/vector-14.svg"
      />
      <img
        className="absolute top-[1293.5px] left-[235px] w-[682px] h-px"
        alt=""
        src="/vector-14.svg"
      />
      <Footer
        dimensionCode="/insta2.svg"
        rectangleDivTop="1352px"
        rectangleDivLeft="0px"
        rectangleDivWidth="1152px"
        rectangleDivBottom="unset"
        linkedinIconLeft="calc(50% - 117px)"
        groupIconLeft="calc(50% + 85px)"
        instaIconLeft="calc(50% + 13px)"
        copyright2020AllLeft="calc(50% - 52px)"
        propLeft="40.28%"
      />
      <img
        className="absolute top-[480.5px] left-[235px] w-[682px] h-px"
        alt=""
        src="/vector-81.svg"
      />
      <img
        className="absolute top-[751.5px] left-[235px] w-[682px] h-px"
        alt=""
        src="/vector-81.svg"
      />
      <div className="absolute top-[27px] left-[800px] w-[292px] overflow-hidden flex flex-row items-center justify-start text-right text-xl">
        <div className="flex-1 relative font-medium">Blog</div>
        <div className="flex-1 relative font-medium text-primary ml-[-13px]">
          Works
        </div>
        <div className="flex-1 relative font-medium ml-[-13px]">Contact</div>
      </div>
      <div className="absolute top-[243px] left-[235px] w-[682px] overflow-hidden flex flex-row items-center justify-start gap-[18px]">
        <img
          className="flex-1 relative rounded-md max-w-full overflow-hidden h-[180px] object-cover"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <DashboardContainer />
      </div>
      <div className="absolute top-[522px] left-[235px] w-[682px] overflow-hidden flex flex-row pt-0.5 px-0 pb-0 box-border items-start justify-start gap-[18px]">
        <img
          className="flex-1 relative rounded-md max-w-full overflow-hidden h-[180px] object-cover"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch relative h-[102px] overflow-hidden shrink-0">
            <b className="absolute top-[0px] left-[0px]">
              Vibrant Portraits of 2020
            </b>
            <div className="absolute top-[56px] left-[88px] text-xl text-light">
              Illustration
            </div>
            <div className="absolute top-[60px] left-[0px] rounded-2xl bg-darkslateblue w-[62px] h-[25px]" />
            <div className="absolute top-[42px] left-[10px] text-lg leading-[60px] font-black text-white">
              2018
            </div>
          </div>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
      <div className="absolute top-[787px] left-[235px] w-[682px] overflow-hidden flex flex-row items-center justify-start gap-[18px]">
        <img
          className="flex-1 relative rounded-md max-w-full overflow-hidden h-[184px] object-cover"
          alt=""
          src="/rectangle-34@2x.png"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[3px]">
          <div className="self-stretch relative h-[99px] overflow-hidden shrink-0">
            <b className="absolute top-[0px] left-[0px]">
              36 Days of Malayalam type
            </b>
            <div className="absolute top-[53px] left-[88px] text-xl text-light">
              Typography
            </div>
            <div className="absolute top-[57px] left-[0px] rounded-2xl bg-darkslateblue w-[62px] h-[25px]" />
            <div className="absolute top-[39px] left-[10px] text-lg leading-[60px] font-black text-white">
              2018
            </div>
          </div>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
      <div className="absolute top-[1054px] left-[235px] w-[682px] h-[190px] overflow-hidden flex flex-row items-center justify-start gap-[18px]">
        <img
          className="relative rounded-md w-[246px] h-[184px] object-cover"
          alt=""
          src="/rectangle-40@2x.png"
        />
        <div className="w-[418px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[3px]">
          <div className="relative w-[273px] h-[94px] overflow-hidden shrink-0">
            <b className="absolute top-[0px] left-[0px]">Components</b>
            <div className="absolute top-[48px] left-[88px] text-xl text-light">
              Components, Design
            </div>
            <div className="absolute top-[52px] left-[0px] rounded-2xl bg-darkslateblue w-[62px] h-[25px]" />
            <div className="absolute top-[34px] left-[10px] text-lg leading-[60px] font-black text-white">
              2018
            </div>
          </div>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
