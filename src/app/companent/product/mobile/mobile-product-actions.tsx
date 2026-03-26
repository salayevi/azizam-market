"use client";

type MobileProductActionsProps = {
  onAdd?: () => void;
  onSave?: () => void;
};

export default function MobileProductActions({
  onAdd,
  onSave,
}: MobileProductActionsProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={onAdd}
        className="rounded-full bg-[#cf2f8f] px-5 py-3 text-sm font-semibold text-white"
      >
        Savatga
      </button>

      <button
        type="button"
        onClick={onSave}
        className="rounded-full border border-[#cf2f8f] px-5 py-3 text-sm font-semibold text-[#cf2f8f]"
      >
        Saqlash
      </button>
    </div>
  );
}