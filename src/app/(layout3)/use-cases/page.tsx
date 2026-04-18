import BreadCumb from "@/components/Common/BreadCumb";
import { useCaseDetailsDb } from "@/db/use-cases";
import UseCasesCatalog from "@/components/UseCases/UseCasesCatalog";
import ScrollReveal from "@/components/Common/ScrollReveal";

export default function UseCasesPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="Use Cases" />
      <section className="position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_60">
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
              <img src="/assets/img/icons/star-1.svg" alt="" />
              <span>Use Cases</span>
              <img src="/assets/img/icons/star-1.svg" alt="" />
            </div>
            <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
              our platform for Every Environmental Monitoring Scenario
            </h1>
            <p className="cs_card_desc cs_mt_22 mb-0">
              Whether you&apos;re a small independent micro lab or a large hospital pharmacy program, our platform adapts to your specific testing workflow.
            </p>
          </div>
          <ScrollReveal><UseCasesCatalog useCases={useCaseDetailsDb} /></ScrollReveal>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
}
