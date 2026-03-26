import Image from "next/image";

type MobileProductMediaProps = {
  image: string;
  title: string;
};

export default function MobileProductMedia({
  image,
  title,
}: MobileProductMediaProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[#f8f1f4]">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-auto w-full object-cover"
        priority={false}
      />
    </div>
  );
}