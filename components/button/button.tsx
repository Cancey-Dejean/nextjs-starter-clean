import * as React from "react";
import type { ButtonProps } from "@/components/button/button.types";
import { buttonVariants } from "@/components/button/button.variants";
import { cn } from "@/lib/utils";

function ButtonCTAGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="button-cta-group"
      className={cn(
        "relative flex items-center justify-center gap-4",
        className,
      )}
      {...props}
    />
  );
}

function Button<T extends React.ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  fullWidth,
  icon,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = (as || "button") as React.ComponentType<
    Record<string, unknown>
  >;

  return (
    <Component
      data-slot={Component}
      className={cn(
        buttonVariants({ variant, size, fullWidth, icon }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, ButtonCTAGroup };
