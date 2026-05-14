import ThemedSheet from "@/components/ThemedSheet";
import { ReactNode } from "react";

export default function MenuLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ThemedSheet />
      {children}
    </div>
  );
}
