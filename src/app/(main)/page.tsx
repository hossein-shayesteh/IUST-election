import Image from "next/image";
import Link from "next/link";

// Data
import { candidates, faculties } from "@/src/data/candidates";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";

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
      <section className="py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            MEET THE CANDIDATES
          </div>
          <h2 className="mb-4 text-3xl font-bold">Candidates by Faculty</h2>
          <p className="mx-auto mb-12 max-w-3xl text-gray-600">
            Get to know the students who are running to represent your interests
            in the student scientific association.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button variant="default" className="rounded-full">
              All Faculties
            </Button>
            {faculties.map((faculty) => (
              <Button key={faculty} variant="outline" className="rounded-full">
                {faculty}
              </Button>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {candidates.slice(0, 6).map((candidate) => (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                image={candidate.image}
                faculty={candidate.faculty}
                major={candidate.major}
                year={candidate.academicYear}
                platform={candidate.platform}
                position={
                  candidate.id === "1"
                    ? "President"
                    : candidate.id === "2"
                      ? "Vice President"
                      : "Secretary"
                }
              />
            ))}
          </div>

          <Button asChild variant="outline" className="mt-8">
            <Link href="/candidates">View All Engineering Candidates</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            STUDENT VOICES
          </div>
          <h2 className="mb-4 text-3xl font-bold">Why Your Vote Matters</h2>
          <p className="mx-auto mb-12 max-w-3xl text-gray-600">
            Hear from your fellow students about the impact of student
            association elections.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="The student association helped secure more research funding for our department last year. Your vote directly impacts these kinds of initiatives."
              name="Hamid Rasouli"
              department="Physics Department"
              image="/testimonials/student1.jpg"
            />
            <TestimonialCard
              quote="I saw firsthand how our representatives advocated for better lab equipment. The right candidates make a real difference in our academic experience."
              name="Leila Akbari"
              department="Chemistry Department"
              image="/testimonials/student2.jpg"
            />
            <TestimonialCard
              quote="The student representatives organized international conferences that opened networking opportunities I wouldn't have had otherwise. Voting matters!"
              name="Mohammad Rezaei"
              department="Business School"
              image="/testimonials/student3.jpg"
            />
          </div>
        </div>
      </section>

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

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Your vote shapes the future of your academic community. Mark your
            calendar and be part of the change.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/candidates">Explore Candidates</Link>
          </Button>
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

// Component for statistics cards
const StatCard = ({ number, label }: { number: number; label: string }) => {
  return (
    <Card className="p-6 text-center">
      <h3 className="mb-2 text-4xl font-bold text-blue-600">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </Card>
  );
};

// Component for timeline items

// Component for candidate cards
function CandidateCard({
  name,
  image,
  major,
  year,
  platform,
  position,
}: {
  name: string;
  image: string;
  faculty: string;
  major: string;
  year: number;
  platform: string;
  position: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full">
        <div className="absolute top-2 right-2 z-10 rounded-full bg-white px-3 py-1 text-sm font-medium text-blue-600">
          {position}
        </div>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-gray-600">
          {major}, {year}rd Year
        </p>
        <p className="mb-4 text-gray-700">{platform}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {["Research", "Innovation", "Accessibility"].map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button asChild className="w-full">
          <Link href={`/candidates/${name}`}>View Profile</Link>
        </Button>
      </div>
    </Card>
  );
}

// Component for testimonial cards
function TestimonialCard({
  quote,
  name,
  department,
  image,
}: {
  quote: string;
  name: string;
  department: string;
  image: string;
}) {
  return (
    <Card className="p-6 text-left">
      <div className="mb-4 text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="mb-4 text-gray-700 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{department}</p>
        </div>
      </div>
    </Card>
  );
}

// Component for FAQ items
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="rounded-lg border p-2">
      <AccordionTrigger className="text-left font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pt-2 text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
