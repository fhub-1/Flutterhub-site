import type { NextPage } from "next";
import MobileHeaderIcon from "../components/mobile-header-icon";
import BlogListMobile from "../components/blog-list-mobile";
import Footer from "../components/footer";

const BlogMobile: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1261px] overflow-hidden text-left text-11xl text-dark-color font-heebo">
      <MobileHeaderIcon propTop="0px" propLeft="unset" propRight="0px" />
      <b className="absolute top-[74px] left-[18px] leading-[60px]">Blog</b>
      <BlogListMobile propTop="152px" propLeft="18px" />
      <BlogListMobile propTop="374px" propLeft="18px" />
      <BlogListMobile propTop="596px" propLeft="18px" />
      <BlogListMobile propTop="818px" propLeft="18px" />
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
    </div>
  );
};

export default BlogMobile;
