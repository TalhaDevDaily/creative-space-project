import Image from "next/image";
import React from "react";
import cta from "../../../public/cta.png";

const CTA = () => {
  return (
    <div className="container">
      <Image src={cta} alt="cta image" className="w-full" />
    </div>
  );
};

export default CTA;
