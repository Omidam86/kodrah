const roadmaps = [
  {
    slug: "frontend",
    title: "برنامه‌نویسی فرانت‌اند",
    icon: "🎨",
    description: "ساخت رابط‌های کاربری زیبا و واکنش‌گرا با HTML، CSS و JavaScript.",
    courses: [
      {
        slug: "html-css",
        title: "HTML و CSS از صفر",
        level: "مقدماتی",
        duration: "۲۰ ساعت",
        price: "۳۹۰,۰۰۰ تومان",
        description: "پایه‌ای‌ترین دوره برای ورود به دنیای وب. یاد می‌گیری چطور صفحات وب بسازی، استایل بدهی و ساختار درست HTML بنویسی.",
        topics: [
          "ساختار HTML و تگ‌های اصلی",
          "انتخابگرهای CSS و مدل جعبه",
          "Flexbox و Grid",
          "ریسپانسیو و طراحی موبایل"
        ]
      },
      {
        slug: "js-basics",
        title: "JavaScript پایه",
        level: "مقدماتی",
        duration: "۲۵ ساعت",
        price: "۴۵۰,۰۰۰ تومان",
        description: "زبان اصلی وب. با این دوره می‌توانی به صفحاتت جان بدهی و منطق برنامه‌نویسی را یاد بگیری.",
        topics: [
          "متغیرها، توابع، حلقه‌ها",
          "DOM و رویدادها",
          "آرایه‌ها و آبجکت‌ها",
          "Fetch API و کار با JSON"
        ]
      },
      {
        slug: "react",
        title: "React",
        level: "متوسط",
        duration: "۳۰ ساعت",
        price: "۶۵۰,۰۰۰ تومان",
        description: "محبوب‌ترین کتابخانه فرانت‌اند برای ساخت اپلیکیشن‌های تک‌صفحه‌ای.",
        topics: [
          "کامپوننت‌ها و Props",
          "State و Hookها",
          "React Router",
          "مدیریت State با Context"
        ]
      }
    ]
  },
  {
    slug: "backend",
    title: "برنامه‌نویسی بک‌اند",
    icon: "⚙️",
    description: "طراحی و پیاده‌سازی منطق سمت سرور، پایگاه داده و API.",
    courses: [
      {
        slug: "node-js",
        title: "Node.js و Express",
        level: "متوسط",
        duration: "۳۵ ساعت",
        price: "۵۹۰,۰۰۰ تومان",
        description: "با Node.js به زبان جاوااسکریپت سمت سرور کد می‌نویسی و API می‌سازی.",
        topics: [
          "ماژول‌ها و NPM",
          "Express و روتینگ",
          "میان‌افزارها",
          "احراز هویت با JWT"
        ]
      },
      {
        slug: "databases",
        title: "پایگاه داده (SQL و MongoDB)",
        level: "متوسط",
        duration: "۲۸ ساعت",
        price: "۴۹۰,۰۰۰ تومان",
        description: "طراحی و مدیریت پایگاه داده رابطه‌ای و غیررابطه‌ای.",
        topics: [
          "MySQL و کوئری‌ها",
          "طراحی schema",
          "MongoDB و Mongoose",
          "ایندکس و بهینه‌سازی"
        ]
      }
    ]
  },
  {
    slug: "fullstack",
    title: "فول‌استک",
    icon: "🚀",
    description: "ترکیب فرانت‌اند و بک‌اند برای ساخت پروژه‌های کامل و واقعی.",
    courses: [
      {
        slug: "next-js",
        title: "Next.js",
        level: "پیشرفته",
        duration: "۴۰ ساعت",
        price: "۷۹۰,۰۰۰ تومان",
        description: "فریم‌ورک فول‌استک ری‌اکت برای ساخت اپلیکیشن‌های حرفه‌ای.",
        topics: [
          "SSR و SSG",
          "App Router",
          "API Routes",
          "احراز هویت و Deploy"
        ]
      }
    ]
  },
  {
    slug: "network-security",
    title: "امنیت شبکه",
    icon: "🛡️",
    description: "ورود به دنیای امنیت سایبری و حفاظت از شبکه‌ها.",
    courses: [
      {
        slug: "network-plus",
        title: "مبانی شبکه (Network+)",
        level: "مقدماتی",
        duration: "۲۵ ساعت",
        price: "۵۹۰,۰۰۰ تومان",
        description: "پایه امنیت شبکه، شناخت پروتکل‌ها و ساختار شبکه.",
        topics: [
          "مدل OSI",
          "پروتکل‌های TCP/IP",
          "روتینگ و سوییچینگ",
          "ابزارهای تحلیل شبکه"
        ]
      }
    ]
  },
  {
    slug: "blue-team",
    title: "بلو تیم",
    icon: "🔵",
    description: "دفاع در برابر حملات سایبری، مانیتورینگ و پاسخ به حادثه.",
    courses: [
      {
        slug: "soc",
        title: "مبانی SOC",
        level: "متوسط",
        duration: "۳۰ ساعت",
        price: "۶۹۰,۰۰۰ تومان",
        description: "مرکز عملیات امنیت و پایش تهدیدات.",
        topics: [
          "SIEM و لاگ‌ها",
          "تحلیل رخداد",
          "پاسخ به حادثه",
          "ابزارهای مانیتورینگ"
        ]
      }
    ]
  },
  {
    slug: "red-team",
    title: "رد تیم",
    icon: "🔴",
    description: "تست نفوذ، اخلاقیات هک و شبیه‌سازی حملات واقعی.",
    courses: [
      {
        slug: "pentest",
        title: "تست نفوذ مقدماتی",
        level: "متوسط",
        duration: "۴۰ ساعت",
        price: "۸۹۰,۰۰۰ تومان",
        description: "اولین قدم برای ورود به دنیای تست نفوذ.",
        topics: [
          "جمع‌آوری اطلاعات",
          "اسکن و شناسایی آسیب‌پذیری",
          "اکسپلویت",
          "گزارش‌نویسی حرفه‌ای"
        ]
      }
    ]
  }
];
