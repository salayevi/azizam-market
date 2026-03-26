import Image from "next/image";

export type MobileAchievementItem = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

type MobileAchievementCardProps = {
  item: MobileAchievementItem;
  isActive?: boolean;
};

export default function MobileAchievementCard({
  item,
  isActive = false,
}: MobileAchievementCardProps) {
  return (
    <article
      className={`absolute left-1/2 top-1/2 w-full max-w-[360px] -translate-x-1/2 rounded-[28px] border border-[#efbfd8] bg-white p-4 shadow-lg transition-all duration-500 ${
        isActive ? "z-20 opacity-100" : "z-10 opacity-0"
      }`}
      style={{
        transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.92})`,
      }}
    >
      <div className="overflow-hidden rounded-[24px] bg-[#f8f1f4]">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={650}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="pt-5 text-center">
        <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#cf2f8f]">
          {item.name}
        </h3>

        <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-[#8c6772]">
          {item.role}
        </p>

        <p className="mx-auto mt-4 max-w-[280px] text-[15px] leading-6 text-[#6f4d57]">
          {item.description}
        </p>
      </div>
    </article>
  );
}