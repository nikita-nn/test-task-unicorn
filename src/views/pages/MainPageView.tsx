import { MainSection } from "../../components/sections/MainPage/MainSection.tsx";
import { BetaTestSection } from "../../components/sections/MainPage/BetaTestSection.tsx";
import { MainPageFooter } from "../../components/sections/MainPage/Footer.tsx";

/**
 * "/" - основная страница лендинга.
 */

const MainPageView = () => {
  return (
    <main>
      <MainSection />
      <BetaTestSection />
      <MainPageFooter />
    </main>
  );
};

export default MainPageView;
