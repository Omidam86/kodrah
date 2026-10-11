// ============ PYTHON EXERCISES DATA ============
const pythonExercises = [
  /* ============ مقدماتی ============ */
  {
    slug: "temp-converter",
    title: "تبدیل دما",
    icon: "🌡️",
    level: "مقدماتی",
    category: "محاسبات",
    description: "تبدیل سلسیوس به فارنهایت",
    statement: "برنامه‌ای بنویس که یک دما به سلسیوس از کاربر بگیرد و آن را به فارنهایت تبدیل کند.\n\nفرمول تبدیل: F = (C × 9/5) + 32",
    input: "دمای سلسیوس: 25",
    output: "دمای فارنهایت: 77.0",
    hints: [
      "برای گرفتن ورودی از input() استفاده کن",
      "ورودی به صورت رشته است؛ با float() به عدد اعشاری تبدیلش کن",
      "نتیجه را با f-string و دو رقم اعشار چاپ کن"
    ],
    solution: `def c_to_f(celsius):
    return (celsius * 9 / 5) + 32

c = float(input("دمای سلسیوس: "))
f = c_to_f(c)

print(f"دمای فارنهایت: {f:.1f}")`
  },
  {
    slug: "bmi",
    title: "محاسبه BMI",
    icon: "⚖️",
    level: "مقدماتی",
    category: "محاسبات",
    description: "شاخص توده بدنی و تشخیص وضعیت وزن",
    statement: "برنامه‌ای بنویس که قد (به متر) و وزن (به کیلوگرم) را از کاربر بگیرد، شاخص توده بدنی (BMI) را محاسبه کند و وضعیت وزن را اعلام کند.\n\nفرمول: BMI = وزن ÷ (قد به توان ۲)\n\nدسته‌بندی:\nکمتر از ۱۸.۵ → کمبود وزن\n۱۸.۵ تا ۲۵ → وزن نرمال\n۲۵ تا ۳۰ → اضافه وزن\nبیشتر از ۳۰ → چاقی",
    input: "وزن (kg): 70\nقد (m): 1.75",
    output: "BMI: 22.86\nوضعیت: وزن نرمال",
    hints: [
      "برای توان از عملگر ** استفاده کن",
      "برای تصمیم‌گیری از if / elif / else استفاده کن",
      "خروجی را با f-string و دو رقم اعشار (:0.2f) چاپ کن"
    ],
    solution: `weight = float(input("وزن (kg): "))
height = float(input("قد (m): "))

bmi = weight / (height ** 2)

print(f"BMI: {bmi:.2f}")

if bmi < 18.5:
    print("وضعیت: کمبود وزن")
elif bmi < 25:
    print("وضعیت: وزن نرمال")
elif bmi < 30:
    print("وضعیت: اضافه وزن")
else:
    print("وضعیت: چاقی")`
  },
  {
    slug: "even-odd",
    title: "زوج یا فرد",
    icon: "🔢",
    level: "مقدماتی",
    category: "شرطی‌ها",
    description: "تشخیص زوج یا فرد بودن یک عدد",
    statement: "برنامه‌ای بنویس که یک عدد صحیح بگیرد و مشخص کند زوج است یا فرد.",
    input: "عدد: 7",
    output: "7 فرد است",
    hints: [
      "از عملگر % (باقی‌مانده تقسیم) استفاده کن",
      "اگر n % 2 برابر ۰ بود، عدد زوج است"
    ],
    solution: `n = int(input("عدد: "))

if n % 2 == 0:
    print(f"{n} زوج است")
else:
    print(f"{n} فرد است")`
  },
  {
    slug: "max-of-three",
    title: "بزرگ‌ترین از سه عدد",
    icon: "📊",
    level: "مقدماتی",
    category: "شرطی‌ها",
    description: "پیدا کردن بزرگ‌ترین عدد بین سه عدد",
    statement: "سه عدد از کاربر بگیر و بزرگ‌ترین‌شان را چاپ کن.\n\nنکته: بدون استفاده از تابع max()",
    input: "عدد اول: 12\nعدد دوم: 45\nعدد سوم: 7",
    output: "بزرگ‌ترین: 45",
    hints: [
      "با ترکیب شرط‌ها (and) مقایسه کن",
      "می‌توانی اولین عدد را فرض کنی بزرگ‌ترین است، بعد با بقیه مقایسه کنی"
    ],
    solution: `a = float(input("عدد اول: "))
b = float(input("عدد دوم: "))
c = float(input("عدد سوم: "))

largest = a
if b > largest:
    largest = b
if c > largest:
    largest = c

print(f"بزرگ‌ترین: {largest}")`
  },
  {
    slug: "sum-1-to-n",
    title: "مجموع اعداد ۱ تا n",
    icon: "➕",
    level: "مقدماتی",
    category: "حلقه‌ها",
    description: "محاسبه مجموع اعداد از ۱ تا عدد ورودی",
    statement: "برنامه‌ای بنویس که یک عدد n از کاربر بگیرد و مجموع اعداد ۱ تا n را حساب کند.",
    input: "عدد: 10",
    output: "مجموع: 55",
    hints: [
      "از حلقه for با range(1, n + 1) استفاده کن",
      "یک متغیر برای جمع تعریف کن و در هر تکرار اضافه کن"
    ],
    solution: `n = int(input("عدد: "))

total = 0
for i in range(1, n + 1):
    total += i

print(f"مجموع: {total}")`
  },
  {
    slug: "multiplication-table",
    title: "جدول ضرب",
    icon: "✖️",
    level: "مقدماتی",
    category: "حلقه‌ها",
    description: "چاپ جدول ضرب یک عدد از ۱ تا ۱۰",
    statement: "برنامه‌ای بنویس که یک عدد بگیرد و جدول ضرب آن را از ۱ تا ۱۰ چاپ کند.",
    input: "عدد: 7",
    output: "7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n...\n7 × 10 = 70",
    hints: [
      "از حلقه for با range(1, 11) استفاده کن",
      "خروجی را با f-string فرمت کن"
    ],
    solution: `n = int(input("عدد: "))

for i in range(1, 11):
    print(f"{n} × {i} = {n * i}")`
  },

  /* ============ متوسط ============ */
  {
    slug: "factorial",
    title: "محاسبه فاکتوریل",
    icon: "❕",
    level: "متوسط",
    category: "حلقه‌ها",
    description: "محاسبه فاکتوریل یک عدد با حلقه",
    statement: "برنامه‌ای بنویس که یک عدد بگیرد و فاکتوریل آن را حساب کند.\n\nفاکتوریل n یعنی: n × (n-1) × (n-2) × ... × 2 × 1",
    input: "عدد: 5",
    output: "5! = 120",
    hints: [
      "یک متغیر با مقدار ۱ تعریف کن",
      "از حلقه for استفاده کن و در هر مرحله ضرب کن",
      "برای روش پیشرفته‌تر، از بازگشت (recursion) استفاده کن"
    ],
    solution: `n = int(input("عدد: "))

result = 1
for i in range(1, n + 1):
    result *= i

print(f"{n}! = {result}")`
  },
  {
    slug: "fibonacci",
    title: "دنباله فیبوناچی",
    icon: "🌀",
    level: "متوسط",
    category: "حلقه‌ها",
    description: "چاپ n جمله اول دنباله فیبوناچی",
    statement: "برنامه‌ای بنویس که n بگیرد و n جمله اول دنباله فیبوناچی را چاپ کند.\n\nهر جمله برابر مجموع دو جمله قبلی است. دنباله با ۰ و ۱ شروع می‌شود: 0, 1, 1, 2, 3, 5, 8, 13, ...",
    input: "چند جمله: 8",
    output: "0 1 1 2 3 5 8 13",
    hints: [
      "دو متغیر a و b با مقادیر ۰ و ۱ تعریف کن",
      "در هر مرحله: a, b = b, a + b",
      "برای چاپ در یک خط، از end=' ' در print استفاده کن"
    ],
    solution: `n = int(input("چند جمله: "))

a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b`
  },
  {
    slug: "prime-check",
    title: "عدد اول یا مرکب",
    icon: "🔍",
    level: "متوسط",
    category: "حلقه‌ها",
    description: "تشخیص اول یا مرکب بودن یک عدد",
    statement: "برنامه‌ای بنویس که یک عدد بگیرد و مشخص کند عدد اول است یا مرکب.\n\nعدد اول: عددی که فقط بر ۱ و خودش بخش‌پذیر است.",
    input: "عدد: 17",
    output: "17 اول است",
    hints: [
      "اعداد کمتر از ۲ نه اول هستند نه مرکب",
      "کافی است تا جذر عدد چک کنی: int(n ** 0.5)",
      "به محض پیدا کردن یک مقسوم، با break از حلقه خارج شو"
    ],
    solution: `n = int(input("عدد: "))

if n < 2:
    print("نه اول نه مرکب")
else:
    is_prime = True
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            is_prime = False
            break

    if is_prime:
        print(f"{n} اول است")
    else:
        print(f"{n} مرکب است")`
  },
  {
    slug: "reverse-string",
    title: "معکوس کردن رشته",
    icon: "🔄",
    level: "متوسط",
    category: "رشته‌ها",
    description: "معکوس کردن یک رشته با روش‌های مختلف",
    statement: "برنامه‌ای بنویس که یک رشته از کاربر بگیرد و آن را معکوس چاپ کند.",
    input: "رشته: python",
    output: "nohtyp",
    hints: [
      "ساده‌ترین راه: از [::-1] استفاده کن",
      "روش دیگر: با حلقه، هر کاراکتر را به ابتدای رشته جدید اضافه کن"
    ],
    solution: `s = input("رشته: ")

# روش اول: Slicing
print(s[::-1])`
  },
  {
    slug: "palindrome",
    title: "بررسی پالین‌دروم",
    icon: "🪞",
    level: "متوسط",
    category: "رشته‌ها",
    description: "تشخیص رشته‌ای که از دو طرف یکسان است",
    statement: "برنامه‌ای بنویس که یک رشته بگیرد و بررسی کند آیا پالین‌دروم است یا نه.\n\nپالین‌دروم: رشته‌ای که از چپ به راست و راست به چپ یکسان خوانده شود.",
    input: "رشته: racecar",
    output: "racecar پالین‌دروم است",
    hints: [
      "رشته را با معکوس خودش مقایسه کن",
      "برای نادیده گرفتن بزرگی و کوچکی حروف، از lower() استفاده کن"
    ],
    solution: `s = input("رشته: ").strip().lower()

# حذف فاصله‌ها
clean = s.replace(" ", "")

if clean == clean[::-1]:
    print(f"{s} پالین‌دروم است")
else:
    print(f"{s} پالین‌دروم نیست")`
  },
  {
    slug: "max-in-list",
    title: "بزرگ‌ترین عدد در لیست",
    icon: "🏆",
    level: "متوسط",
    category: "لیست‌ها",
    description: "پیدا کردن بزرگ‌ترین عدد یک لیست بدون max()",
    statement: "بدون استفاده از تابع max()، بزرگ‌ترین عدد یک لیست را پیدا کن.\n\nلیست را می‌توانی مستقیماً در کد بنویسی.",
    input: "لیست: [3, 7, 2, 9, 5]",
    output: "بزرگ‌ترین: 9",
    hints: [
      "اولین عضو لیست را فرض کن بزرگ‌ترین است",
      "در حلقه، اگر عدد بزرگ‌تری دیدی جایگزین کن"
    ],
    solution: `nums = [3, 7, 2, 9, 5]

largest = nums[0]
for n in nums:
    if n > largest:
        largest = n

print(f"بزرگ‌ترین: {largest}")`
  },

  /* ============ پیشرفته ============ */
  {
    slug: "binary-search",
    title: "جستجوی دودویی",
    icon: "🎯",
    level: "پیشرفته",
    category: "الگوریتم",
    description: "جستجوی سریع در یک لیست مرتب",
    statement: "الگوریتم جستجوی دودویی را پیاده‌سازی کن که ایندکس یک عدد را در یک لیست مرتب پیدا کند.\n\nپیچیدگی زمانی مورد انتظار: O(log n)",
    input: "لیست: [1, 3, 5, 7, 9, 11, 13]\nهدف: 7",
    output: "ایندکس: 3",
    hints: [
      "دو اشاره‌گر left و right تعریف کن",
      "در هر مرحله وسط بازه را حساب کن",
      "اگر عدد وسطی کوچک‌تر بود، left را جابجا کن؛ وگرنه right را"
    ],
    solution: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

nums = [1, 3, 5, 7, 9, 11, 13]
target = 7

idx = binary_search(nums, target)
print(f"ایندکس: {idx}")`
  },
  {
    slug: "sieve-eratosthenes",
    title: "غربال اراتوستن",
    icon: "🧮",
    level: "پیشرفته",
    category: "الگوریتم",
    description: "پیدا کردن همه اعداد اول تا n به صورت بهینه",
    statement: "همه اعداد اول کوچک‌تر یا مساوی n را با الگوریتم غربال اراتوستن پیدا کن.\n\nپیچیدگی مورد انتظار: O(n log log n)",
    input: "عدد: 30",
    output: "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]",
    hints: [
      "یک لیست بولی به اندازه n+1 بساز و همه را True کن",
      "شماره ۰ و ۱ را False کن",
      "از ۲ شروع کن، هر عدد اول را نگه دار و مضاربش را False کن"
    ],
    solution: `def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False

    return [i for i, prime in enumerate(is_prime) if prime]

n = int(input("عدد: "))
print(sieve(n))`
  },
  {
    slug: "matrix-multiply",
    title: "ضرب ماتریس",
    icon: "🔲",
    level: "پیشرفته",
    category: "الگوریتم",
    description: "ضرب دو ماتریس بدون کتابخانه خارجی",
    statement: "دو ماتریس A و B را ضرب کن و حاصل را چاپ کن.\n\nبدون استفاده از numpy یا هر کتابخانه خارجی دیگر.",
    input: "A = [[1, 2], [3, 4]]\nB = [[5, 6], [7, 8]]",
    output: "[[19, 22], [43, 50]]",
    hints: [
      "سه حلقه تودرتو لازم داری",
      "ماتریس خروجی ابعاد (سطرهای A) × (ستون‌های B) دارد",
      "هر عضو خروجی: مجموع A[i][k] × B[k][j] برای همه k"
    ],
    solution: `def multiply(A, B):
    rows_A = len(A)
    cols_A = len(A[0])
    cols_B = len(B[0])

    result = [[0] * cols_B for _ in range(rows_A)]

    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] += A[i][k] * B[k][j]

    return result

A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

print(multiply(A, B))`
  },
  {
    slug: "char-counter",
    title: "شمارش تکرار حروف",
    icon: "🔠",
    level: "پیشرفته",
    category: "دیکشنری",
    description: "شمارش تعداد تکرار هر حرف در یک رشته",
    statement: "یک رشته بگیر و تعداد تکرار هر حرف را در یک دیکشنری برگردان.\n\nحروف بزرگ و کوچک یکسان در نظر گرفته شوند و فاصله‌ها حذف شوند.",
    input: "رشته: Hello World",
    output: "{'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}",
    hints: [
      "با lower() حروف را یکسان کن",
      "با replace(' ', '') فاصله‌ها را حذف کن",
      "برای هر حرف، مقدار آن را در دیکشنری یکی افزایش بده"
    ],
    solution: `text = input("رشته: ").lower().replace(" ", "")

counter = {}
for char in text:
    counter[char] = counter.get(char, 0) + 1

print(counter)`
  }
];
