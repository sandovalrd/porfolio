import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-gray-700">
      <div className="flex w-full flex-1 flex-col pt-10 md:pt-20">
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Header />
            <div className="flex min-h-0 flex-1 flex-col">
              <Router />
            </div>
            <Footer />
          </I18nextProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
