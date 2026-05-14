"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useSheet } from "@/store/sheetStore";

const ThemedSheet = () => {
  const { isMd } = useBreakpoints();
  const SIDE = isMd ? "right" : "bottom";

  const {
    sheetOpen,
    setSheetOpen,
    toggleSheet,
    sheetContent,
    setSheetContent,
  } = useSheet();
  return (
    <Sheet open={sheetOpen} onOpenChange={toggleSheet}>
      <SheetContent
        className="bg-bg rounded-t-2xl md:rounded-l-2xl md:rounded-t-none max-h-[80svh] min-h-[30svh] md:max-h-full md:max-w-150 md:w-fit md:min-w-112.5 overflow-auto scroll-none "
        side={SIDE}
      >
        <div>{sheetContent}</div>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ThemedSheet;
