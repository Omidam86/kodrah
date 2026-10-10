// ============ CONTACT ============
const CONTACT = { telegram: "https://t.me/omix777" };

// ============ ROADMAPS DATA ============
const roadmaps = [
  /* ============ 1. مبانی برنامه‌نویسی ============ */
  {
    slug: "programming-basics",
    title: "مبانی برنامه‌نویسی",
    icon: "💻",
    description: "شروع از صفر: آشنایی با دنیای برنامه‌نویسی، شاخه‌ها و زبان‌ها.",
    sections: [
      {
        slug: "start",
        title: "شروع از صفر",
        courses: [
          { slug: "intro-to-programming", title: "مقدمه‌ای بر برنامه‌نویسی", level: "مقدماتی", duration: "۱۵ ساعت", price: "رایگان",
            description: "قبل از انتخاب مسیر، باید بدانی برنامه‌نویسی چیست، چه شاخه‌هایی دارد و کدام زبان‌ها در هر حوزه استفاده می‌شوند.",
            topics: ["برنامه‌نویسی چیست و چرا یاد بگیریم", "معرفی شاخه‌های اصلی", "معرفی زبان‌های محبوب", "چگونه مسیر مناسب خود را انتخاب کنیم", "اشتباهات رایج تازه‌کارها"] },
          { slug: "logic-thinking", title: "تفکر منطقی و الگوریتم", level: "مقدماتی", duration: "۲۰ ساعت", price: "۳۹۰,۰۰۰ تومان",
            description: "پایه‌ی هر زبان برنامه‌نویسی، تفکر الگوریتمی است.",
            topics: ["الگوریتم چیست", "فلوچارت و شبه‌کد", "متغیر، شرط، حلقه", "توابع و ساختاردهی کد", "تمرین‌های حل مسئله"] },
          { slug: "git-github", title: "Git و GitHub", level: "مقدماتی", duration: "۸ ساعت", price: "۱۹۰,۰۰۰ تومان",
            description: "ابزار ضروری هر برنامه‌نویس برای مدیریت نسخه‌ها و کار تیمی.",
            topics: ["مفاهیم پایه Git", "کامیت، برنچ، مرج", "کار با GitHub", "پول ریکوئست"] }
        ]
      }
    ]
  },

  /* ============ 2. برنامه‌نویسی وب ============ */
  {
    slug: "web",
    title: "برنامه‌نویسی وب",
    icon: "🌐",
    description: "کامل‌ترین مسیر برای ورود به دنیای وب؛ از مبانی تا فرانت، بک و فول‌استک.",
    sections: [
      {
        slug: "basics",
        title: "مبانی وب",
        courses: [
          { slug: "web-fundamentals", title: "آشنایی با دنیای وب", level: "مقدماتی", duration: "۱۰ ساعت", price: "رایگان",
            description: "قبل از ورود به فرانت یا بک، باید بفهمی وب چطور کار می‌کند.",
            topics: ["اینترنت و وب چطور کار می‌کنند", "مرورگر، سرور، پروتکل HTTP", "دامنه، هاست و DNS", "Client و Server"] },
          { slug: "web-paths", title: "معرفی مسیرهای وب", level: "مقدماتی", duration: "۶ ساعت", price: "رایگان",
            description: "فرق فرانت، بک و فول‌استک چیست و کدام برای تو مناسب‌تر است.",
            topics: ["فرانت‌اند چیست", "بک‌اند چیست", "فول‌استک چیست", "بازار کار و درآمد", "چطور انتخاب کنم"] }
        ]
      },
      {
        slug: "frontend",
        title: "فرانت‌اند",
        courses: [
          { slug: "html-css", title: "HTML و CSS از صفر", level: "مقدماتی", duration: "۲۰ ساعت", price: "۳۹۰,۰۰۰ تومان",
            description: "پایه‌ای‌ترین دوره برای ساخت صفحات وب.",
            topics: ["ساختار HTML", "انتخابگرهای CSS", "Flexbox و Grid", "ریسپانسیو"] },
          { slug: "js-basics", title: "JavaScript پایه", level: "مقدماتی", duration: "۲۵ ساعت", price: "۴۵۰,۰۰۰ تومان",
            description: "زبان اصلی وب برای جان دادن به صفحات.",
            topics: ["متغیرها، توابع، حلقه‌ها", "DOM و رویدادها", "آرایه‌ها و آبجکت‌ها", "Fetch API"] },
          { slug: "js-advanced", title: "JavaScript پیشرفته", level: "متوسط", duration: "۳۰ ساعت", price: "۵۹۰,۰۰۰ تومان",
            description: "مفاهیم پیشرفته جاوااسکریپت.",
            topics: ["Closure و Scope", "Async/Await", "ES6+", "الگوهای طراحی"] },
          { slug: "react", title: "React", level: "متوسط", duration: "۳۰ ساعت", price: "۶۵۰,۰۰۰ تومان",
            description: "محبوب‌ترین کتابخانه فرانت‌اند.",
            topics: ["کامپوننت‌ها و Props", "State و Hookها", "React Router", "Context"] },
          { slug: "tailwind", title: "Tailwind CSS", level: "متوسط", duration: "۱۰ ساعت", price: "۲۵۰,۰۰۰ تومان",
            description: "فریم‌ورک CSS مدرن.",
            topics: ["Utility-first", "کلاس‌های اصلی", "ریسپانسیو", "سفارشی‌سازی"] }
        ]
      },
      {
        slug: "backend",
        title: "بک‌اند",
        courses: [
          { slug: "node-js", title: "Node.js و Express", level: "متوسط", duration: "۳۵ ساعت", price: "۵۹۰,۰۰۰ تومان",
            description: "با Node.js جاوااسکریپت سمت سرور بنویس.",
            topics: ["ماژول‌ها و NPM", "Express", "میان‌افزارها", "JWT"] },
          { slug: "python-backend", title: "Python و Django", level: "متوسط", duration: "۴۰ ساعت", price: "۶۹۰,۰۰۰ تومان",
            description: "محبوب‌ترین زبان بک‌اند با جنگو.",
            topics: ["پایتون برای وب", "Django و MVC", "ORM", "احراز هویت"] },
          { slug: "databases", title: "پایگاه داده (SQL و MongoDB)", level: "متوسط", duration: "۲۸ ساعت", price: "۴۹۰,۰۰۰ تومان",
            description: "طراحی و مدیریت پایگاه داده.",
            topics: ["MySQL", "طراحی schema", "MongoDB", "بهینه‌سازی"] },
          { slug: "rest-api", title: "طراحی REST API", level: "متوسط", duration: "۱۵ ساعت", price: "۳۹۰,۰۰۰ تومان",
            description: "اصول طراحی API تمیز.",
            topics: ["اصول REST", "طراحی endpoint", "کدهای HTTP", "Swagger"] }
        ]
      },
      {
        slug: "fullstack",
        title: "فول‌استک",
        courses: [
          { slug: "next-js", title: "Next.js", level: "پیشرفته", duration: "۴۰ ساعت", price: "۷۹۰,۰۰۰ تومان",
            description: "فریم‌ورک فول‌استک ری‌اکت.",
            topics: ["SSR و SSG", "App Router", "API Routes", "Deploy"] },
          { slug: "mern-stack", title: "پروژه کامل MERN", level: "پیشرفته", duration: "۵۰ ساعت", price: "۸۹۰,۰۰۰ تومان",
            description: "ساخت اپلیکیشن واقعی با MongoDB، Express، React، Node.js.",
            topics: ["معماری پروژه", "API با Express", "اتصال به React", "Deploy"] }
        ]
      }
    ]
  },

  /* ============ 3. شبکه ============ */
  {
    slug: "network",
    title: "شبکه",
    icon: "🛰️",
    description: "ورود به دنیای شبکه؛ از مبانی تا سیسکو، مایکروسافت و لینوکس.",
    sections: [
      {
        slug: "basics",
        title: "مبانی شبکه",
        courses: [
          { slug: "intro-to-network", title: "مقدمه‌ای بر شبکه", level: "مقدماتی", duration: "۱۲ ساعت", price: "رایگان",
            description: "شبکه چیست، چطور کار می‌کند و چرا اینقدر مهم است.",
            topics: ["شبکه چیست", "انواع شبکه: LAN، WAN", "توپولوژی‌ها", "تجهیزات پایه", "مدل OSI"] },
          { slug: "network-paths", title: "معرفی شاخه‌های شبکه", level: "مقدماتی", duration: "۵ ساعت", price: "رایگان",
            description: "قبل از انتخاب، باید بدانی چه مسیرهایی داری.",
            topics: ["سیسکو و CCNA/CCNP", "مایکروسافت و Windows Server", "لینوکس", "Cloud Networking", "انتخاب مسیر"] }
        ]
      },
      {
        slug: "cisco",
        title: "سیسکو (Cisco)",
        courses: [
          { slug: "ccna", title: "دوره CCNA", level: "متوسط", duration: "۶۰ ساعت", price: "۱,۲۹۰,۰۰۰ تومان",
            description: "مدرک بین‌المللی سیسکو برای ورود حرفه‌ای.",
            topics: ["روتینگ و سوییچینگ", "پیکربندی روتر و سوییچ", "VLAN و Trunk", "امنیت سیسکو"] }
        ]
      },
      {
        slug: "microsoft",
        title: "مایکروسافت (Microsoft)",
        courses: [
          { slug: "windows-server", title: "Windows Server", level: "متوسط", duration: "۴۵ ساعت", price: "۹۹۰,۰۰۰ تومان",
            description: "مدیریت سرورهای ویندوز در محیط سازمانی.",
            topics: ["نصب و پیکربندی", "Active Directory", "DNS و DHCP", "Group Policy"] }
        ]
      },
      {
        slug: "linux",
        title: "لینوکس و سایر",
        courses: [
          { slug: "linux-network", title: "شبکه در لینوکس", level: "متوسط", duration: "۳۰ ساعت", price: "۶۹۰,۰۰۰ تومان",
            description: "مدیریت شبکه و سرویس‌ها در لینوکس.",
            topics: ["دستورات شبکه", "iptables", "DNS و Web Server", "مانیتورینگ"] }
        ]
      }
    ]
  },

  /* ============ 4. امنیت ============ */
  {
    slug: "security",
    title: "امنیت",
    icon: "🛡️",
    description: "ورود به دنیای امنیت سایبری؛ از مبانی تا رد تیم و بلو تیم.",
    prerequisite: {
      text: "قبل از شروع این مسیر، باید مسیر شبکه را گذرانده باشید.",
      link: "network",
      linkText: "مشاهده مسیر شبکه"
    },
    sections: [
      {
        slug: "basics",
        title: "مبانی امنیت",
        courses: [
          { slug: "intro-to-security", title: "مقدمه‌ای بر امنیت سایبری", level: "مقدماتی", duration: "۱۵ ساعت", price: "رایگان",
            description: "امنیت سایبری چیست و چه شاخه‌هایی دارد.",
            topics: ["امنیت سایبری چیست", "مثلث CIA", "انواع تهدیدات", "وظایف متخصص امنیت", "بازار کار"] },
          { slug: "security-paths", title: "معرفی شاخه‌های امنیت", level: "مقدماتی", duration: "۶ ساعت", price: "رایگان",
            description: "رد تیم و بلو تیم چه تفاوتی دارند.",
            topics: ["رد تیم چیست", "بلو تیم چیست", "هکر کلاه سفید/خاکستری/سیاه", "شاخه‌های دیگر", "انتخاب مسیر"] }
        ]
      },
      {
        slug: "red-team",
        title: "رد تیم (Red Team)",
        courses: [
          { slug: "pentest", title: "تست نفوذ مقدماتی", level: "متوسط", duration: "۴۰ ساعت", price: "۸۹۰,۰۰۰ تومان",
            description: "اولین قدم برای ورود به تست نفوذ.",
            topics: ["جمع‌آوری اطلاعات", "اسکن آسیب‌پذیری", "اکسپلویت", "گزارش‌نویسی"] },
          { slug: "web-pentest", title: "تست نفوذ وب", level: "پیشرفته", duration: "۴۵ ساعت", price: "۹۹۰,۰۰۰ تومان",
            description: "تست امنیت اپلیکیشن‌های وب.",
            topics: ["OWASP Top 10", "SQL Injection و XSS", "CSRF و SSRF", "Burp Suite"] }
        ]
      },
      {
        slug: "blue-team",
        title: "بلو تیم (Blue Team)",
        courses: [
          { slug: "soc", title: "مبانی SOC", level: "متوسط", duration: "۳۰ ساعت", price: "۶۹۰,۰۰۰ تومان",
            description: "مرکز عملیات امنیت و پایش تهدیدات.",
            topics: ["SIEM و لاگ‌ها", "تحلیل رخداد", "پاسخ به حادثه", "مانیتورینگ"] },
          { slug: "digital-forensics", title: "جرم‌شناسی دیجیتال", level: "پیشرفته", duration: "۳۵ ساعت", price: "۸۹۰,۰۰۰ تومان",
            description: "بررسی آثار حملات سایبری.",
            topics: ["اصول Forensics", "تحلیل حافظه و دیسک", "ردیابی مهاجم", "گزارش‌نویسی"] }
        ]
      }
    ]
  }
];
