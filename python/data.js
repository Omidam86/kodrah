/* ============================================
   PYTHON — Exercises Data
   Structure required by python/app.js
   ============================================ */

const pythonExercises = [
  /* ============ مقدماتی ============ */
  {
    slug: 'temp-converter',
    title: 'تبدیل دما',
    icon: '🌡️',
    level: 'مقدماتی',
    category: 'محاسبات',
    description: 'تبدیل سلسیوس به فارنهایت',
    statement: 'برنامه‌ای بنویس که یک دما به سلسیوس از کاربر بگیرد و آن را به فارنهایت تبدیل کند.\n\nفرمول تبدیل: F = (C × 9/5) + 32',
    input: 'دمای سلسیوس: 25',
    output: 'دمای فارنهایت: 77.0',
    hints: [
      'برای گرفتن ورودی از input() استفاده کن',
      'ورودی به صورت رشته است؛ با float() به عدد اعشاری تبدیلش کن',
      'نتیجه را با f-string و یک رقم اعشار چاپ کن'
    ],
    solution:
      'def c_to_f(celsius):\n' +
      '    return (celsius * 9 / 5) + 32\n' +
      '\n' +
      'c = float(input("دمای سلسیوس: "))\n' +
      'f = c_to_f(c)\n' +
      '\n' +
      'print(f"دمای فارنهایت: {f:.1f}")'
  },
  {
    slug: 'bmi',
    title: 'محاسبه BMI',
    icon: '⚖️',
    level: 'مقدماتی',
    category: 'محاسبات',
    description: 'شاخص توده بدنی و تشخیص وضعیت وزن',
    statement: 'برنامه‌ای بنویس که قد (به متر) و وزن (به کیلوگرم) را از کاربر بگیرد، شاخص توده بدنی (BMI) را محاسبه کند و وضعیت وزن را اعلام کند.\n\nفرمول: BMI = وزن ÷ (قد به توان ۲)\n\nدسته‌بندی:\nکمتر از ۱۸.۵ → کمبود وزن\n۱۸.۵ تا ۲۵ → وزن نرمال\n۲۵ تا ۳۰ → اضافه وزن\nبیشتر از ۳۰ → چاقی',
    input: 'وزن (kg): 70\nقد (m): 1.75',
    output: 'BMI: 22.86\nوضعیت: وزن نرمال',
    hints: [
      'برای توان از عملگر ** استفاده کن',
      'برای تصمیم‌گیری از if / elif / else استفاده کن',
      'خروجی را با f-string و دو رقم اعشار (:0.2f) چاپ کن'
    ],
    solution:
      'weight = float(input("وزن (kg): "))\n' +
      'height = float(input("قد (m): "))\n' +
      '\n' +
      'bmi = weight / (height ** 2)\n' +
      '\n' +
      'print(f"BMI: {bmi:.2f}")\n' +
      '\n' +
      'if bmi < 18.5:\n' +
      '    print("وضعیت: کمبود وزن")\n' +
      'elif bmi < 25:\n' +
      '    print("وضعیت: وزن نرمال")\n' +
      'elif bmi < 30:\n' +
      '    print("وضعیت: اضافه وزن")\n' +
      'else:\n' +
      '    print("وضعیت: چاقی")'
  },
  {
    slug: 'even-odd',
    title: 'زوج یا فرد',
    icon: '🔢',
    level: 'مقدماتی',
    category: 'شرطی‌ها',
    description: 'تشخیص زوج یا فرد بودن یک عدد',
    statement: 'برنامه‌ای بنویس که یک عدد صحیح بگیرد و مشخص کند زوج است یا فرد.',
    input: 'عدد: 7',
    output: '7 فرد است',
    hints: [
      'از عملگر % (باقی‌مانده تقسیم) استفاده کن',
      'اگر n % 2 برابر ۰ بود، عدد زوج است'
    ],
    solution:
      'n = int(input("عدد: "))\n' +
      '\n' +
      'if n % 2 == 0:\n' +
      '    print(f"{n} زوج است")\n' +
      'else:\n' +
      '    print(f"{n} فرد است")'
  },
  {
    slug: 'max-of-three',
    title: 'بزرگ‌ترین از سه عدد',
    icon: '📊',
    level: 'مقدماتی',
    category: 'شرطی‌ها',
    description: 'پیدا کردن بزرگ‌ترین عدد بین سه عدد',
    statement: 'سه عدد از کاربر بگیر و بزرگ‌ترین‌شان را چاپ کن.\n\nنکته: بدون استفاده از تابع max()',
    input: 'عدد اول: 12\nعدد دوم: 45\nعدد سوم: 7',
    output: 'بزرگ‌ترین: 45',
    hints: [
      'اولین عدد را فرض کن بزرگ‌ترین است',
      'با بقیه عددها مقایسه کن و در صورت بزرگ‌تر بودن، جایگزین کن'
    ],
    solution:
      'a = float(input("عدد اول: "))\n' +
      'b = float(input("عدد دوم: "))\n' +
      'c = float(input("عدد سوم: "))\n' +
      '\n' +
      'largest = a\n' +
      'if b > largest:\n' +
      '    largest = b\n' +
      'if c > largest:\n' +
      '    largest = c\n' +
      '\n' +
      'print(f"بزرگ‌ترین: {largest}")'
  },
  {
    slug: 'sum-1-to-n',
    title: 'مجموع اعداد ۱ تا n',
    icon: '➕',
    level: 'مقدماتی',
    category: 'حلقه‌ها',
    description: 'محاسبه مجموع اعداد از ۱ تا عدد ورودی',
    statement: 'برنامه‌ای بنویس که یک عدد n از کاربر بگیرد و مجموع اعداد ۱ تا n را حساب کند.',
    input: 'عدد: 10',
    output: 'مجموع: 55',
    hints: [
      'از حلقه for با range(1, n + 1) استفاده کن',
      'یک متغیر برای جمع تعریف کن و در هر تکرار اضافه کن'
    ],
    solution:
      'n = int(input("عدد: "))\n' +
      '\n' +
      'total = 0\n' +
      'for i in range(1, n + 1):\n' +
      '    total += i\n' +
      '\n' +
      'print(f"مجموع: {total}")'
  },
  {
    slug: 'multiplication-table',
    title: 'جدول ضرب',
    icon: '✖️',
    level: 'مقدماتی',
    category: 'حلقه‌ها',
    description: 'چاپ جدول ضرب یک عدد از ۱ تا ۱۰',
    statement: 'برنامه‌ای بنویس که یک عدد بگیرد و جدول ضرب آن را از ۱ تا ۱۰ چاپ کند.',
    input: 'عدد: 7',
    output: '7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n...\n7 × 10 = 70',
    hints: [
      'از حلقه for با range(1, 11) استفاده کن',
      'خروجی را با f-string فرمت کن'
    ],
    solution:
      'n = int(input("عدد: "))\n' +
      '\n' +
      'for i in range(1, 11):\n' +
      '    print(f"{n} × {i} = {n * i}")'
  },

  /* ============ متوسط ============ */
  {
    slug: 'factorial',
    title: 'محاسبه فاکتوریل',
    icon: '❕',
    level: 'متوسط',
    category: 'حلقه‌ها',
    description: 'محاسبه فاکتوریل یک عدد با حلقه',
    statement: 'برنامه‌ای بنویس که یک عدد بگیرد و فاکتوریل آن را حساب کند.\n\nفاکتوریل n یعنی: n × (n-1) × (n-2) × ... × 2 × 1',
    input: 'عدد: 5',
    output: '5! = 120',
    hints: [
      'یک متغیر با مقدار ۱ تعریف کن',
      'از حلقه for استفاده کن و در هر مرحله ضرب کن',
      'برای روش پیشرفته‌تر، از بازگشت (recursion) استفاده کن'
    ],
    solution:
      'n = int(input("عدد: "))\n' +
      '\n' +
      'result = 1\n' +
      'for i in range(1, n + 1):\n' +
      '    result *= i\n' +
      '\n' +
      'print(f"{n}! = {result}")'
  },
  {
    slug: 'fibonacci',
    title: 'دنباله فیبوناچی',
    icon: '🌀',
    level: 'متوسط',
    category: 'حلقه‌ها',
    description: 'چاپ n جمله اول دنباله فیبوناچی',
    statement: 'برنامه‌ای بنویس که n بگیرد و n جمله اول دنباله فیبوناچی را چاپ کند.\n\nهر جمله برابر مجموع دو جمله قبلی است. دنباله با ۰ و ۱ شروع می‌شود: 0, 1, 1, 2, 3, 5, 8, 13, ...',
    input: 'چند جمله: 8',
    output: '0 1 1 2 3 5 8 13',
    hints: [
      'دو متغیر a و b با مقادیر ۰ و ۱ تعریف کن',
      'در هر مرحله: a, b = b, a + b',
      'برای چاپ در یک خط، از end=" " در print استفاده کن'
    ],
    solution:
      'n = int(input("چند جمله: "))\n' +
      '\n' +
      'a, b = 0, 1\n' +
      'for _ in range(n):\n' +
      '    print(a, end=" ")\n' +
      '    a, b = b, a + b'
  },
  {
    slug: 'prime-check',
    title: 'عدد اول یا مرکب',
    icon: '🔍',
    level: 'متوسط',
    category: 'حلقه‌ها',
    description: 'تشخیص اول یا مرکب بودن یک عدد',
    statement: 'برنامه‌ای بنویس که یک عدد بگیرد و مشخص کند عدد اول است یا مرکب.\n\nعدد اول: عددی که فقط بر ۱ و خودش بخش‌پذیر است.',
    input: 'عدد: 17',
    output: '17 اول است',
    hints: [
      'اعداد کمتر از ۲ نه اول هستند نه مرکب',
      'کافی است تا جذر عدد چک کنی: int(n ** 0.5)',
      'به محض پیدا کردن یک مقسوم، با break از حلقه خارج شو'
    ],
    solution:
      'n = int(input("عدد: "))\n' +
      '\n' +
      'if n < 2:\n' +
      '    print("نه اول نه مرکب")\n' +
      'else:\n' +
      '    is_prime = True\n' +
      '    for i in range(2, int(n ** 0.5) + 1):\n' +
      '        if n % i == 0:\n' +
      '            is_prime = False\n' +
      '            break\n' +
      '\n' +
      '    if is_prime:\n' +
      '        print(f"{n} اول است")\n' +
      '    else:\n' +
      '        print(f"{n} مرکب است")'
  },
  {
    slug: 'reverse-string',
    title: 'معکوس کردن رشته',
    icon: '🔄',
    level: 'متوسط',
    category: 'رشته‌ها',
    description: 'معکوس کردن یک رشته با روش‌های مختلف',
    statement: 'برنامه‌ای بنویس که یک رشته از کاربر بگیرد و آن را معکوس چاپ کند.',
    input: 'رشته: python',
    output: 'nohtyp',
    hints: [
      'ساده‌ترین راه: از [::-1] استفاده کن',
      'روش دیگر: با حلقه، هر کاراکتر را به ابتدای رشته جدید اضافه کن'
    ],
    solution:
      's = input("رشته: ")\n' +
      '\n' +
      '# روش اول: Slicing\n' +
      'print(s[::-1])'
  },
  {
    slug: 'palindrome',
    title: 'بررسی پالین‌دروم',
    icon: '🪞',
    level: 'متوسط',
    category: 'رشته‌ها',
    description: 'تشخیص رشته‌ای که از دو طرف یکسان است',
    statement: 'برنامه‌ای بنویس که یک رشته بگیرد و بررسی کند آیا پالین‌دروم است یا نه.\n\nپالین‌دروم: رشته‌ای که از چپ به راست و راست به چپ یکسان خوانده شود.',
    input: 'رشته: racecar',
    output: 'racecar پالین‌دروم است',
    hints: [
      'رشته را با معکوس خودش مقایسه کن',
      'برای نادیده گرفتن بزرگی و کوچکی حروف، از lower() استفاده کن'
    ],
    solution:
      's = input("رشته: ").strip().lower()\n' +
      '\n' +
      '# حذف فاصله‌ها\n' +
      'clean = s.replace(" ", "")\n' +
      '\n' +
      'if clean == clean[::-1]:\n' +
      '    print(f"{s} پالین‌دروم است")\n' +
      'else:\n' +
      '    print(f"{s} پالین‌دروم نیست")'
  },
  {
    slug: 'max-in-list',
    title: 'بزرگ‌ترین عدد در لیست',
    icon: '🏆',
    level: 'متوسط',
    category: 'لیست‌ها',
    description: 'پیدا کردن بزرگ‌ترین عدد یک لیست بدون max()',
    statement: 'بدون استفاده از تابع max()، بزرگ‌ترین عدد یک لیست را پیدا کن.\n\nلیست را می‌توانی مستقیماً در کد بنویسی.',
    input: 'لیست: [3, 7, 2, 9, 5]',
    output: 'بزرگ‌ترین: 9',
    hints: [
      'اولین عضو لیست را فرض کن بزرگ‌ترین است',
      'در حلقه، اگر عدد بزرگ‌تری دیدی جایگزین کن'
    ],
    solution:
      'nums = [3, 7, 2, 9, 5]\n' +
      '\n' +
      'largest = nums[0]\n' +
      'for n in nums:\n' +
      '    if n > largest:\n' +
      '        largest = n\n' +
      '\n' +
      'print(f"بزرگ‌ترین: {largest}")'
  },

  /* ============ پیشرفته ============ */
  {
    slug: 'binary-search',
    title: 'جستجوی دودویی',
    icon: '🎯',
    level: 'پیشرفته',
    category: 'الگوریتم',
    description: 'جستجوی سریع در یک لیست مرتب',
    statement: 'الگوریتم جستجوی دودویی را پیاده‌سازی کن که ایندکس یک عدد را در یک لیست مرتب پیدا کند.\n\nپیچیدگی زمانی مورد انتظار: O(log n)',
    input: 'لیست: [1, 3, 5, 7, 9, 11, 13]\nهدف: 7',
    output: 'ایندکس: 3',
    hints: [
      'دو اشاره‌گر left و right تعریف کن',
      'در هر مرحله وسط بازه را حساب کن',
      'اگر عدد وسطی کوچک‌تر بود، left را جابجا کن؛ وگرنه right را'
    ],
    solution:
      'def binary_search(arr, target):\n' +
      '    left, right = 0, len(arr) - 1\n' +
      '\n' +
      '    while left <= right:\n' +
      '        mid = (left + right) // 2\n' +
      '\n' +
      '        if arr[mid] == target:\n' +
      '            return mid\n' +
      '        elif arr[mid] < target:\n' +
      '            left = mid + 1\n' +
      '        else:\n' +
      '            right = mid - 1\n' +
      '\n' +
      '    return -1\n' +
      '\n' +
      'nums = [1, 3, 5, 7, 9, 11, 13]\n' +
      'target = 7\n' +
      '\n' +
      'idx = binary_search(nums, target)\n' +
      'print(f"ایندکس: {idx}")'
  },
  {
    slug: 'sieve-eratosthenes',
    title: 'غربال اراتوستن',
    icon: '🧮',
    level: 'پیشرفته',
    category: 'الگوریتم',
    description: 'پیدا کردن همه اعداد اول تا n به صورت بهینه',
    statement: 'همه اعداد اول کوچک‌تر یا مساوی n را با الگوریتم غربال اراتوستن پیدا کن.\n\nپیچیدگی مورد انتظار: O(n log log n)',
    input: 'عدد: 30',
    output: '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]',
    hints: [
      'یک لیست بولی به اندازه n+1 بساز و همه را True کن',
      'شماره ۰ و ۱ را False کن',
      'از ۲ شروع کن، هر عدد اول را نگه دار و مضاربش را False کن'
    ],
    solution:
      'def sieve(n):\n' +
      '    is_prime = [True] * (n + 1)\n' +
      '    is_prime[0] = is_prime[1] = False\n' +
      '\n' +
      '    for i in range(2, int(n ** 0.5) + 1):\n' +
      '        if is_prime[i]:\n' +
      '            for j in range(i * i, n + 1, i):\n' +
      '                is_prime[j] = False\n' +
      '\n' +
      '    return [i for i, prime in enumerate(is_prime) if prime]\n' +
      '\n' +
      'n = int(input("عدد: "))\n' +
      'print(sieve(n))'
  },
  {
    slug: 'matrix-multiply',
    title: 'ضرب ماتریس',
    icon: '🔲',
    level: 'پیشرفته',
    category: 'الگوریتم',
    description: 'ضرب دو ماتریس بدون کتابخانه خارجی',
    statement: 'دو ماتریس A و B را ضرب کن و حاصل را چاپ کن.\n\nبدون استفاده از numpy یا هر کتابخانه خارجی دیگر.',
    input: 'A = [[1, 2], [3, 4]]\nB = [[5, 6], [7, 8]]',
    output: '[[19, 22], [43, 50]]',
    hints: [
      'سه حلقه تودرتو لازم داری',
      'ماتریس خروجی ابعاد (سطرهای A) × (ستون‌های B) دارد',
      'هر عضو خروجی: مجموع A[i][k] × B[k][j] برای همه k'
    ],
    solution:
      'def multiply(A, B):\n' +
      '    rows_A = len(A)\n' +
      '    cols_A = len(A[0])\n' +
      '    cols_B = len(B[0])\n' +
      '\n' +
      '    result = [[0] * cols_B for _ in range(rows_A)]\n' +
      '\n' +
      '    for i in range(rows_A):\n' +
      '        for j in range(cols_B):\n' +
      '            for k in range(cols_A):\n' +
      '                result[i][j] += A[i][k] * B[k][j]\n' +
      '\n' +
      '    return result\n' +
      '\n' +
      'A = [[1, 2], [3, 4]]\n' +
      'B = [[5, 6], [7, 8]]\n' +
      '\n' +
      'print(multiply(A, B))'
  },
  {
    slug: 'char-counter',
    title: 'شمارش تکرار حروف',
    icon: '🔠',
    level: 'پیشرفته',
    category: 'دیکشنری',
    description: 'شمارش تعداد تکرار هر حرف در یک رشته',
    statement: 'یک رشته بگیر و تعداد تکرار هر حرف را در یک دیکشنری برگردان.\n\nحروف بزرگ و کوچک یکسان در نظر گرفته شوند و فاصله‌ها حذف شوند.',
    input: 'رشته: Hello World',
    output: "{'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}",
    hints: [
      'با lower() حروف را یکسان کن',
      'با replace(" ", "") فاصله‌ها را حذف کن',
      'برای هر حرف، مقدار آن را در دیکشنری یکی افزایش بده'
    ],
    solution:
      'text = input("رشته: ").lower().replace(" ", "")\n' +
      '\n' +
      'counter = {}\n' +
      'for char in text:\n' +
      '    counter[char] = counter.get(char, 0) + 1\n' +
      '\n' +
      'print(counter)'
  }
];