export interface Candidate {
  id: string;
  name: string;
  image: string;
  faculty: string;
  major: string;
  academicYear: number;
  platform: string;
}

export const faculties = [
  "Engineering",
  "Science",
  "Humanities",
  "Medicine",
  "Business",
];

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "علی محمدی",
    image: "/candidates/candidate1.svg",
    faculty: "Engineering",
    major: "Computer Engineering",
    academicYear: 3,
    platform:
      "ارتقای کیفیت آموزشی و برگزاری کارگاه‌های تخصصی برای دانشجویان مهندسی کامپیوتر",
  },
  {
    id: "2",
    name: "سارا احمدی",
    image: "/candidates/candidate2.svg",
    faculty: "Science",
    major: "Physics",
    academicYear: 2,
    platform:
      "توسعه فعالیت‌های پژوهشی و ایجاد ارتباط با صنعت برای دانشجویان فیزیک",
  },
  {
    id: "3",
    name: "محمد رضایی",
    image: "/candidates/candidate3.svg",
    faculty: "Humanities",
    major: "Psychology",
    academicYear: 4,
    platform:
      "برگزاری سمینارهای روانشناسی کاربردی و ارائه خدمات مشاوره به دانشجویان",
  },
  {
    id: "4",
    name: "فاطمه حسینی",
    image: "/candidates/candidate4.svg",
    faculty: "Medicine",
    major: "General Medicine",
    academicYear: 5,
    platform:
      "ارتقای سطح آموزش بالینی و ایجاد فرصت‌های کارآموزی برای دانشجویان پزشکی",
  },
  {
    id: "5",
    name: "امیر کریمی",
    image: "/candidates/candidate5.svg",
    faculty: "Business",
    major: "Business Management",
    academicYear: 3,
    platform:
      "برگزاری دوره‌های کارآفرینی و ایجاد ارتباط با شرکت‌های موفق برای کارآموزی",
  },
  {
    id: "6",
    name: "زهرا نجفی",
    image: "/candidates/candidate6.svg",
    faculty: "Engineering",
    major: "Electrical Engineering",
    academicYear: 2,
    platform:
      "توسعه پروژه‌های عملی و برگزاری مسابقات مهندسی برق برای افزایش مهارت‌های عملی",
  },
  {
    id: "7",
    name: "حسین مرادی",
    image: "/candidates/candidate7.svg",
    faculty: "Science",
    major: "Chemistry",
    academicYear: 4,
    platform:
      "تجهیز آزمایشگاه‌های شیمی و برگزاری کارگاه‌های آزمایشگاهی پیشرفته",
  },
  {
    id: "8",
    name: "مریم صادقی",
    image: "/candidates/candidate8.svg",
    faculty: "Humanities",
    major: "Literature",
    academicYear: 3,
    platform: "برگزاری جلسات نقد ادبی و انتشار مجله دانشجویی ادبیات",
  },
  {
    id: "9",
    name: "رضا جعفری",
    image: "/candidates/candidate9.svg",
    faculty: "Medicine",
    major: "Dentistry",
    academicYear: 4,
    platform: "ارتقای آموزش عملی دندانپزشکی و برگزاری دوره‌های تخصصی",
  },
  {
    id: "10",
    name: "نیلوفر محسنی",
    image: "/candidates/candidate10.svg",
    faculty: "Business",
    major: "Economics",
    academicYear: 2,
    platform: "برگزاری سمینارهای اقتصادی و دعوت از اساتید برجسته برای سخنرانی",
  },
];
