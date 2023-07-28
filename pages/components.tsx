import type { NextPage } from "next";
import Footer from "../components/footer";
import MobileHeaderIcon from "../components/mobile-header-icon";
import BlogListMobile from "../components/blog-list-mobile";
import WorkListMobile from "../components/work-list-mobile";

const Components: NextPage = () => {
  return (
    <div className="relative bg-moccasin w-full h-[1262px] overflow-hidden">
      <Footer dimensionCode="/insta5.svg" />
      <MobileHeaderIcon />
      <BlogListMobile />
      <WorkListMobile
        dashboardImageId="/rectangle-30@2x.png"
        dashboardTitle="Designing Dashboards"
        dashboardThumbnailUrl="Dashboard"
      />
    </div>
  );
};

export default Components;
