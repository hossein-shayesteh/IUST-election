import Link from "next/link";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Separator } from "@/src/components/ui/separator";

import Candidates from "@/src/app/(main)/_components/candidates";
import ElectionInformation from "@/src/app/(main)/_components/election-information";
import HeroSection from "@/src/app/(main)/_components/hero-section";
import Timeline from "@/src/app/(main)/_components/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Election Information */}
      <ElectionInformation />

      {/* Election Timeline */}
      <Timeline />

      {/* Candidates Section */}
      <Candidates />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-gray-600">
            Find answers to common questions about the election process.
          </p>

          <div className="mx-auto max-w-3xl text-left">
            <Accordion type="single" collapsible className="space-y-4">
              <FaqItem
                question="How do I verify my eligibility to vote?"
                answer="All registered students with active status for the current academic year are eligible to vote. You can verify your status by logging into the student portal and checking your enrollment status."
              />
              <FaqItem
                question="Can I vote for candidates outside my faculty?"
                answer="No, you can only vote for candidates within your own faculty. This ensures that representatives understand the specific needs and challenges of their faculty."
              />
              <FaqItem
                question="How is the voting process secured?"
                answer="The voting system uses encrypted connections and requires two-factor authentication. Each student can only vote once, and all votes are anonymized after submission."
              />
              <FaqItem
                question="What happens if there's a tie?"
                answer="In case of a tie, a runoff election will be held between the tied candidates within 48 hours of the original results announcement."
              />
              <FaqItem
                question="How can I get involved in the election process?"
                answer="You can volunteer as an election observer, help with campaign events, or consider running as a candidate in the next election cycle. Contact the election committee for more information."
              />
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">UniElect</h2>
              <p className="text-gray-400">Student Association Elections</p>
            </div>
            <nav className="flex flex-wrap gap-8">
              <Link
                href="/public"
                className="transition-colors hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/candidates"
                className="transition-colors hover:text-blue-400"
              >
                Candidates
              </Link>
              <Link
                href="/schedule"
                className="transition-colors hover:text-blue-400"
              >
                Schedule
              </Link>
              <Link
                href="/faq"
                className="transition-colors hover:text-blue-400"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-blue-400"
              >
                Contact
              </Link>
            </nav>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>© 2023 UniElect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for FAQ items
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem
      value={question}
      className="rounded-lg border p-2 text-right"
    >
      <AccordionTrigger className="text-left font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pt-2 text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
