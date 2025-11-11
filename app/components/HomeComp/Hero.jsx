import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import sectionImg from "../../../public/sectionImg.png";
import containerImg from "../../../public/Container.png";

const Hero = () => {
  return (
    <section>
      <div
        className="sectionTitle h-[607px] w-full bg-center bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${sectionImg.src})` }}
      >
        {/* <div className="textBox text-white flex justify-center items-center flex-col gap-3 mt-[248px] mb-[176px]">
          <h2 className="font-bold text-[48px] z-20">
            Our Expertise, Your Vision
          </h2>
          <p className="text-[18px] leading-[150%] w-[615px] text-center z-20">
            From design to delivery, we offer complete construction services
            that meet modern standards and sustainability goals.
          </p>
        </div>
        <div className="w-full h-[469px] absolute top-0 left-0 bg-[rgba(0,0,0,0.3)]"></div> */}
        <Image src={containerImg} height={469} className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
