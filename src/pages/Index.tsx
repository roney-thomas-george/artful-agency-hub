import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
