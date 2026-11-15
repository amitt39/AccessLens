import { ChevronDown } from "lucide-react";
import Container from "../Container";

const faqs = [
  [
    "What is web accessibility?",
    "Web accessibility means making websites usable by people with different abilities, including people who use assistive technologies.",
  ],
  [
    "How does AccessLens work?",
    "AccessLens scans your website for common accessibility issues and presents the findings in an understandable report.",
  ],
  [
    "Is AccessLens free to use?",
    "Yes, AccessLens is free to use without requiring an account.",
  ],
  [
    "Do I need technical knowledge to understand the results?",
    "No. AccessLens provides clear explanations of detected issues and suggestions for improvement.",
  ],
  [
    "Does AccessLens automatically fix accessibility issues?",
    "No. It identifies potential issues and provides suggestions to help developers fix them.",
  ],
  [
    "Which accessibility standards does AccessLens follow?",
    "AccessLens aims to evaluate accessibility using relevant WCAG guidelines.",
  ],
];

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-[#fdfefd] py-20 sm:py-28">
      <Container>
        <div className="mx-auto w-full max-w-4xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#14201a] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 border-t border-[#dce7df]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[#dce7df]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-[#14201a] marker:hidden sm:text-lg">
                  {question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[#1F513D] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-3xl pb-6 pr-8 text-base leading-7 text-[#5f6b63]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
