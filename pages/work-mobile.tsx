import type { NextPage } from "next";
import MobileHeaderIcon from "../components/mobile-header-icon";
import Footer from "../components/footer";
import WorkListMobile from "../components/work-list-mobile";

const WorkMobile: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1261px] overflow-hidden text-left text-11xl text-dark-color font-heebo">
      <MobileHeaderIcon propTop="0px" propLeft="unset" propRight="0px" />
      <b className="absolute top-[74px] left-[18px] leading-[60px]">Work</b>
      <Footer
        dimensionCode="/insta4.svg"
        rectangleDivTop="1079px"
        rectangleDivLeft="0px"
        rectangleDivWidth="375px"
        rectangleDivBottom="unset"
        linkedinIconLeft="calc(50% - 116.5px)"
        groupIconLeft="calc(50% + 85.5px)"
        instaIconLeft="calc(50% + 13.5px)"
        copyright2020AllLeft="calc(50% - 51.5px)"
        propLeft="20.28%"
      />
      <WorkListMobile
        dashboardImageId="/rectangle-30@2x.png"
        dashboardTitle="Designing Dashboards"
        dashboardThumbnailUrl="Dashboard"
        propTop="147px"
        propLeft="18px"
      />
      <WorkListMobile
        dashboardImageId="/rectangle-303@2x.png"
        dashboardTitle="Designing Landing pages"
        dashboardThumbnailUrl="Website"
        propTop="624px"
        propLeft="18px"
      />
    </div>
  );
};

export default WorkMobile;
