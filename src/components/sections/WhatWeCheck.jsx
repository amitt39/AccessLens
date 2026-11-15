import {
  Code2,
  Contrast,
  FileText,
  Heading,
  Image,
  Keyboard,
} from "lucide-react";
import Container from "../Container";

const checks = [
  {
    icon: Image,
    title: "Images & Alt Text",
    description:
      "Identify images that are missing meaningful alternative text.",
  },
  {
    icon: Contrast,
    title: "Color Contrast",
    description:
      "Detect text and background combinations with insufficient color contrast.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Accessibility",
    description:
      "Identify elements that may not be accessible using keyboard navigation.",
  },
  {
    icon: FileText,
    title: "Form Accessibility",
    description:
      "Check whether form fields have proper labels and accessible descriptions.",
  },
  {
    icon: Heading,
    title: "Heading Structure",
    description:
      "Identify heading hierarchy issues that affect page structure and navigation.",
  },
  {
    icon: Code2,
    title: "ARIA & Semantics",
    description:
      "Detect potential issues with ARIA attributes and semantic HTML elements.",
  },
];

export default function WhatWeCheck() {
  return (
    <section id="what-we-check" className="w-full scroll-mt-24 bg-[#fdfefd] py-20 sm:py-28">
      <Container>
        <div className="mx-auto w-full">
          <div className="max-w-2xl border-b border-[#dce7df] pb-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7b8b81]">
              Accessibility checks
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#14201a] sm:text-4xl">
              What AccessLens Checks
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f6b63] sm:text-lg">
              Discover accessibility barriers that might be preventing people
              from using your website.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {checks.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group border-b border-[#dce7df] px-0 py-10 transition-colors duration-200 hover:bg-[#f7faf8] sm:px-6 sm:first-of-type:pl-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 lg:px-8 lg:py-12 lg:[&:nth-child(odd)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:border-r"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1F513D] bg-transparent text-[#1F513D] transition-transform duration-200 group-hover:scale-105"
                  >
                    <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="mt-12 text-lg font-semibold leading-tight text-[#14201a]">
                  {title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#5f6b63]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
