import DescriptionBox from "./DescriptionBox";
import { desc } from "../../data/descBoxData";

export default function DiscoverSection() {
  return (
    <section className="discover-section">
      <DescriptionBox {...desc.discover} />
    </section>
  );
}
