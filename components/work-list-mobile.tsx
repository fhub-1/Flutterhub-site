import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type WorkListMobileType = {
  dashboardImageId?: string;
  dashboardTitle?: string;
  dashboardThumbnailUrl?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const WorkListMobile: NextPage<WorkListMobileType> = ({
  dashboardImageId,
  dashboardTitle,
  dashboardThumbnailUrl,
  propTop,
  propLeft,
}) => {
  const workListMobileStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[407px] left-[560px] w-[344px] h-[455px] text-left text-base text-dark-color font-heebo"
      style={workListMobileStyle}
    >
      <img
        className="absolute h-[50.55%] w-[98.55%] top-[0%] right-[1.45%] bottom-[49.45%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={dashboardImageId}
      />
      <b className="absolute top-[54.29%] left-[0%] text-5xl leading-[30px]">
        {dashboardTitle}
      </b>
      <div className="absolute top-[64.4%] left-[24.42%] text-light">
        {dashboardThumbnailUrl}
      </div>
      <div className="absolute h-[5.49%] w-[18.02%] top-[64.4%] right-[81.98%] bottom-[30.11%] left-[0%] text-center text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-darkslateblue" />
        <div className="absolute h-full w-[61.29%] top-[0%] left-[19.35%] leading-[60px] font-black flex items-center justify-center">
          2020
        </div>
      </div>
      <div className="absolute w-full top-[75.16%] left-[0%] inline-block">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <img
        className="absolute h-[0.22%] w-[98.55%] top-[99.89%] right-[1.45%] bottom-[-0.11%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-8.svg"
      />
    </div>
  );
};

export default WorkListMobile;
