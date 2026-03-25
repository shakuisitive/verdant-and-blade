import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const cell =
  "h-[var(--rdp-cell-size)] w-[var(--rdp-cell-size)] min-h-[var(--rdp-cell-size)] min-w-[var(--rdp-cell-size)] p-0.5 text-center text-sm relative focus-within:relative focus-within:z-20";

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-4 sm:p-5 rounded-2xl border [--rdp-cell-size:2.75rem] sm:[--rdp-cell-size:3rem]",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(buttonVariants({ variant: "outline" }), "h-9 w-9 shrink-0 rounded-full p-0 opacity-80 hover:opacity-100"),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse border-spacing-y-1 border-separate",
        head_row: "flex w-full mt-2 gap-1 justify-between",
        head_cell:
          "text-muted-foreground flex-1 flex items-center justify-center font-normal text-[0.7rem] uppercase tracking-wider text-foreground/70",
        row: "flex w-full mt-1 gap-1 justify-between",
        cell: `${cell} flex-1 flex items-center justify-center max-w-[var(--rdp-cell-size)]`,
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-[var(--rdp-cell-size)] w-[var(--rdp-cell-size)] min-h-[var(--rdp-cell-size)] min-w-[var(--rdp-cell-size)] p-0 font-medium rounded-full aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "rounded-full !bg-primary !text-primary-foreground hover:!bg-primary-shade1 hover:!text-primary-foreground focus:!bg-primary focus:!text-primary-foreground",
        day_today: "rounded-full bg-primary-tint3 text-foreground font-semibold",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
