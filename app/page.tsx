import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Shop from "@/components/Shop";
import Visit from "@/components/Visit";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Shop />
      <Reviews />
      <Visit />
    </>
  );
}
