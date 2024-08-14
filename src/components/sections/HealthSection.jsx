import DescriptionBox from "./DescriptionBox";
import { desc } from "../../data/descBoxData";
import { videoAttrs } from "../../data/videoAttrs";

export default function HealthSection() {
  return (
    <section className="home-section">
      <DescriptionBox {...desc.health} />
      <div className="section-video">
        <video {...videoAttrs.health}>
          <source
            src={videoAttrs.health.source.src}
            type={videoAttrs.health.source.type}
          />
        </video>
      </div>
    </section>
  );
}
