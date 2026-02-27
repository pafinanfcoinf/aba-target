import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "من نحن",
    name: "علا عبدالهادي",
    subtitle: "تحليل السلوك التطبيقي ABA",
    body: "هو علم منظم يهدف إلى تحسين حياة الأفراد خاصة التوحد من خلال التركيز على السلوكيات الهامة اجتماعياً",
  },
  en: {
    eyebrow: "ABOUT",
    name: "Ola Abdelhady",
    subtitle: "Applied Behavior Analysis — ABA",
    body: "A systematic science aimed at improving the lives of individuals, especially those with autism, by focusing on socially significant behaviors.",
  },
};

const AboutSection = ({ lang }: { lang: Lang }) => {
  const t = T[lang];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1080px] mx-auto px-10 flex items-center gap-[72px]">
        <div className="flex-1 flex gap-3.5 items-start">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/YrDNOPxN1qTZDL2L/generated/generated-mxB7ykk3OoIKOx64.png"
            alt="تحليل السلوك التطبيقي"
            className="w-[calc(50%-7px)] rounded-sm"
            loading="lazy"
          />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/YrDNOPxN1qTZDL2L/generated/generated-Aq2oxkklMVs1KzDK.png"
            alt="ABA therapy"
            className="w-[calc(50%-7px)] rounded-sm mt-9"
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-right">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-black leading-[1.1] mb-1">{t.name}</h2>
          <span className="block text-[11px] font-medium tracking-[0.14em] uppercase text-[#999] mb-[18px]">Ola Abdelhady</span>
          <div className="w-10 h-0.5 bg-[#b8962e] mb-4 mr-0 ml-auto" />
          <p className="text-[17px] font-bold text-[#1e1e1e] mb-2.5">{t.subtitle}</p>
          <p className="text-[15px] text-[#666] leading-[1.9]">{t.body}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
