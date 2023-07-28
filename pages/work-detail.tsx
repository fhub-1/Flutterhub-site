import type { NextPage } from "next";
import Footer from "../components/footer";

const WorkDetail: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[2283px] overflow-hidden text-left text-[34px] text-dark-color font-heebo">
      <img
        className="absolute top-[425px] left-[235px] w-[681px] h-[460px] object-cover"
        alt=""
        src="/rectangle-41@2x.png"
      />
      <img
        className="absolute top-[1127px] left-[235px] w-[681px] h-[460px] object-cover"
        alt=""
        src="/rectangle-51@2x.png"
      />
      <img
        className="absolute top-[1614px] left-[235px] w-[681px] h-[460px] object-cover"
        alt=""
        src="/rectangle-61@2x.png"
      />
      <b className="absolute top-[148px] left-[235px] inline-block w-[506px]">
        Designing Dashboards with usability in mind
      </b>
      <div className="absolute top-[335px] left-[235px] text-base text-black inline-block w-[681px] h-11">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <Footer
        dimensionCode="/insta2.svg"
        rectangleDivTop="2101px"
        rectangleDivLeft="0px"
        rectangleDivWidth="1152px"
        rectangleDivBottom="unset"
        linkedinIconLeft="calc(50% - 117px)"
        groupIconLeft="calc(50% + 85px)"
        instaIconLeft="calc(50% + 13px)"
        copyright2020AllLeft="calc(50% - 52px)"
        propLeft="40.28%"
      />
      <div className="absolute top-[27px] left-[800px] w-[292px] overflow-hidden flex flex-row items-center justify-start text-right text-xl">
        <div className="flex-1 relative font-medium">Blog</div>
        <div className="flex-1 relative font-medium text-primary ml-[-13px]">
          Works
        </div>
        <div className="flex-1 relative font-medium ml-[-13px]">Contact</div>
      </div>
      <div className="absolute top-[262px] left-[239px] w-[453px] overflow-hidden flex flex-row items-center justify-start gap-[17px] text-lg text-white">
        <div className="flex-1 h-[60px] overflow-hidden flex flex-col pt-[18px] px-0 pb-[17px] box-border items-center justify-end">
          <div className="relative leading-[60px] font-black">2020</div>
          <div className="relative rounded-2xl bg-year w-[62px] h-[25px] mt-[-42px]" />
        </div>
        <div className="flex-1 relative text-xl text-dark-color">
          Dashboard, User Experience Design
        </div>
      </div>
      <div className="absolute top-[939px] left-[239px] w-[677px] overflow-hidden flex flex-col items-start justify-start text-11xl">
        <div className="relative leading-[60px] font-medium inline-block w-[506px] h-[45px] shrink-0">
          Heading 1
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-5xl">
          <div className="self-stretch relative leading-[60px] font-medium">
            Heading 2
          </div>
          <div className="self-stretch relative text-base text-black mt-[-17px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
