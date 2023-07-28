import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type DesignSystemContainerType = {
  articleTitle?: string;
  designTopics?: string;

  /** Style props */
  propBoxShadow?: Property.BoxShadow;
};

const DesignSystemContainer: NextPage<DesignSystemContainerType> = ({
  articleTitle,
  designTopics,
  propBoxShadow,
}) => {
  const frameStyle: CSS.Properties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div
      className="flex-1 relative rounded bg-white shadow-[0px_4px_10px_rgba(187,_225,_250,_0.25)] h-[295px] overflow-hidden text-left text-7xl text-dark-color font-heebo"
      style={frameStyle}
    >
      <b className="absolute top-[24px] left-[23px] inline-block w-[374px] h-[85px]">
        {articleTitle}
      </b>
      <div className="absolute top-[171px] left-[23px] text-base inline-block w-[368px] h-[117px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="absolute top-[126px] left-[23px] w-[395px] h-[34px] overflow-hidden text-lg">
        <div className="absolute top-[0px] left-[156px] inline-block w-[239px] h-[34px]">
          {designTopics}
        </div>
        <img
          className="absolute top-[3px] left-[129.5px] w-px h-[21px]"
          alt=""
          src="/vector-1.svg"
        />
        <div className="absolute top-[0px] left-[0px] inline-block w-[374px] h-[34px]">
          12 Feb 2020
        </div>
      </div>
    </div>
  );
};

export default DesignSystemContainer;
