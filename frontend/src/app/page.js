import Main from "@/components/Main";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import JoinOurAgency from "@/components/JoinOurAgency";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Main>
      <Header />
      <Services />
      <Projects />
      <AboutUs />
      <Testimonial />
      <JoinOurAgency />
      <Footer />
    </Main>
  );
}
