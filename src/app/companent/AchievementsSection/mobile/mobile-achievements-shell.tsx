import MobileAchievementCard, {
  type MobileAchievementItem,
} from "./mobile-achievement-card";

type MobileAchievementsShellProps = {
  items: MobileAchievementItem[];
  activeIndex: number;
};

export default function MobileAchievementsShell({
  items,
  activeIndex,
}: MobileAchievementsShellProps) {
  return (
    <div className="relative mx-auto h-[100svh] w-full max-w-[380px]">
      {items.map((item, index) => (
        <MobileAchievementCard
          key={item.id}
          item={item}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}