import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Sofa,
  Ruler,
  Compass,
  Flame,
  Building2,
  Truck,
  Sparkles,
  Crown,
  ShieldCheck,
  Quote,
} from "lucide-react";

import logo from "@/assets/logo.png";
import bedroomImg from "@/assets/bedroom.jpg";
import majlisImg from "@/assets/majlis.jpg";
import sofaImg from "@/assets/sofa.jpg";
import diningImg from "@/assets/dining.jpg";
import officeImg from "@/assets/office.jpg";
import decorImg from "@/assets/decor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "قمة بلوتو | أثاث فاخر مصنوع بإتقان" },
      {
        name: "description",
        content:
          "قمة بلوتو — أثاث فاخر مصنوع بإتقان: مجالس ملكية، غرف نوم، معيشة، طاولات طعام ومكاتب تنفيذية. تصميم وتنفيذ وضمان 10 سنوات.",
      },
      { property: "og:title", content: "قمة بلوتو | أثاث فاخر مصنوع بإتقان" },
      {
        property: "og:description",
        content: "أثاث فاخر مصنوع بإتقان — مجالس، غرف نوم، معيشة ومكاتب تنفيذية من قمة بلوتو.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ---------- Tools ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const NAV = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "معارضنا", href: "#gallery" },
  { label: "تواصل معنا", href: "#contact" },
];

const SERVICES = [
  {
    icon: Sofa,
    title: "أثاث جاهز فاخر",
    desc: "مجموعات مختارة بعناية من أفخم التصاميم، جاهزة للتسليم الفوري في معارضنا الثلاثة.",
  },
  {
    icon: Ruler,
    title: "تصنيع حسب الطلب",
    desc: "نصمم وننفذ القطعة على مقاسك ومواصفاتك: قماش، خشب، وتفاصيل ذهبية تختارها بنفسك.",
  },
  {
    icon: Compass,
    title: "تصميم داخلي",
    desc: "فريق مصممين محترفين يحوّل مساحتك إلى تحفة متكاملة من الفكرة حتى آخر قطعة ديكور.",
  },
  {
    icon: Flame,
    title: "مجالس وديوانيات",
    desc: "مجالس ملكية وديوانيات شعبية بأخشاب نادرة وتطريز يدوي يحفظ هوية الأصالة.",
  },
  {
    icon: Building2,
    title: "فنادق ومكاتب",
    desc: "تنسيق وتوريد كامل للفنادق والمكاتب التنفيذية بأرقى المعايير العالمية.",
  },
  {
    icon: Truck,
    title: "توصيل وتركيب",
    desc: "شحن مؤمَّن وتركيب احترافي في جميع مناطق المملكة، مع ضمان يصل إلى 10 سنوات.",
  },
];

const GALLERY = [
  {
    img: bedroomImg,
    title: "غرف النوم الملكية",
    desc: "نوم خاطف يغمر السقف والجدار من الخشب والقماش",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: majlisImg,
    title: "المجالس والديوانيات",
    desc: "أصالة طويلة في التفاصيل",
    span: "md:col-span-2",
  },
  {
    img: diningImg,
    title: "طاولات الطعام",
    desc: "بأحجام شتى",
    span: "md:col-span-1",
  },
  {
    img: sofaImg,
    title: "كنب المعيشة",
    desc: "هيئة حديثة ترتاح إليها",
    span: "md:col-span-1",
  },
  {
    img: officeImg,
    title: "المكاتب التنفيذية",
    desc: "هيئة إنجاز",
    span: "md:col-span-2",
  },
  {
    img: decorImg,
    title: "الديكور والمرايا",
    desc: "اللمسة النهائية التي تصنع الفرق",
    span: "md:col-span-2",
  },
];

const STATS = [
  { value: "+20", label: "سنة من الخبرة", icon: Crown },
  { value: "+50,000", label: "عميل سعيد", icon: Sparkles },
  { value: "3", label: "معارض في الرياض وجدة", icon: Building2 },
  { value: "10", label: "سنوات ضمان", icon: ShieldCheck },
];

const TESTIMONIALS = [
  {
    name: "أحمد الشمري",
    role: "عميل — حي الياسمين، الرياض",
    text: "طلبت مجلس كامل بنفسي وصارت النتيجة أجمل مما تخيلت. التفاصيل الذهبية والتطريز اليدوي أمر لا يوصف، والتسليم قبل الموعد.",
  },
  {
    name: "سارة العتيبي",
    role: "مديرة فندق — جدة",
    text: "فندقنا جمعه كلها من قمة بلوتو؛ 84 غرفة بجودة واحدة. الاحترافية والمتابعة بعد التسليم فرقتين واسعتين على كل من جرب قبلهم.",
  },
  {
    name: "عبدالله الدوسري",
    role: "رئيس مجلس إدارة — الدمام",
    text: "مكتبي التنفيذي أصبح أجمل واجهة أمام العملاء. فريق التصميم فهم ذوقي من أول اجتماع، والتنفيذ كان مكانه لا يوصف.",
  },
];

