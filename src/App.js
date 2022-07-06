import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  NavLink,
} from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import EntryPage from "./pages/entryPage";
import HomePage from "./pages/homePage";
import AuthRoute from "./components/authRoute";
import PrivateRoute from "./components/privateRouth";
import NavBar from "./components/navBar";
import NewsPage from "./pages/newsPage";
import { useTranslation } from "react-i18next";
import "./i18n.js"
import "./App.scss";
import { loadingController } from "@ionic/core";
function App() {
  const [screenSize, setScreenSize] = useState(1680);
  function getScreenSize() {
    setScreenSize(window.screen.width);
  }
  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);
  return (
    <Suspense fallback="Loading...">
      <ion-app>
        <ion-content fullscreen>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <AuthRoute>
                  <div className="container">
                    <EntryPage />
                  </div>
                </AuthRoute>
              }
            />
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <HomePage restricted={false} />
                </PrivateRoute>
              }
            />
            <Route exact path="/news" element={<NewsPage />} />
          </Routes>
        </ion-content>
      </ion-app>
    </Suspense>
  );
}

export default App;

// https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=12  News
// https://disease.sh/v3/covid-19/countries countriesData
// https://disease.sh/v3/covid-19/all totalData
