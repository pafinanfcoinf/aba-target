import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AboutSection from "@/components/AboutSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import BoardCoursesSection from "@/components/BoardCoursesSection";
import AvailableCoursesSection from "@/components/AvailableCoursesSection";
import ContactSection from "@/components/ContactSection";

export type Lang = "ar" | "en";

const T = {
  ar: {
    tabBio: "السيرة الذاتية",
    tabCourses: "الكورسات",
  },
  en: {
    tabBio: "BIOGRAPHY",
    tabCourses: "COURSES",
  },
};

function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [activeTab, setActiveTab] = useState<"bio" | "courses">("bio");
  const t = T[lang];

  return (
    <div className="min-h-screen" dir="rtl">
      <SiteHeader lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />

      {/* Tabs Nav */}
      <div className="sticky top-[78px] z-40 bg-[#f8f7f5] border-b-2 border-black">
        <div className="max-w-[1080px] mx-auto flex">
          <button
            onClick={() => setActiveTab("bio")}
            className={`flex-1 py-[18px] text-center text-[13px] font-bold tracking-widest uppercase border-b-[3px] transition-all ${
              activeTab === "bio"
                ? "text-black border-black bg-white"
                : "text-[#666] border-transparent hover:text-black hover:bg-black/[0.02]"
            } border-l border-[#d0d0d0]`}
          >
            {t.tabBio}
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`flex-1 py-[18px] text-center text-[13px] font-bold tracking-widest uppercase border-b-[3px] transition-all ${
              activeTab === "courses"
                ? "text-black border-black bg-white"
                : "text-[#666] border-transparent hover:text-black hover:bg-black/[0.02]"
            }`}
          >
            {t.tabCourses}
          </button>
        </div>
      </div>

      {activeTab === "bio" && (
        <>
          <AboutSection lang={lang} />
          <ConsultationCTA lang={lang} />
        </>
      )}
      {activeTab === "courses" && (
        <>
          <BoardCoursesSection lang={lang} />
          <AvailableCoursesSection lang={lang} />
        </>
      )}

      <ContactSection lang={lang} />
      <SiteFooter lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

export default App;
