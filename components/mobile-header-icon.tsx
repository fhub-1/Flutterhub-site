import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type MobileHeaderIconType = {
  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propRight?: Property.Right;
};

const MobileHeaderIcon: NextPage<MobileHeaderIconType> = ({
  propTop,
  propLeft,
  propRight,
}) => {
  const mobileHeaderIconStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      right: propRight,
    };
  }, [propTop, propLeft, propRight]);

  return (
    <img
      className="absolute top-[407px] left-[96px] w-[375px] h-[50px] overflow-hidden"
      alt=""
      src="/mobileheader.svg"
      style={mobileHeaderIconStyle}
    />
  );
};

export default MobileHeaderIcon;
