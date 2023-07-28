import type { NextPage } from "next";

const DashboardContainer1: NextPage = () => {
  return (
    <div className="relative w-[594px] h-[204px] overflow-hidden shrink-0 text-left text-11xl text-dark-color font-heebo">
      <b className="absolute top-[0px] left-[0px]">Designing Dashboards</b>
      <div className="absolute top-[111px] left-[0px] text-base inline-block w-[594px] h-[93px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="absolute top-[46px] left-[0px] w-[462px] h-[60px] overflow-hidden flex flex-row items-center justify-start gap-[26px] text-lg text-white">
        <div className="w-[62px] h-[60px] overflow-hidden shrink-0 flex flex-col pt-[18px] px-0 pb-[17px] box-border items-center justify-end">
          <div className="relative leading-[60px] font-black">2020</div>
          <div className="relative rounded-2xl bg-darkslateblue w-[62px] h-[25px] mt-[-42px]" />
        </div>
        <div className="relative text-xl text-light inline-block w-[374px] h-[34px] shrink-0">
          Dashboard
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer1;
