import SaveSection from "./SaveSection";
import DiscoverSection from "./DiscoverSection";
import PlanSection from "./PlanSection";
import ShoppingSection from "./ShoppingSection";
import HealthSection from "./HealthSection";
import LovedGlobally from "./LovedGlobally";
import Testimonials from "./Testimonials";
import AwardWinning from "./AwardWinning";
export default function MainSectons() {
  return (
    <main className="home-sections-container">
      <SaveSection />
      <DiscoverSection />
      <PlanSection />
      <ShoppingSection />
      <HealthSection />
      <LovedGlobally />
      <Testimonials />
      <AwardWinning />
    </main>
  );
}
