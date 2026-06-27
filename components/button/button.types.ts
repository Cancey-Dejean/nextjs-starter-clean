import type { VariantProps } from "class-variance-authority";
import type { buttonCva } from "./button.variants";

type ButtonVariantProps = VariantProps<typeof buttonCva>;

export type ButtonVariant = NonNullable<ButtonVariantProps["variant"]>;
export type ButtonSize = NonNullable<ButtonVariantProps["size"]>;

export type ButtonProps<T extends React.ElementType> = {
  /** The component to render the button as */
  as?: T;
  /** The variant of the button */
  variant?: ButtonVariant;
  /** Whether the button has an icon */
  icon?: boolean;
  /** The size of the button */
  size?: ButtonSize;
  /** Whether the button is full width */
  fullWidth?: boolean;
} & React.ComponentPropsWithoutRef<T>; // Great for polymorphic "as"
