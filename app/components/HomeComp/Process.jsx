import React from "react";
import { ProcessCard } from "../Common/ProcessCard";
import { BsClipboardCheck } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";
import { MdConstruction } from "react-icons/md";

const Process = () => {
  return (
    <section className="py-[100px] bg-[#F9FAFB]">
      <div className="container">
        <h2 className="text-[48px] font-bold text-center mb-3">Our Process</h2>
        <p className="text-[18px] text-center mb-[80px]">
          A streamlined approach to delivering exceptional results
        </p>

        <div className="flex justify-between">
          <ProcessCard
            numbering={"01"}
            cardIcon={<BsClipboardCheck className="text-[#2E7D32]" />}
            title={"Planning"}
            paragraph={
              "Initial consultation, site assessment, and project scope definition."
            }
          />
          <ProcessCard
            numbering={"02"}
            cardIcon={<LuLightbulb className="text-[#2E7D32]" />}
            title={"Design"}
            paragraph={
              "Architectural plans, engineering drawings, and material selection."
            }
          />
          <ProcessCard
            numbering={"03"}
            cardIcon={<MdConstruction className="text-[#2E7D32]" />}
            title={"Construction"}
            paragraph={
              "Skilled execution with quality control and regular progress updates."
            }
          />
          <ProcessCard
            numbering={"04"}
            cardIcon={<MdConstruction className="text-[#2E7D32]" />}
            title={"Handover"}
            paragraph={
              "Final inspection, documentation, and project delivery to client."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
