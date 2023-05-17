import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: 'UI/My Label',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    label: 'My Label',
    size: 'h2',
    color: 'secondary'
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    size: 'h2',
    color: 'tertiary'
  },
};

export const AllCaps: Story = {
  args: {
    label: 'AllCaps',
    size: 'h1',
    allCaps: true
  },
};


export const CustomFontColor: Story = {
  args: {
    label: 'CustomFontColor',
    size: "h1",
    fontColor: '#e00051'
  },
};
