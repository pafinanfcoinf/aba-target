import { useState } from "react";
import type { Lang } from "../App";

const T = {
  ar: {
    eyebrow: "تواصل معنا",
    title: "نحن هنا لمساعدتك",
    labelName: "الاسم *",
    labelPhone: "التليفون *",
    labelEmail: "البريد الإلكتروني *",
    labelMsg: "رسالتك",
    phName: "أدخل اسمك",
    phMsg: "اكتب رسالتك هنا...",
    submit: "إرسال الرسالة",
    sent: "✓ تم الإرسال",
  },
  en: {
    eyebrow: "CONTACT US",
    title: "We're Here to Help",
    labelName: "Name *",
    labelPhone: "Phone *",
    labelEmail: "Email *",
    labelMsg: "Message",
    phName: "Enter your name",
    phMsg: "Write your message here...",
    submit: "Send Message",
    sent: "✓ Sent!",
  },
};

const ContactSection = ({ lang }: { lang: Lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = T[lang];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full font-cairo text-[14px] text-black bg-white border-[1.5px] border-[#d0d0d0] px-[14px] py-[11px] outline-none focus:border-black transition-colors text-right";

  return (
    <section className="py-20 bg-[#f8f7f5] border-t-2 border-black" id="contact">
      <div className="max-w-[600px] mx-auto px-10">
        <div className="text-right mb-8">
          <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[#b8962e] mb-2.5">{t.eyebrow}</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-black leading-[1.1] mb-3">{t.title}</h2>
          <div className="w-10 h-0.5 bg-[#b8962e] mr-0 ml-auto" />
        </div>
        <form onSubmit={handleSubmit} className="bg-white border-2 border-black p-10">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-black mb-1.5">{t.labelName}</label>
              <input type="text" required placeholder={t.phName} className={inputClass} />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-black mb-1.5">{t.labelPhone}</label>
              <input type="tel" required placeholder="+966..." className={inputClass} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-black mb-1.5">{t.labelEmail}</label>
            <input type="email" required placeholder="your@email.com" className={inputClass} />
          </div>
          <div className="mb-4">
            <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-black mb-1.5">{t.labelMsg}</label>
            <textarea rows={4} placeholder={t.phMsg} className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            className={`w-full font-cairo text-[13px] font-bold py-[13px] tracking-[0.06em] uppercase transition-colors ${submitted ? "bg-[#b8962e] text-white" : "bg-black text-white hover:bg-[#2a2a2a]"}`}
          >
            {submitted ? t.sent : t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