const SOCIALS = [
  { icon: Instagram, label: "انستقرام", href: "https://instagram.com/qimmatpluto" },
  { icon: Twitter, label: "إكس (تويتر)", href: "https://x.com/qimmatpluto" },
  { icon: TikTokIcon, label: "تيك توك", href: "https://tiktok.com/@qimmatpluto" },
  { icon: SnapchatIcon, label: "سناب شات", href: "https://snapchat.com/add/qimmatpluto" },
  { icon: WhatsAppIcon, label: "واتساب", href: "https://wa.me/966537992507" },
];

/* ---------- Custom brand-channel icons (not available in lucide) ---------- */

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.68 5.68 0 1 0 4.92 5.63V9.01a7.32 7.32 0 0 0 4.28 1.38V7.3a4.28 4.28 0 0 1-3.23-1.48Z" />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c2.94 0 5.25 2.3 5.25 5.15 0 .6.03 1.34.06 1.9.23.05.52.07.78.02.36-.06.73-.26.94-.5a.66.66 0 0 1 .5-.23c.2 0 .37.09.47.25.15.24.1.56-.14.86-.29.36-.94.75-1.5.92-.14.04-.28.13-.36.26-.09.15-.08.32-.02.5.28.83 1.36 2.32 3.05 2.99.15.06.25.2.24.36a.4.4 0 0 1-.24.34c-.4.18-1.14.31-1.65.37-.06.24-.11.53-.2.62-.13.13-.5.12-.78.09a4.9 4.9 0 0 0-.83-.03c-.7.04-1.4.12-2.05.44-.62.3-1.17.75-1.87.75-.75 0-1.22-.47-1.87-.75a4.6 4.6 0 0 0-2.05-.44c-.3 0-.6 0-.83.03-.28.03-.65.04-.78-.09-.09-.09-.14-.38-.2-.62-.5-.06-1.25-.19-1.65-.37a.4.4 0 0 1-.24-.34.4.4 0 0 1 .24-.36c1.69-.67 2.77-2.16 3.05-2.99.06-.18.07-.35-.02-.5a.72.72 0 0 0-.36-.26c-.56-.17-1.21-.56-1.5-.92-.24-.3-.29-.62-.14-.86.1-.16.27-.25.47-.25a.66.66 0 0 1 .5.23c.21.24.58.44.94.5.26.05.55.03.78-.02.03-.56.06-1.3.06-1.9C6.75 4.3 9.06 2 12 2Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.53 14.93L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.19 15.32l-.3-.18-3.08.8.82-3-.2-.31a8.23 8.23 0 0 1 6.95-12.63Zm-3.9 3.8c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.58.13.17 1.77 2.7 4.3 3.78 2.1.9 2.53.72 2.99.68.46-.04 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06a6.68 6.68 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.02Z" />
    </svg>
  );
}

