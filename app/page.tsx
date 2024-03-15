import { Hero } from "./(HomePage)/_components/hero.tsx/hero";
import { Navbar } from "./_components/Navbar/Navbar";
import StartRealEstate from "./(HomePage)/_components/StartRealEstate/SRE";

const HomePage = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <StartRealEstate />
    </main>
  );
};

export default HomePage;
