import SaveSection from "./SaveSection";
import DiscoverSection from "./DiscoverSection";
import PlanSection from "./PlanSection";
import ShoppingSection from "./ShoppingSection";
import HealthSection from "./HealthSection";

export default function MainSectons() {
  return (
    <main className="home-sections-container">
      <SaveSection />
      <DiscoverSection />
      <PlanSection />
      <ShoppingSection />
      <HealthSection />
    </main>
  );
}
