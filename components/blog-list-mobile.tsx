import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type BlogListMobileType = {
  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const BlogListMobile: NextPage<BlogListMobileType> = ({
  propTop,
  propLeft,
}) => {
  const blogListMobileStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[547px] left-[96px] w-[339px] h-[204px] text-left text-base text-dark-color font-heebo"
      style={blogListMobileStyle}
    >
      <div className="absolute top-[0%] left-[0%] text-7xl font-medium">
        UI Interactions of the week
      </div>
      <div className="absolute top-[21.08%] left-[34.81%] text-light">
        Express, Handlebars
      </div>
      <img
        className="absolute h-[6.37%] w-[0.29%] top-[23.04%] right-[69.47%] bottom-[70.59%] left-[30.24%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-11.svg"
      />
      <div className="absolute top-[21.08%] left-[0%]">12 Feb 2019</div>
      <div className="absolute w-full top-[41.18%] left-[0%] inline-block">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <img
        className="absolute h-[0.49%] w-full top-[99.75%] right-[0%] bottom-[-0.25%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-22.svg"
      />
    </div>
  );
};

export default BlogListMobile;
