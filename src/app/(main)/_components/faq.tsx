import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-white py-16" id={"faq"}>
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          سوالات و پاسخ‌ها
        </div>
        <h2 className="mb-4 text-3xl font-bold">سوالات متداول</h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          پاسخ سوالات رایج درباره فرآیند انتخابات را اینجا بیابید.
        </p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem
              question="چگونه صلاحیت رأی دادن خود را بررسی کنم؟"
              answer="تمام دانشجویان ثبت‌نام شده با وضعیت فعال برای سال تحصیلی جاری واجد شرایط رأی دادن هستند. شما می‌توانید با ورود به پورتال دانشجویی و بررسی وضعیت ثبت‌نام خود، صلاحیت خود را تأیید کنید."
            />
            <FaqItem
              question="آیا می‌توانم به نامزدهای خارج از دانشکده خودم رأی دهم؟"
              answer="خیر، شما فقط می‌توانید به نامزدهای دانشکده خود رأی دهید. این امر اطمینان می‌دهد که نمایندگان، نیازها و چالش‌های خاص دانشکده خود را درک می‌کنند."
            />
            <FaqItem
              question="فرآیند رأی‌گیری چگونه ایمن می‌شود؟"
              answer="سیستم رأی‌گیری از اتصالات رمزگذاری شده استفاده می‌کند و نیاز به احراز هویت دو مرحله‌ای دارد. هر دانشجو فقط یک بار می‌تواند رأی دهد و تمام آرا پس از ثبت، بی‌نام می‌شوند."
            />
            <FaqItem
              question="اگر تساوی آرا رخ دهد چه اتفاقی می‌افتد؟"
              answer="در صورت تساوی آرا، یک انتخابات مجدد بین نامزدهای با آرای مساوی در مدت ۴۸ ساعت پس از اعلام نتایج اصلی برگزار خواهد شد."
            />
            <FaqItem
              question="چگونه می‌توانم در فرآیند انتخابات مشارکت کنم؟"
              answer="شما می‌توانید به عنوان ناظر انتخابات داوطلب شوید، در رویدادهای تبلیغاتی کمک کنید یا در دوره انتخاباتی بعدی به عنوان نامزد شرکت کنید. برای اطلاعات بیشتر با کمیته انتخابات تماس بگیرید."
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <AccordionItem value={question} className="rounded-lg border p-4 shadow-sm">
      <AccordionTrigger className="flex w-full justify-between text-right font-medium hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pt-4 text-right text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
