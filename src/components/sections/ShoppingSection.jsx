import DescriptionBox from "./DescriptionBox";
import { desc } from "../../data/descBoxData";
import { videoAttrs } from "../../data/videoAttrs";

export default function ShoppingSection() {
  return (
    <section className="home-section">
      <div className="section-video">
        <video {...videoAttrs.shoppingTime}>
          <source
            src={videoAttrs.shoppingTime.source.src}
            type={videoAttrs.shoppingTime.source.type}
          />
        </video>
      </div>
      <DescriptionBox {...desc.shoppingTime} />
    </section>
  );
}
