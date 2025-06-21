
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ComponentProps } from "react";

export interface ThemeProviderProps extends ComponentProps<typeof NextThemesProvider> {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="jewelcraft-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
