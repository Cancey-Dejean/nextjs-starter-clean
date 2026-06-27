import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonBase = cn(
  "group relative shrink-0 inline-flex items-center justify-center gap-2 rounded-md font-medium transition whitespace-nowrap leading-none ",
  "active:not-disabled:scale-95 transition-smooth",
  "hover:no-underline ",
  "disabled:opacity-50 disabled:pointer-events-none",
  "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none",
  "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
);

const buttonConfig = {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary/80",
      secondary: "bg-muted text-foreground hover:bg-muted/80",
      outline: "border border-border bg-transparent hover:bg-muted",
      link: "text-primary underline-offset-4 hover:underline bg-transparent p-0 h-auto",
      ghost: "hover:bg-muted",
    },
    icon: {
      true: "p-0 rounded-full",
    },
    size: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      "icon-xs": "size-6",
      "icon-sm": "size-8",
      "icon-md": "size-10",
      "icon-lg": "size-12",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      className: "[&_svg]:size-3",
    },
    {
      size: "md",
      className: "[&_svg]:size-4",
    },
    {
      size: "lg",
      className: "[&_svg]:size-5",
    },
    {
      size: "icon-xs",
      className: "[&_svg]:size-3",
    },
    {
      size: "icon-sm",
      className: "[&_svg]:size-4",
    },
    {
      size: "icon-md",
      className: "[&_svg]:size-4",
    },
    {
      size: "icon-lg",
      className: "[&_svg]:size-5",
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
} as const;

export const buttonCva = cva(buttonBase, {
  ...buttonConfig,
  compoundVariants: [...buttonConfig.compoundVariants],
});

// Export the variant variants
export const BUTTON_VARIANTS = Object.keys(
  buttonConfig.variants.variant,
) as (keyof typeof buttonConfig.variants.variant)[];

// Export the size variants
export const BUTTON_SIZES = Object.keys(
  buttonConfig.variants.size,
) as (keyof typeof buttonConfig.variants.size)[];

export const buttonVariants = buttonCva;
