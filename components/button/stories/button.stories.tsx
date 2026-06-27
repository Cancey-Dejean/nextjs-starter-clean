import { cn } from "@/lib/utils";
import { ArrowRight, Mail, ShoppingCart } from "lucide-react";
import { Button, ButtonCTAGroup } from "@/components/button/button";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "@/components/button/button.variants";
import { Spinner } from "@/components/spinner/spinner";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
    size: "md",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: "select",
      options: BUTTON_VARIANTS,
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: BUTTON_SIZES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const LeadingIcon: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-6">
      {BUTTON_VARIANTS.map((variant) => (
        <ButtonCTAGroup key={variant}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button key={size} {...args} variant={variant} size={size}>
              <Mail />
              {variant}
            </Button>
          ))}
        </ButtonCTAGroup>
      ))}
    </div>
  ),
};

export const TrailingIcon: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-6">
      {BUTTON_VARIANTS.map((variant) => (
        <ButtonCTAGroup key={variant}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button key={size} {...args} variant={variant} size={size}>
              {variant}
              <ArrowRight />
            </Button>
          ))}
        </ButtonCTAGroup>
      ))}
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Button",
    loading: true,
  },
  render: ({ children, loading, ...args }) => {
    return (
      <ButtonCTAGroup>
        <Button {...args}>
          {loading ? (
            <>
              <Spinner className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 animate-spin cursor-progress opacity-50" />

              <span className={cn(loading && "opacity-0")}>{children}</span>
            </>
          ) : (
            <span>{children || "Button"}</span>
          )}
        </Button>
      </ButtonCTAGroup>
    );
  },
};

export const Linkable: Story = {
  args: {
    as: "a",
    href: "#",
    children: "Link",
  },
};

export const Group: Story = {
  args: {
    children: "Button",
  },
  argTypes: {
    variant: { table: { disable: true } },
    size: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  render: (args) => (
    <ButtonCTAGroup>
      {BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {args.children || "Button"}
        </Button>
      ))}
    </ButtonCTAGroup>
  ),
};

export const Icon: Story = {
  args: {
    size: "icon-md",
    icon: true,
  },
  render: (args) => (
    <ButtonCTAGroup>
      <Button {...args}>
        <ShoppingCart />
      </Button>
    </ButtonCTAGroup>
  ),
};
