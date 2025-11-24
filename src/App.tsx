import { Route, Routes, useLocation } from "react-router";
import MainMenu from "./features/mainMenu/MainMenu";
import HowToPlay from "./features/howToPlay/HowToPlay";
import CategoryPick from "./features/categoryPick/CategoryPick";
import Game from "./features/game/Game";
import DifficultyPick from "./features/difficultyPick/DifficultyPick";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-[url('../assets/images/background-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('../assets/images/background-tablet.svg')] lg:bg-[url('../assets/images/background-desktop.svg')]">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            path="/"
            element={
              <motion.div
                style={{ willChange: "transform" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                exit={{ y: "-100%" }}
              >
                <MainMenu />
              </motion.div>
            }
          />

          <Route
            path="/how-to-play"
            element={
              <motion.div
                style={{ willChange: "transform" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                exit={{ y: "-100%" }}
              >
                <HowToPlay />
              </motion.div>
            }
          />
          <Route
            path="/category-pick"
            element={
              <motion.div
                style={{ willChange: "transform" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                exit={{ y: "-100%" }}
              >
                <CategoryPick />
              </motion.div>
            }
          />
          <Route
            path="/difficulty"
            element={
              <motion.div
                style={{ willChange: "transform" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                exit={{ y: "-100%" }}
              >
                <DifficultyPick />
              </motion.div>
            }
          />
          <Route
            path="/game"
            element={
              <motion.div
                style={{ willChange: "transform" }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                exit={{ x: "-100%" }}
              >
                <Game />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
