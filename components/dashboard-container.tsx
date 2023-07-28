import type { NextPage } from "next";

const DashboardContainer: NextPage = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[2px] text-left text-11xl text-dark-color font-heebo">
      <b className="relative">Designing Dashboards</b>
      <div className="w-[185px] overflow-hidden flex flex-row items-center justify-start gap-[26px] text-lg text-white">
        <div className="flex-1 h-[60px] overflow-hidden flex flex-col pt-[18px] px-0 pb-[17px] box-border items-center justify-end">
          <div className="relative leading-[60px] font-black">2020</div>
          <div className="relative rounded-2xl bg-darkslateblue w-[62px] h-[25px] mt-[-42px]" />
        </div>
        <div className="flex-1 relative text-xl text-light">Dashboard</div>
      </div>
      <div className="self-stretch relative text-base">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
    </div>
  );
};

export default DashboardContainer;
