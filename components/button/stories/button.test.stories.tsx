import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { Button } from "@/components/button/button";

const meta = {
  title: "Components/Button/Tests",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UsesNativeButtonElement: Story = {
  args: { children: "Native Button" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Native Button" });

    // Contract test: ensure semantic element is actually <button>
    await expect(btn.tagName).toBe("BUTTON");
  },
};

export const Disabled_IsDisabled: Story = {
  args: { children: "Disabled", disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Disabled" });
    await expect(btn).toBeDisabled();
  },
};

export const AsLink_RendersLinkRole: Story = {
  args: { children: "Go Home", as: "a", href: "/" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Go Home" });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/");
    await expect(link.tagName).toBe("A");
  },
};

export const KeyboardFocusable: Story = {
  args: { children: "Focusable" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Focusable" });

    // Focus should land on it (Tab simulation happens at document-level)
    // Here we directly focus to validate it can be focused.
    (btn as HTMLElement).focus();
    await expect(btn).toHaveFocus();
  },
};
