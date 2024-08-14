import DescriptionBox from "./DescriptionBox";
import { desc } from "../../data/descBoxData";
import { videoAttrs } from "../../data/videoAttrs";

export default function SaveSection() {
  return (
    <section className="home-section">
      <div className="section-video">
        <video {...videoAttrs.save}>
          <source
            src={videoAttrs.save.source.src}
            type={videoAttrs.save.source.type}
          />
        </video>
      </div>
      <DescriptionBox {...desc.save} />
    </section>
  );
}
