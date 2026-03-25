"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import AuthModal from "./AuthModal";

type AuthView = "login" | "register";

type AuthModalContextType = {
  isOpen: boolean;
  view: AuthView;
  isAuthenticated: boolean;
  openLogin: () => void;
  openRegister: () => void;
  closeModal: () => void;
  setView: (view: AuthView) => void;
  loginSuccess: () => void;
  logout: () => void;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export function AuthModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<AuthView>("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLogin = useCallback(() => {
    setView("login");
    setIsOpen(true);
  }, []);

  const openRegister = useCallback(() => {
    setView("register");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const loginSuccess = useCallback(() => {
    setIsAuthenticated(true);
    setIsOpen(false);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      view,
      isAuthenticated,
      openLogin,
      openRegister,
      closeModal,
      setView,
      loginSuccess,
      logout,
    }),
    [isOpen, view, isAuthenticated, openLogin, openRegister, closeModal, loginSuccess, logout]
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <AuthModal />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);

  if (!context) {
    throw new Error("useAuthModal must be used inside AuthModalProvider");
  }

  return context;
}