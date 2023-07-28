import type { NextPage } from "next";

const DesignSystemContainer1: NextPage = () => {
  return (
    <div className="absolute top-[666px] left-[0px] bg-aliceblue w-[375px] overflow-hidden flex flex-col pt-px pb-[38px] pr-2.5 pl-[11px] box-border items-start justify-end gap-[17px] text-left text-base text-dark-color font-heebo">
      <div className="self-stretch relative h-[325px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[124px] text-lg leading-[60px]">
          Recent posts
        </div>
        <div className="absolute top-[59px] left-[0px] rounded bg-white shadow-[0px_4px_10px_rgba(187,_225,_250,_0.25)] w-[354px] h-[266px]" />
        <b className="absolute top-[71px] left-[19px] text-3xl leading-[30px] inline-block w-[327px]">
          Making a design system from scratch
        </b>
        <div className="absolute top-[143px] left-[156px]">Design, Pattern</div>
        <img
          className="absolute top-[144px] left-[131.5px] w-px h-[21px]"
          alt=""
          src="/vector-1.svg"
        />
        <div className="absolute top-[143px] left-[19px]">12 Feb 2020</div>
        <div className="absolute top-[186px] left-[19px] inline-block w-[314px] h-[117px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className="self-stretch relative rounded bg-white shadow-[0px_4px_10px_rgba(187,_225,_250,_0.25)] h-[266px] overflow-hidden shrink-0">
        <b className="absolute top-[12px] left-[19px] text-3xl leading-[30px] inline-block w-[327px]">
          Creating pixel perfect icons in Figma
        </b>
        <div className="absolute top-[127px] left-[19px] inline-block w-[314px] h-[117px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="absolute top-[84px] left-[19px] w-[246px] overflow-hidden flex flex-row items-center justify-start gap-[24px]">
          <div className="flex-1 relative">12 Feb 2020</div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[21px]"
            alt=""
            src="/vector-2.svg"
          />
          <div className="flex-1 relative">Design, Pattern</div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemContainer1;
