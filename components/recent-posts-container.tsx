import type { NextPage } from "next";
import DesignSystemContainer from "./design-system-container";

const RecentPostsContainer: NextPage = () => {
  return (
    <div className="absolute top-[595px] left-[0px] bg-aliceblue w-[1152px] overflow-hidden flex flex-col pt-[7px] px-[148px] pb-8 box-border items-start justify-end gap-[2px] text-left text-3xl text-dark-color font-heebo">
      <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[519px]">
        <div className="relative leading-[60px]">Recent posts</div>
        <div className="relative text-base text-secondry text-right inline-block w-52 h-5 shrink-0">
          View all
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[20px] text-7xl">
        <DesignSystemContainer
          articleTitle="Making a design system from scratch"
          designTopics="Design, Pattern"
        />
        <DesignSystemContainer
          articleTitle="Creating pixel perfect icons in Figma"
          designTopics="Figma, Icon Design"
          propBoxShadow="unset"
        />
      </div>
    </div>
  );
};

export default RecentPostsContainer;
