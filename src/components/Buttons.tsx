import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils/classnames";

const buttonVariants = cva(
  ["flex", "btn", "shadows", "items-center", "justify-center", "gap-2"],
  {
    variants: {
      variant: {
        "filled-default": [
          "bg-white-50",
          "dark:bg-big-stone-950",
          " text-white-950",
          " dark:text-white-200",
          " hover:text-blue-600",
          " hover:dark:text-blue-600",
        ],
        "filled-green": [
          "bg-emerald-400",
          "text-white-50",
          "hover:bg-emerald-500",
          "hover:dark:bg-emerald-600",
        ],
        "filled-blue": [
          "bg-blue-600",
          " text-white-50",
          " hover:bg-blue-600",
          " hover:dark:bg-blue-600",
        ],
        "outlined-default": [
          "bg-transparent",
          "border-[1px]",
          "border-white-950",
          "text-white-950",
          "dark:border-white-200",
          "dark:text-white-200",
          "hover:border-blue-600",
          "hover:text-blue-600",
          "hover:dark:text-blue-600",
          "hover:dark:border-blue-600",
        ],
        "outlined-green": [
          "bg-transparent",
          "border-[1px]",
          "border-emerald-400",
          "text-emerald-400",
          "hover:text-emerald-400",
          "hover:border-emerald-400",
          "hover:dark:border-emerald-400",
        ],
        "outlined-blue": [
          "bg-transparent",
          "border-[1px]",
          "border-blue-600",
          "text-blue-600",
          "hover:text-blue-600",
          "hover:border-blue-600",
          "hover:dark:border-blue-600",
        ],
        "text-default": [
          "shadow-none",
          "bg-transparent",
          "text-white-950",
          "dark:text-white-200",
          "hover:bg-white-50",
          "hover:dark:bg-big-stone-950",
        ],
        "text-green": [
          "shadow-none",
          "bg-transparent",
          "text-emerald-400",
          "hover:text-emerald-400",
          "hover:dark:text-emerald-400",
          "hover:bg-emerald-400/25",
          "hover:dark:bg-emerald-400/25",
        ],
        "text-blue": [
          "shadow-none",
          "bg-transparent",
          "text-blue-600",
          "hover:text-blue-600",
          "hover:dark:text-blue-600",
          "hover:bg-blue-600/25",
          "hover:dark:bg-blue-600/25",
        ],
        "text-red": [
          "shadow-none",
          "bg-transparent",
          "text-rose-400",
          "hover:text-rose-400",
          "hover:dark:text-rose-400",
          "hover:bg-rose-400/25",
          "hover:dark:bg-rose-400/25",
        ],
      },
      size: {
        sm: ["px-3", "py-2", "text-sm", "font-iranyekan-bold"],
        md: ["px-5", "py-3", "text-base ", "font-iranyekan-bold"],
        lg: ["px-6", "py-4", "text-lg", " font-iranyekan-bold"],
      },
      round: {
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        xl: ["rounded-xl"],
        full: ["rounded-full"],
      },
    },
    defaultVariants: {
      variant: "filled-default",
      size: "md",
      round: "md",
    },
  },
);

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, round, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, round, size, variant }))}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
