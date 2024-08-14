import DescriptionBox from "./DescriptionBox";
import { desc } from "../../data/descBoxData";
import { videoAttrs } from "../../data/videoAttrs";

export default function PlanSection() {
  return (
    <section className="home-section">
      <DescriptionBox {...desc.plan} />
      <div className="section-video">
        <video {...videoAttrs.plan}>
          <source
            src={videoAttrs.plan.source.src}
            type={videoAttrs.plan.source.type}
          />
        </video>
      </div>
    </section>
  );
}
