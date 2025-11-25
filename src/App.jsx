// src/App.jsx
import React, { useState } from "react";
import { PAGES, ROLES } from "./constants";

import Sidebar from "./components/layout/SideBar";
import MobileHeader from "./components/layout/MobileHeader";
import DesktopHeader from "./components/layout/DesktopHeader";
import ContactSection from "./components/layout/ContactSection";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import FaqPage from "./components/pages/FaqPage";
import WizardPage from "./components/pages/WizardPage";
import DocumentBuilderPage from "./components/pages/DocumentBuilderPage";
import DashboardPage from "./components/pages/DashboardPage";
import DisputeNavigatorPage from "./components/pages/DisputeNavigatorPage";

import AuthModal from "./components/shared/AuthModal";

function App() {
  const [activePage, setActivePage] = useState(PAGES.HOME);
  const [currentRole, setCurrentRole] = useState(ROLES.GUEST);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuth = () => setShowAuthModal(true);
  const handleCloseAuth = () => setShowAuthModal(false);

  const handleSignIn = (role) => {
    setCurrentRole(role);
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentRole(ROLES.GUEST);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex relative">
      {/* Sidebar (desktop) */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        PAGES={PAGES}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col md:ml-0">
        {/* Top bar + mobile nav */}
        <MobileHeader
          activePage={activePage}
          setActivePage={setActivePage}
          PAGES={PAGES}
          isAuthenticated={isAuthenticated}
          currentRole={currentRole}
          onOpenAuth={handleOpenAuth}
        />

        {/* Desktop header */}
        <DesktopHeader
          isAuthenticated={isAuthenticated}
          currentRole={currentRole}
          onOpenAuth={handleOpenAuth}
          onSignOut={handleSignOut}
        />

        {/* Page body (scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 pb-8 pt-[5.4rem] md:pt-8 md:px-10">
          {activePage === PAGES.HOME && (
            <HomePage
              currentRole={currentRole}
              onGetStarted={() => setActivePage(PAGES.WIZARD)}
            />
          )}
          {activePage === PAGES.ABOUT && <AboutPage />}
          {activePage === PAGES.FAQS && <FaqPage />}
          {activePage === PAGES.WIZARD && (
            <WizardPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DOCUMENTS && (
            <DocumentBuilderPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DASHBOARD && (
            <DashboardPage currentRole={currentRole} />
          )}
          {activePage === PAGES.DISPUTES && <DisputeNavigatorPage />}
        </div>

        {/* Contact footer shown on every page */}
        <ContactSection />
      </main>

      {/* Auth modal */}
      {showAuthModal && (
        <AuthModal
          initialRole={currentRole}
          onClose={handleCloseAuth}
          onSignIn={handleSignIn}
        />
      )}
    </div>
  );
}

export default App;
