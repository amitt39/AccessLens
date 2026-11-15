import Container from "./Container";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Website URL",
      description:
        "Enter the URL of your website to get started. No complicated setup or account creation required.",
    },
    {
      number: "02",
      title: "Scan for Accessibility Issues",
      description:
        "AccessLens analyzes your website to identify common accessibility barriers and areas that need improvement.",
    },
    {
      number: "03",
      title: "Review & Improve",
      description:
        "Explore detected issues, understand why they matter, and get actionable suggestions to make your website more inclusive.",
    },
  ];

  return (
    <section className="relative w-full scroll-mt-24 bg-[linear-gradient(to_bottom,rgba(253,254,253,0),#fdfefd_30%)] pt-20 pb-24 sm:pt-24 sm:pb-28">
      <Container>
        <div className="mx-auto w-full">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#14201a] sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f6b63] sm:text-lg">
              Making your website more accessible starts with three simple
              steps.
            </p>
          </div>

          <div className="relative mt-14 md:mt-20">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-1rem)] w-px bg-[#dce7df] md:left-0 md:top-4 md:block md:h-px md:w-full" />

            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <article key={step.number} className="relative pl-12 md:pl-0">
                  <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#fdfefd] bg-[#1F513D] text-[10px] font-bold text-white shadow-[0_0_0_1px_#8DBFA5] md:static">
                    {step.number}
                  </div>
                  <div className="md:mt-14">
                    <h3 className="text-lg font-bold leading-tight text-[#14201a]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-7 text-[#5f6b63]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
