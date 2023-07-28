import type { NextPage } from "next";
import WorkListMobile from "../components/work-list-mobile";
import Footer from "../components/footer";
import MobileHeaderIcon from "../components/mobile-header-icon";
import Frame from "../components/frame";

const HomeMobile: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[2165px] overflow-hidden text-center text-[32px] text-dark-color font-heebo">
      <img
        className="absolute top-[83px] left-[97px] w-[174.38px] h-[180px]"
        alt=""
        src="/group-1.svg"
      />
      <b className="absolute top-[297px] left-[32px] leading-[40px] inline-block w-[312px]">
        <p className="m-0">Hi, I am John,</p>
        <p className="m-0">Creative Technologist</p>
      </b>
      <div className="absolute top-[438px] left-[24px] text-base inline-block w-[328px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="absolute top-[561px] left-[84px] rounded-sm bg-primary w-52 flex flex-col py-[9px] px-5 box-border items-start justify-start text-left text-xl text-white">
        <div className="self-stretch relative font-medium">Download Resume</div>
      </div>
      <div className="absolute top-[1316px] left-[126px] text-lg leading-[60px] text-left">
        Featured works
      </div>
      <WorkListMobile
        dashboardImageId="/rectangle-30@2x.png"
        dashboardTitle="Designing Dashboards"
        dashboardThumbnailUrl="Dashboard"
        propTop="1378px"
        propLeft="18px"
      />
      <Footer
        dimensionCode="/insta1.svg"
        rectangleDivTop="1983px"
        rectangleDivLeft="0px"
        rectangleDivWidth="375px"
        rectangleDivBottom="unset"
        linkedinIconLeft="calc(50% - 116.5px)"
        groupIconLeft="calc(50% + 85.5px)"
        instaIconLeft="calc(50% + 13.5px)"
        copyright2020AllLeft="calc(50% - 51.5px)"
        propLeft="20.28%"
      />
      <MobileHeaderIcon propTop="0px" propLeft="0px" propRight="unset" />
      <Frame />
    </div>
  );
};

export default HomeMobile;
