import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "@/components/spinner/spinner";
import StoryWrapper from "@/components/utility/story-wrapper";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};