/* ---------- Sections ---------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="شعار قمة بلوتو" className="h-14 w-14 object-contain" />
          <span className="font-display text-2xl font-bold tracking-wide text-gold-gradient">
            قمة بلوتو
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-foreground/85 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-gold hidden rounded-full px-6 py-2.5 text-sm font-bold md:inline-flex">
          احجز زيارتك
        </a>
        <a href="#contact" className="btn-gold rounded-full px-5 py-2 text-sm font-bold md:hidden">
          احجز
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={bedroomImg}
        alt="غرفة نوم ملكية من قمة بلوتو"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-5 py-2 text-sm font-bold text-primary backdrop-blur">
            <Crown className="h-4 w-4" />
            أثاث فاخر منذ 2005 — الرياض
          </span>
          <h1 className="reveal is-visible mt-6 font-display text-6xl leading-[1.15] font-bold text-gold-gradient sm:text-7xl lg:text-8xl">
            أثاث يليق
            <br />
            بالقِمّم
          </h1>
          <p className="reveal is-visible mt-6 max-w-xl text-xl leading-relaxed text-foreground/90 sm:text-2xl">
            في <span className="font-bold text-primary">قمة بلوتو</span> نصنع قطعاً تُحكى عنها
            الحكايات: مجالس ملكية، غرف نوم، معيشة ومكاتب — بحرفية يدوية وتفاصيل ذهبية تصنع الفرق.
          </p>
          <div className="reveal is-visible mt-10 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="btn-gold rounded-full px-8 py-4 text-lg font-bold"
            >
              تصفّح معارضنا
            </a>
            <a href="#contact" className="btn-ghost-gold rounded-full px-8 py-4 text-lg font-bold">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-glow py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-4xl border border-gold/20" />
          <img
            src={majlisImg}
            alt="مجلس فاخر من قمة بلوتو"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-4xl border border-gold/25 object-cover shadow-2xl"
          />
        </div>
        <div className="reveal">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">من نحن</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-snug text-gold-gradient sm:text-5xl">
            حكاية خشبٍ وذهبٍ كُتبت منذ 2005
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            بدأت <span className="font-bold text-primary">قمة بلوتو</span> من ورشة صغيرة في الرياض
            بحلم واحد: أن يكون الأثاث العربي مرجعاً عالمياً في الفخامة. اليوم، وبعد أكثر من عشرين
            سنة، صارت ورشتنا مدرسةً تخرّج فيها التحف الثلاثية أثاثاً يزين القصور والفنادق والبيوت
            في أنحاء المملكة.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "أخشاب موزّعة وزان ودوسة مدروسة من مصادر معتمدة عالمياً",
              "تطريز يدوي وتفاصيل ذهبية تنفّذ بأيدي أمهر الصنّاع",
              "فريق تصميم داخلي كامل من الفكرة حتى التسليم",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground/85">
                <Star className="mt-1 h-5 w-5 shrink-0 fill-primary text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="card-luxury p-5 text-center">
                <stat.icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 font-display text-3xl font-bold text-gold-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">خدماتنا</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            كل ما يحتاجه بيتك تحت قمة واحدة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            من الفكرة الأولى حتى آخر برغي — نرافقك في كل خطوة.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="reveal card-luxury group p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-primary/10 transition-transform group-hover:scale-110">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">معارضنا</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            مجموعات تُروى عنها الحكايات
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تجوّل بين معارضنا الثلاثة وشاهد التحف قبل أن تختار.
          </p>
        </div>
        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-4">
          {GALLERY.map((item) => (
            <figure
              key={item.title}
              className={`reveal group relative overflow-hidden rounded-3xl border border-gold/20 ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-bold text-gold-gradient">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-gold/15 bg-card/40 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="reveal">
            <stat.icon className="mx-auto h-8 w-8 text-primary" />
            <div className="mt-3 font-display text-5xl font-bold text-gold-gradient">
              {stat.value}
            </div>
            <div className="mt-2 font-bold text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">
            آراء عملائنا
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            قالوا عن قمة بلوتو
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.name} className="reveal card-luxury relative p-8">
              <Quote className="h-8 w-8 text-primary/40" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground/85">{item.text}</p>
              <footer className="mt-6">
                <div className="font-bold text-primary">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-glow border-t border-gold/15 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">
            تواصل معنا
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            زُر معرضنا أو اتصل بنا الآن
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            فريقنا جاهز لاستقبالك في أي وقت ولهجة من التواصل.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: "اتصل بنا", line1: "+966 53 799 2507", line2: "متاحون لخدمتكم" },
            { icon: Mail, title: "راسلنا", line1: "info@qimmatpluto.sa", line2: "نرد خلال يوم عمل" },
            { icon: MapPin, title: "المعرض الرئيسي", line1: "طريق الملك فهد", line2: "حي المروج، الرياض" },
            { icon: Clock, title: "ساعات العمل", line1: "السبت - الخميس", line2: "10 صباحاً - 11 مساءً" },
          ].map((card) => (
            <div key={card.title} className="reveal card-luxury p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{card.title}</h3>
              <p className="mt-2 font-bold text-foreground/90" dir="auto">
                {card.line1}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{card.line2}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-6">
          <span className="font-bold text-muted-foreground">تابعنا على قنواتنا:</span>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-card/60 text-primary transition-all hover:scale-110 hover:border-gold/70 hover:bg-primary/15"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-card/40 py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="شعار قمة بلوتو" loading="lazy" className="h-16 w-16 object-contain" />
          <div>
            <div className="font-display text-2xl font-bold text-gold-gradient">قمة بلوتو</div>
            <div className="text-sm text-muted-foreground">أثاث يليق بالقِمّم</div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-3 md:justify-end">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-gold/10 pt-6 text-center text-sm text-muted-foreground">
        © 2026 قمة بلوتو — جميع الحقوق محفوظة. هذه الصفحة نموذج تجريبي بمعلومات افتراضية.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/966537992507"
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="btn-gold fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
