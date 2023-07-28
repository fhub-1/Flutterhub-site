import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterType = {
  dimensionCode?: string;

  /** Style props */
  rectangleDivTop?: Property.Top;
  rectangleDivLeft?: Property.Left;
  rectangleDivWidth?: Property.Width;
  rectangleDivBottom?: Property.Bottom;
  linkedinIconLeft?: Property.Left;
  groupIconLeft?: Property.Left;
  instaIconLeft?: Property.Left;
  copyright2020AllLeft?: Property.Left;
  propLeft?: Property.Left;
};

const Footer: NextPage<FooterType> = ({
  dimensionCode,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivBottom,
  linkedinIconLeft,
  groupIconLeft,
  instaIconLeft,
  copyright2020AllLeft,
  propLeft,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      bottom: rectangleDivBottom,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivBottom,
  ]);

  const fbIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: linkedinIconLeft,
    };
  }, [linkedinIconLeft]);

  const linkedinIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: groupIconLeft,
    };
  }, [groupIconLeft]);

  const groupIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: instaIconLeft,
    };
  }, [instaIconLeft]);

  const instaIconStyle: CSS.Properties = useMemo(() => {
    return {
      left: copyright2020AllLeft,
    };
  }, [copyright2020AllLeft]);

  const copyright2020AllStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[135px] left-[96px] w-[1152px] h-[182px] text-center text-sm text-dark-color font-heebo"
      style={footerStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <img
        className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_117px)] w-[30px] h-[30px]"
        alt=""
        src="/fb.svg"
        style={fbIconStyle}
      />
      <img
        className="absolute top-[calc(50%_-_40px)] left-[calc(50%_+_85px)] w-[30px] h-[30px]"
        alt=""
        src="/linkedin.svg"
        style={linkedinIconStyle}
      />
      <img
        className="absolute top-[calc(50%_-_40px)] left-[calc(50%_+_13px)] w-[36.92px] h-[30px]"
        alt=""
        src="/group.svg"
        style={groupIconStyle}
      />
      <img
        className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_52px)] w-[30px] h-[30px]"
        alt=""
        src={dimensionCode}
        style={instaIconStyle}
      />
      <div
        className="absolute top-[calc(50%_+_16px)] left-[40.28%]"
        style={copyright2020AllStyle}
      >{`Copyright ©2020 All rights reserved `}</div>
    </div>
  );
};

export default Footer;
