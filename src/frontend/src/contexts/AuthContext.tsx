import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { createContext, useContext, useEffect, useRef } from "react";
import { toast } from "sonner";

interface AuthContextValue {
  isAuthenticated: boolean;
  principal: string | null;
  login: () => void;
  clear: () => void;
  isInitializing: boolean;
  isLoggingIn: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  principal: null,
  login: () => {},
  clear: () => {},
  isInitializing: false,
  isLoggingIn: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { login, clear, identity, isInitializing, isLoggingIn } =
    useInternetIdentity();

  const isAuthenticated = identity !== undefined;
  const principal = identity?.getPrincipal()?.toText() ?? null;
  const prevAuthRef = useRef<boolean>(false);

  useEffect(() => {
    if (isAuthenticated && !prevAuthRef.current) {
      toast.success("Login successful! Welcome to Yadav Dairy 🥛");
    }
    prevAuthRef.current = isAuthenticated;
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        principal,
        login,
        clear,
        isInitializing: isInitializing ?? false,
        isLoggingIn: isLoggingIn ?? false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
