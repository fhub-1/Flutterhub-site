import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import RecentPostsContainer from "../components/recent-posts-container";
import DashboardContainer1 from "../components/dashboard-container1";

const Home: NextPage = () => {
  const router = useRouter();

  const onHomeContainerClick = useCallback(() => {
    router.push("/blog");
  }, [router]);

  return (
    <div
      className="relative bg-white w-full h-[2041px] overflow-hidden cursor-pointer text-left text-11xl text-dark-color font-heebo"
      onClick={onHomeContainerClick}
    >
      <div className="absolute top-[1006px] left-[148px] text-3xl leading-[60px]">
        Featured works
      </div>
      <Footer
        dimensionCode="/insta2.svg"
        rectangleDivTop="1859px"
        rectangleDivLeft="0px"
        rectangleDivWidth="1152px"
        rectangleDivBottom="unset"
        linkedinIconLeft="calc(50% - 117px)"
        groupIconLeft="calc(50% + 85px)"
        instaIconLeft="calc(50% + 13px)"
        copyright2020AllLeft="calc(50% - 52px)"
        propLeft="40.28%"
      />
      <img
        className="absolute top-[1282.5px] left-[146px] w-[858px] h-px"
        alt=""
        src="/vector-82.svg"
      />
      <img
        className="absolute top-[1528.5px] left-[146px] w-[858px] h-px"
        alt=""
        src="/vector-82.svg"
      />
      <img
        className="absolute top-[1775.5px] left-[146px] w-[858px] h-px"
        alt=""
        src="/vector-82.svg"
      />
      <div className="absolute top-[27px] left-[856px] w-[236px] h-[43px] overflow-hidden flex flex-row items-center justify-start gap-[33px] text-right text-xl text-black sm:hidden">
        <div className="w-[132px] h-[43px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
          <div className="relative font-medium inline-block w-[57px] h-[43px] shrink-0">
            Works
          </div>
          <div className="relative font-medium inline-block w-[106px] h-[43px] shrink-0 ml-[-31px]">
            Blog
          </div>
        </div>
        <div className="relative font-medium inline-block w-[71px] h-[43px] shrink-0">
          Contact
        </div>
      </div>
      <Button
        className="absolute top-[477px] left-[148px]"
        variant="solid"
        w="208px"
        colorScheme="teal"
        rightIcon={<ArrowForwardIcon />}
        as="a"
        href="https://drive.google.com/file/d/1kIsxBNvHlgYpxAGL8Cmw77BH9_hH_oqV/view?usp=sharing"
        target="_blank"
      >
        Download Resume
      </Button>
      <RecentPostsContainer />
      <div className="absolute top-[1077px] left-[146px] w-[858px] h-[204px] overflow-hidden flex flex-row items-center justify-start gap-[18px]">
        <img
          className="relative rounded-md w-[246px] h-[180px] object-cover"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <DashboardContainer1 />
      </div>
      <div className="absolute top-[1312px] left-[146px] w-[858px] h-[200px] overflow-hidden flex flex-row pt-0.5 px-0 pb-0 box-border items-start justify-start gap-[18px]">
        <img
          className="relative rounded-md w-[246px] h-[180px] object-cover"
          alt=""
          src="/rectangle-321@2x.png"
        />
        <div className="w-[594px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5px]">
          <div className="relative w-[462px] h-[102px] overflow-hidden shrink-0">
            <b className="absolute top-[0px] left-[0px]">
              Vibrant Portraits of 2020
            </b>
            <div className="absolute top-[56px] left-[88px] text-xl text-light inline-block w-[374px] h-[34px]">
              Illustration
            </div>
            <div className="absolute top-[60px] left-[0px] rounded-2xl bg-darkslateblue w-[62px] h-[25px]" />
            <div className="absolute top-[42px] left-[10px] text-lg leading-[60px] font-black text-white">
              2018
            </div>
          </div>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
      <div className="absolute top-[1560px] left-[146px] w-[774px] h-[212px] overflow-hidden flex flex-row items-start justify-start gap-[18px]">
        <img
          className="relative rounded-md w-[246px] h-[184px] object-cover"
          alt=""
          src="/rectangle-341@2x.png"
        />
        <div className="w-[510px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative h-[99px] overflow-hidden shrink-0">
            <b className="absolute top-[0px] left-[0px]">
              36 Days of Malayalam type
            </b>
            <div className="absolute top-[53px] left-[88px] text-xl text-light inline-block w-[374px] h-[34px]">
              Typography
            </div>
            <div className="absolute top-[57px] left-[0px] rounded-2xl bg-darkslateblue w-[62px] h-[25px]" />
            <div className="absolute top-[39px] left-[10px] text-lg leading-[60px] font-black text-white">
              2018
            </div>
          </div>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
      </div>
      <div className="absolute top-[217px] left-[171px] overflow-hidden flex flex-col items-start justify-start text-25xl">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center gap-[40px]">
          <b className="self-stretch relative leading-[60px]">
            <p className="m-0">Hi, I am John,</p>
            <p className="m-0">Creative Technologist</p>
          </b>
          <div className="self-stretch relative text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
        </div>
        <img
          className="relative w-[248px] h-64 overflow-hidden shrink-0 mt-[-238px]"
          alt=""
          src="/frame.svg"
        />
      </div>
    </div>
  );
};

export default Home;
