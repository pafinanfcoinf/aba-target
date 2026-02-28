import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "من نحن",
    name: "علا عبدالهادي",
    subtitle: "تحليل السلوك التطبيقي ABA",
    body: "هو علم منظم يهدف إلى تحسين حياة الأفراد خاصة التوحد من خلال التركيز على السلوكيات الهامة اجتماعياً",
    featureTitle: "لماذا ABA Target؟",
    features: [
      "خبرة دولية معتمدة في تحليل السلوك التطبيقي",
      "كورسات معتمدة للمستويات الثلاثة من QABA",
      "إشراف إكلينيكي متخصص ومتابعة دقيقة",
      "دعم متكامل لأولياء الأمور والمعالجين",
    ],
  },
  en: {
    eyebrow: "ABOUT",
    name: "Ola Abdelhady",
    subtitle: "Applied Behavior Analysis — ABA",
    body: "A systematic science aimed at improving the lives of individuals, especially those with autism, by focusing on socially significant behaviors.",
    featureTitle: "Why ABA Target?",
    features: [
      "Internationally certified expertise in Applied Behavior Analysis",
      "QABA-certified courses for all three certification levels",
      "Specialized clinical supervision and precise follow-up",
      "Comprehensive support for parents and therapists",
    ],
  },
};

const AboutSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-10">
        {/* Main bio block */}
        <div className="text-right">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-black leading-[1.1] mb-1">{t.name}</h2>
          <span className="block text-[11px] font-medium tracking-[0.14em] uppercase text-[#999] mb-[18px]">Ola Abdelhady</span>
          <div className="w-10 h-0.5 bg-[#b8962e] mb-4 mr-0 ml-auto" />
          <p className="text-[16px] sm:text-[17px] font-bold text-[#1e1e1e] mb-2.5">{t.subtitle}</p>
          <p className="text-[14px] sm:text-[15px] text-[#666] leading-[1.9] max-w-[640px] mr-0 ml-auto">{t.body}</p>
        </div>

        {/* Features block */}
        <div className="mt-10 sm:mt-14 border-t border-[#e8e8e8] pt-8 sm:pt-12">
          <h3 className="text-[clamp(18px,3vw,26px)] font-black text-black text-right mb-6">{t.featureTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#f8f7f5] border border-[#e8e8e8] text-right">
                <span className="text-[11px] font-bold text-[#b8962e] tracking-[0.08em] flex-shrink-0 w-[22px] text-center mt-0.5">{String(i+1).padStart(2,'0')}</span>
                <span className="flex-1 text-[14px] font-medium text-black leading-[1.7]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
