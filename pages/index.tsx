import type { NextPage } from "next";
import MobileHeaderIcon from "../components/mobile-header-icon";
import Footer from "../components/footer";

const WorkDetailMobile: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1637px] overflow-hidden text-left text-base text-dark-color font-heebo">
      <MobileHeaderIcon propTop="0px" propLeft="unset" propRight="0px" />
      <b className="absolute top-[82px] left-[18px] text-11xl leading-[40px] inline-block w-[339px]">
        Designing Dashboards with usability in mind
      </b>
      <Footer
        dimensionCode="/insta.svg"
        rectangleDivTop="unset"
        rectangleDivLeft="0px"
        rectangleDivWidth="375px"
        rectangleDivBottom="0px"
        linkedinIconLeft="calc(50% - 116.5px)"
        groupIconLeft="calc(50% + 85.5px)"
        instaIconLeft="calc(50% + 13.5px)"
        copyright2020AllLeft="calc(50% - 51.5px)"
        propLeft="20.28%"
      />
      <div className="absolute top-[261px] left-[18px] text-black inline-block w-[339px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <img
        className="absolute top-[380px] left-[18px] w-[339px] h-64 object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <img
        className="absolute top-[889px] left-[18px] w-[339px] h-64 object-cover"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <div className="absolute top-[769px] left-[18px] text-black inline-block w-[339px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <img
        className="absolute top-[1168px] left-[18px] w-[339px] h-[257px] object-cover"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <div className="absolute top-[185px] left-[18px] w-[339px] overflow-hidden flex flex-row pt-px px-0 pb-0 box-border items-start justify-start gap-[15px] text-lg text-white">
        <div className="flex-1 rounded-2xl bg-year overflow-hidden flex flex-col items-center justify-center">
          <div className="relative leading-[60px] font-black flex items-center w-[42px] h-[25px] shrink-0">
            2020
          </div>
        </div>
        <div className="flex-1 relative text-dark-color">
          Dashboard, User Experience Design
        </div>
      </div>
      <div className="absolute top-[659px] left-[18px] w-[119px] h-[105px] overflow-hidden flex flex-col items-start justify-start text-7xl">
        <div className="relative leading-[60px] font-medium">Heading 1</div>
        <div className="relative text-xl leading-[60px] font-medium mt-[-15px]">
          Heading 2
        </div>
      </div>
    </div>
  );
};

export default WorkDetailMobile;
