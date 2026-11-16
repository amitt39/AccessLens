import LaoutTextFlip from "../ui/LayoutTextFlip";

export default function HeroHeading() {
  return (
    <div className="flex flex-col items-center">
      <LaoutTextFlip />
      <p className="text-[#5f6b63] text-[20px] font-md max-w-2xl text-center mt-10">
        Find accessibility issues on your website and get actionable suggestions
        to make it more inclusive.
      </p>
    </div>
  );
}
