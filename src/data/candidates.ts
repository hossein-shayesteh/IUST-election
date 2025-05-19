export interface Candidate {
  id: string;
  name: string;
  image: string;
  faculty: Faculties;
  reconciliation: string;
  academicYear: number;
  platform: string;
  tags?: string[];
}

export enum Faculties {
  CivilEngineering = "مهندسی عمران",
  MechanicalEngineering = "مهندسی مکانیک",
  ChemicalEngineering = "مهندسی شیمی",
  BiomedicalEngineering = "مهندسی پزشکی",
  ElectricalEngineering = "مهندسی برق",
}

export const AllCandidates: Candidate[] = [
  {
    id: "1",
    name: "علی محمدی",
    image: "/profile.jpg",
    faculty: Faculties.ElectricalEngineering,
    reconciliation: "Computer Engineering",
    academicYear: 3,
    platform:
      "ارتقای کیفیت آموزشی و برگزاری کارگاه‌های تخصصی برای دانشجویان مهندسی کامپیوتر",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "2",
    name: "سارا احمدی",
    image: "/profile.jpg",
    faculty: Faculties.MechanicalEngineering,
    reconciliation: "Physics",
    academicYear: 2,
    platform:
      "توسعه فعالیت‌های پژوهشی و ایجاد ارتباط با صنعت برای دانشجویان فیزیک",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "3",
    name: "محمد رضایی",
    image: "/profile.jpg",
    faculty: Faculties.ChemicalEngineering,
    reconciliation: "Psychology",
    academicYear: 4,
    platform:
      "برگزاری سمینارهای روانشناسی کاربردی و ارائه خدمات مشاوره به دانشجویان",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "4",
    name: "فاطمه حسینی",
    image: "/profile.jpg",
    faculty: Faculties.BiomedicalEngineering,
    reconciliation: "General Medicine",
    academicYear: 5,
    platform:
      "ارتقای سطح آموزش بالینی و ایجاد فرصت‌های کارآموزی برای دانشجویان پزشکی",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "5",
    name: "امیر کریمی",
    image: "/profile.jpg",
    faculty: Faculties.ElectricalEngineering,
    reconciliation: "Business Management",
    academicYear: 3,
    platform:
      "برگزاری دوره‌های کارآفرینی و ایجاد ارتباط با شرکت‌های موفق برای کارآموزی",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "6",
    name: "زهرا نجفی",
    image: "/profile.jpg",
    faculty: Faculties.CivilEngineering,
    reconciliation: "Electrical Engineering",
    academicYear: 2,
    platform:
      "توسعه پروژه‌های عملی و برگزاری مسابقات مهندسی برق برای افزایش مهارت‌های عملی",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "7",
    name: "حسین مرادی",
    image: "/profile.jpg",
    faculty: Faculties.MechanicalEngineering,
    reconciliation: "Chemistry",
    academicYear: 4,
    platform:
      "تجهیز آزمایشگاه‌های شیمی و برگزاری کارگاه‌های آزمایشگاهی پیشرفته",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "8",
    name: "مریم صادقی",
    image: "/profile.jpg",
    faculty: Faculties.ChemicalEngineering,
    reconciliation: "Literature",
    academicYear: 3,
    platform: "برگزاری جلسات نقد ادبی و انتشار مجله دانشجویی ادبیات",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "9",
    name: "رضا جعفری",
    image: "/profile.jpg",
    faculty: Faculties.BiomedicalEngineering,
    reconciliation: "Dentistry",
    academicYear: 4,
    platform: "ارتقای آموزش عملی دندانپزشکی و برگزاری دوره‌های تخصصی",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
  {
    id: "10",
    name: "نیلوفر محسنی",
    image: "/profile.jpg",
    faculty: Faculties.ElectricalEngineering,
    reconciliation: "Economics",
    academicYear: 2,
    platform: "برگزاری سمینارهای اقتصادی و دعوت از اساتید برجسته برای سخنرانی",
    tags: ["پژوهش", "نوآوری", "دسترسی‌پذیری"],
  },
];
