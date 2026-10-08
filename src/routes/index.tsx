import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Instagram,
  Twitter,
  Phone,
  Mail,
  Users,
  Building2,
  Landmark,
  HeartPulse,
  Sofa,
  Sun,
  Sparkles,
  Check,
  Factory,
  Briefcase,
} from "lucide-react";

import logo from "@/assets/logo.png";
import majlisImg from "@/assets/majlis.jpg";
import sofaCream from "@/assets/sofa-cream.png.asset.json";
import setCurved from "@/assets/set-curved.webp.asset.json";
const sofaImg = sofaCream.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "قمة بلوتو | حلول أثاث تناسب احتياجك" },
      {
        name: "description",
        content:
          "قمة بلوتو للأثاث — حلول أثاث للأفراد وقطاعات الأعمال، نعمل مباشرة من المصنع. اطّلع على المنتجات المتاحة وتواصل معنا عبر واتساب لمعرفة التفاصيل والخيارات.",
      },
      { property: "og:title", content: "قمة بلوتو | حلول أثاث تناسب احتياجك" },
      {
        property: "og:description",
        content:
          "حلول أثاث للأفراد وقطاعات الأعمال من قمة بلوتو، مباشرة من المصنع. اطّلع على المنتجات وتواصل معنا عبر واتساب.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ---------- Contact ---------- */

const PHONE_DISPLAY = "+966 53 799 2507";
const TEL = "tel:+966537992507";
const waLink = (msg: string) => `https://wa.me/966537992507?text=${encodeURIComponent(msg)}`;

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
  { label: "منتجاتنا", href: "#products" },
  { label: "قطاع الأعمال", href: "#business" },
  { label: "أعمالنا", href: "#work" },
  { label: "تواصل معنا", href: "#contact" },
];

const SERVE = [
  {
    icon: Users,
    title: "الأفراد والمنازل",
    desc: "احتياجات الأثاث المختلفة للمنازل والمساحات السكنية.",
  },
  {
    icon: Building2,
    title: "الشركات والمؤسسات",
    desc: "حلول أثاث تناسب بيئات العمل واحتياجات المنشآت.",
  },
  {
    icon: Landmark,
    title: "الجهات الحكومية",
    desc: "حلول أثاث للمكاتب والمرافق والمساحات المختلفة حسب الاحتياج.",
  },
  {
    icon: HeartPulse,
    title: "المستشفيات والقطاعات المختلفة",
    desc: "دراسة الاحتياج وتوفير حلول الأثاث المناسبة حسب طبيعة المشروع.",
  },
];

const PRODUCTS = [
  {
    icon: Sofa,
    title: "الكنب",
    desc: "استعرض تشكيلات الكنب المتوفرة لدى قمة بلوتو.",
    cta: "استعرض الكنب",
    msg: "مرحباٌ، أرغب في استعراض تشكيلة الكنب",
  },
  {
    icon: Sun,
    title: "الستائر",
    desc: "استعرض خيارات الستائر المتوفرة والتصاميم المناسبة للمساحات المختلفة.",
    cta: "استعرض الستائر",
    msg: "مرحباٌ، أرغب في استعراض خيارات الستائر",
  },
];

const CATALOG_FIELDS = [
  "اسم المنتج",
  "صورة المنتج",
  "وصف مختصر",
  "الخيارات المتوفرة",
  "صور إضافية",
  "رمز المنتج إن وجد",
];

const WORK_ITEMS = [
  "صور المنتجات المنفذة",
  "صور المشاريع",
  "صور قبل وبعد إذا كانت متوفرة",
  "صور مراحل العمل والتجهيز",
];

