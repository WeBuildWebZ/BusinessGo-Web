import Banner from "../components/banner";
import Me from "../components/me";
import Solution from "../components/solution";
import Herramientas from "../components/herramientas";
import Prices from "../components/prices";
import Subscription from "../components/subscription";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Me />
      <Solution />
      <Herramientas />
      <Prices />
      <Subscription />
      <Footer />
    </>
  );
}
