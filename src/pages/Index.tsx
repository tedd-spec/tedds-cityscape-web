
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import MallHighlights from "../components/MallHighlights";
import EventsSection from "../components/EventsSection";
import MallMap from "../components/MallMap";
import HoursAndLocation from "../components/HoursAndLocation";
import NewsletterForm from "../components/NewsletterForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <MallHighlights />
      <EventsSection />
      <MallMap />
      <HoursAndLocation />
      <NewsletterForm />
    </div>
  );
};

export default Index;
