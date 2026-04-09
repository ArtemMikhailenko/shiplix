"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Dictionary } from "@/app/lib/i18n/en";

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <DictionaryContext.Provider value={dict}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary {
  const dict = useContext(DictionaryContext);
  if (!dict)
    throw new Error("useDictionary must be used within DictionaryProvider");
  return dict;
}
