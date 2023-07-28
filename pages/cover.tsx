import type { NextPage } from "next";

const Cover: NextPage = () => {
  return (
    <div className="relative bg-palevioletred w-full h-[900px] overflow-hidden text-left text-[93px] text-white font-circular-std">
      <img
        className="absolute top-[55px] left-[926px] w-6 h-[843px]"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="absolute top-[55px] left-[71px] w-[855px] h-[1603px] object-cover"
        alt=""
        src="/home-1@2x.png"
      />
      <img
        className="absolute top-[372px] left-[992px] w-[375px] h-[2165px] object-cover"
        alt=""
        src="/home--mobile-1@2x.png"
      />
      <img
        className="absolute top-[372px] left-[1367px] w-[23.5px] h-[758.5px]"
        alt=""
        src="/vector-20.svg"
      />
      <b className="absolute top-[44px] left-[994px] inline-block w-[396px]">{`Personal Portfolio `}</b>
      <div className="absolute top-[293px] left-[1000px] text-[43px]">
        Template
      </div>
    </div>
  );
};

export default Cover;
