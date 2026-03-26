type MobileProductInfoProps = {
  title: string;
  description: string;
};

export default function MobileProductInfo({
  title,
  description,
}: MobileProductInfoProps) {
  return (
    <div className="space-y-3 text-center">
      <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#cf2f8f]">
        {title}
      </h3>

      <p className="mx-auto max-w-[280px] text-[15px] leading-6 text-[#6f4d57]">
        {description}
      </p>
    </div>
  );
}