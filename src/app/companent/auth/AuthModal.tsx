"use client";

import { useEffect } from "react";
import { useAuthModal } from "./AuthModalProvider";

export default function AuthModal() {
  const { isOpen, view, closeModal, setView, loginSuccess } = useAuthModal();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <button
        type="button"
        onClick={closeModal}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Modalni yopish"
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-5 text-white shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {view === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
          </h2>

          <button
            type="button"
            onClick={closeModal}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Yopish
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setView("login")}
            className={`rounded-full px-4 py-3 text-sm font-medium transition ${
              view === "login"
                ? "bg-white text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Kirish
          </button>

          <button
            type="button"
            onClick={() => setView("register")}
            className={`rounded-full px-4 py-3 text-sm font-medium transition ${
              view === "register"
                ? "bg-[#d13ea2] text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
          />
          <input
            type="password"
            placeholder="Parol"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
          />

          <button
            type="button"
            onClick={loginSuccess}
            className="w-full rounded-2xl bg-white px-4 py-3 font-medium text-black transition hover:scale-[1.01]"
          >
            {view === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
          </button>
        </div>
      </div>
    </div>
  );
}