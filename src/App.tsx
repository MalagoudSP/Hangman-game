import { Route, Routes } from "react-router";
import MainMenu from "./features/mainMenu/components/MainMenu";
import HowToPlay from "./features/howToPlay/HowToPlay";

function App() {
  return (
    <div className="min-h-dvh bg-[url('../public/assets/images/background-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('../public/assets/images/background-tablet.svg')] lg:bg-[url('../public/assets/images/background-desktop.svg')]">
      <Routes>
        <Route index path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </div>
  );
}

export default App;
