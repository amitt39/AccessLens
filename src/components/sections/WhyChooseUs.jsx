import { HeartHandshake, Lightbulb, Wrench } from "lucide-react";
import Container from "../Container";

const features = [
  {
    icon: Lightbulb,
    title: "Easy to Understand",
    description:
      "Get clear explanations of accessibility issues without needing advanced technical knowledge.",
  },
  {
    icon: Wrench,
    title: "Actionable Suggestions",
    description:
      "Receive practical recommendations to help identify and fix accessibility problems.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive by Design",
    description:
      "Build better digital experiences that are accessible and usable by more people.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="w-full scroll-mt-24 bg-[#fdfefd] py-20 sm:py-28">
      <Container>
        <div className="mx-auto w-full">
          <div className="max-w-2xl border-b border-[#dce7df] pb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#14201a] sm:text-4xl">
              Why Choose AccessLens?
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f6b63] sm:text-lg">
              Making web accessibility easier to understand, evaluate, and
              improve.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group border-b border-[#dce7df] px-0 py-10 transition-colors duration-200 hover:bg-[#f7faf8] sm:px-6 sm:first-of-type:pl-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 lg:px-8 lg:py-12 lg:[&:nth-child(odd)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:border-r"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1F513D] bg-transparent text-[#1F513D] transition-transform duration-200 group-hover:scale-105">
                  <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-10 text-lg font-semibold leading-tight text-[#14201a]">
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