const SOCIALS = [
  { icon: Instagram, label: "انستقرام", href: "https://instagram.com/qimmatpluto" },
  { icon: TikTokIcon, label: "تيك توك", href: "https://tiktok.com/@qimmatpluto" },
  { icon: Twitter, label: "إكس (تويتر)", href: "https://x.com/qimmatpluto" },
  { icon: SnapchatIcon, label: "سناب شات", href: "https://snapchat.com/add/qimmatpluto" },
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
        <nav className="hidden items-center gap-7 lg:flex">
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
          تواصل معنا
        </a>
        <a href="#contact" className="btn-gold rounded-full px-5 py-2 text-sm font-bold md:hidden">
          تواصل
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={setCurved.url}
        alt="مجلس عصري من قمة بلوتو"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-5 py-2 text-sm font-bold text-primary backdrop-blur">
            <Factory className="h-4 w-4" />
            نعمل مباشرة من المصنع
          </span>
          <h1 className="reveal is-visible mt-6 font-display text-5xl leading-[1.2] font-bold text-gold-gradient sm:text-6xl lg:text-7xl">
            حلول أثاث
            <br />
            تناسب احتياجك
          </h1>
          <p className="reveal is-visible mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
            في <span className="font-bold text-primary">قمة بلوتو</span> نعمل على توفير حلول الأثاث
            للأفراد وقطاعات الأعمال، مع إمكانية الاطلاع على المنتجات والتواصل معنا مباشرة لمعرفة
            التفاصيل والخيارات المتاحة.
          </p>
          <div className="reveal is-visible mt-10 flex flex-wrap gap-4">
            <a href="#products" className="btn-gold rounded-full px-8 py-4 text-lg font-bold">
              استعرض المنتجات
            </a>
            <a
              href={waLink("مرحباٌ، أرغب في الاطلاع على منتجات قمة بلوتو")}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-gold rounded-full px-8 py-4 text-lg font-bold"
            >
              تواصل معنا عبر واتساب
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
            alt="أثاث من قمة بلوتو"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-4xl border border-gold/25 object-cover shadow-2xl"
          />
        </div>
        <div className="reveal">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">من نحن</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-snug text-gold-gradient sm:text-5xl">
            قمة بلوتو للأثاث
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            قمة بلوتو تعمل في مجال الأثاث، ونسعى إلى تقديم منتجات وحلول تناسب احتياجات عملائنا، سواء
            للاستخدام السكني أو لقطاعات الأعمال المختلفة.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            نعمل مباشرة من المصنع، ونسعى إلى توفير تجربة واضحة للعميل تبدأ من معرفة احتياجه واختيار
            المنتج المناسب وحتى إتمام الطلب.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "حلول أثاث للأفراد وقطاعات الأعمال",
              "العمل مباشرة من المصنع",
              "تجربة واضحة من معرفة الاحتياج حتى إتمام الطلب",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground/85">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Serve() {
  return (
    <section id="serve" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">نخدم</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            الأفراد وقطاعات الأعمال
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نعمل على توفير حلول الأثاث لعدة فئات، ومنها:
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVE.map((item) => (
            <div key={item.title} className="reveal card-luxury group p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-primary/10 transition-transform group-hover:scale-110">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">منتجاتنا</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            استعرض منتجات قمة بلوتو
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            سيتم توفير كتالوج يتيح للعميل تصفح المنتجات المتاحة ومعرفة تفاصيل كل منتج والتواصل معنا
            بشأنه.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div key={product.title} className="reveal card-luxury group flex flex-col p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-primary/10 transition-transform group-hover:scale-110">
                <product.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{product.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{product.desc}</p>
              <a
                href={waLink(product.msg)}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-6 inline-flex justify-center rounded-full px-6 py-3 font-bold"
              >
                {product.cta}
              </a>
            </div>
          ))}
          <div className="reveal card-luxury flex flex-col p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">منتجات أخرى</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              يتم إضافة الأقسام الأخرى بعد اعتماد قائمة المنتجات الكاملة من إدارة قمة بلوتو.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal card-luxury p-8 sm:p-12">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">الكتالوج</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            لكل منتج يمكن عرض
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CATALOG_FIELDS.map((field) => (
              <div
                key={field}
                className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-card/60 px-5 py-4"
              >
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-bold text-foreground/90">{field}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            لا يتم عرض السعر أو نوع الخشب أو مدة التصنيع أو الضمان إلا بعد تأكيد هذه المعلومات من
            صاحب المنشأة.
          </p>
          <a
            href={waLink("مرحباٌ، أرغب في الاستفسار عن أحد المنتجات")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold"
          >
            <WhatsAppIcon className="h-5 w-5" />
            استفسر عن المنتج عبر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}

function FactorySection() {
  return (
    <section id="factory" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative overflow-hidden rounded-4xl border border-gold/25">
            <img
              src={sofaImg}
              alt="كنب من قمة بلوتو"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="reveal">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              العمل مباشرة من المصنع
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
              من المصنع مباشرة
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              تعمل قمة بلوتو مباشرة من المصنع، ويمكن للعميل التواصل معنا لمعرفة المنتجات والخيارات
              المناسبة لاحتياجه.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              لا يتم ذكر وجود معارض أو فروع في النسخة الحالية من الموقع.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">أعمالنا</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            بعض أعمال قمة بلوتو
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            سيتم عرض مجموعة من الأعمال التي تم تنفيذها فعليًا بعد تزويد فريق الموقع بالصور واعتمادها
            للنشر.
          </p>
        </div>
        <div className="reveal mt-14 grid gap-6 sm:grid-cols-2">
          {WORK_ITEMS.map((item) => (
            <div
              key={item}
              className="card-luxury flex items-center gap-4 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Business() {
  return (
    <section id="business" className="section-glow py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal card-luxury p-8 sm:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-primary/10">
            <Briefcase className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            هل تبحث عن أثاث لشركتك أو منشأتك؟
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            تستقبل قمة بلوتو طلبات الشركات والمؤسسات والجهات الحكومية والمستشفيات وغيرها من قطاعات
            الأعمال.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            يمكن للجهة التواصل معنا وإرسال متطلبات المشروع لدراستها ومعرفة الحلول الممكنة.
          </p>
          <a
            href={waLink("مرحباٌ، أرغب في التواصل بشأن مشروع أثاث")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8 inline-flex rounded-full px-8 py-4 text-lg font-bold"
          >
            تواصل معنا بشأن مشروعك
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-gold/15 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">
            تواصل معنا
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
            تواصل مع قمة بلوتو
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            هل لديك استفسار عن أحد المنتجات أو ترغب في معرفة الخيارات المتاحة؟ تواصل معنا وسيقوم
            الفريق بمساعدتك.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="reveal card-luxury p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-primary/10">
              <WhatsAppIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">واتساب</h3>
            <p className="mt-2 font-bold text-foreground/90" dir="auto">
              {PHONE_DISPLAY}
            </p>
            <a
              href={waLink("مرحباٌ")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-5 inline-flex justify-center rounded-full px-6 py-2.5 font-bold"
            >
              تواصل عبر واتساب
            </a>
          </div>

          <div className="reveal card-luxury p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">الاتصال</h3>
            <a href={TEL} className="mt-2 block font-bold text-foreground/90" dir="auto">
              {PHONE_DISPLAY}
            </a>
            <span className="mt-5 inline-flex rounded-full border border-gold/25 px-6 py-2.5 text-sm text-muted-foreground">
              اتصل بنا مباشرة
            </span>
          </div>

          <div className="reveal card-luxury p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">البريد الإلكتروني</h3>
            <p className="mt-2 text-muted-foreground">يُضاف البريد بعد اعتماده</p>
            <span className="mt-5 inline-flex rounded-full border border-gold/25 px-6 py-2.5 text-sm text-muted-foreground">
              قريباً
            </span>
          </div>
        </div>

        <div className="reveal mt-16 flex flex-col items-center gap-6">
          <span className="font-display text-2xl font-bold text-gold-gradient">تابع قمة بلوتو</span>
          <span className="max-w-md text-center text-sm text-muted-foreground">
            يمكن إضافة حسابات التواصل الاجتماعي بعد استلام الروابط الرسمية.
          </span>
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
            <div className="text-sm text-muted-foreground">أثاث</div>
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
        © 2026 قمة بلوتو — جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink("مرحباٌ")}
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
        <Serve />
        <Products />
        <Catalog />
        <FactorySection />
        <Work />
        <Business />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
