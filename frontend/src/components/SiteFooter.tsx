import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import type { Lang } from "../App";

const SiteFooter = ({ lang }: { lang: Lang }) => {
  const name = lang === "ar" ? "علا عبدالهادي" : "Ola Abdelhady";
  return (
    <footer className="bg-black text-white border-t-[3px] border-[#b8962e]">
      <div className="max-w-[1080px] mx-auto px-10 py-12 text-center">
        <p className="text-2xl font-black text-white mb-1">{name}</p>
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/30 mb-6">MA, QBA, IBA · ABA Specialist</p>
        <div className="w-10 h-px bg-[#b8962e] mx-auto mb-6" />
        <div className="flex justify-center gap-2.5 mb-8">
          {[
            { href: "https://www.facebook.com/share/e5mRrpkhrNF1xk5j/?mibextid=LQQJ4d", icon: Facebook },
            { href: "https://www.linkedin.com/in/ahmed-abouzeid-5a66641b4", icon: Linkedin },
            { href: "https://m.facebook.com/share/j6XUVSqurufaMrbv/?mibextid=A7sQZp", icon: Facebook },
            { href: "https://wa.me/966545263917", icon: MessageCircle },
          ].map(({ href, icon: Icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-[38px] h-[38px] border border-white/20 hover:border-[#b8962e] transition-colors group">
              <Icon className="h-[17px] w-[17px] text-white/55 group-hover:text-[#b8962e] transition-colors" />
            </a>
          ))}
        </div>
        <p className="text-[11px] text-white/20 tracking-[0.06em]">
          © 2024 علا عبدالهادي · Ola Abdelhady. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
