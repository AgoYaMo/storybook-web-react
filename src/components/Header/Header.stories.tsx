import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import { Button } from "..";

const meta = {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
      img: {
        src: "https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg",
      },
    },
    children: (
      <>
        <Button>One</Button>
        <Button square>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
        <Button active>Five</Button>
      </>
    ),
    className: "",
    style: {},
  },
};
