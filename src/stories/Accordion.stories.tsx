import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

const meta = {
  title: "Data Display/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const fakeAccordionData = [
  {
    title: "Base Player Pack - $40.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
    id: "item-1",
  },
  {
    title: "Pro Player Pack - $55.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
    id: "item-2",
  },
  {
    title: "Performance Pack - $65.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
    id: "item-3",
  },
  {
    title: "Baller Player Pack - $145.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
    id: "item-4",
  },
];

const AccordionChildren = () => {
  const [activeId, setActiveId] = useState<string | null>();

  const handleActiveId = (id: string) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      {fakeAccordionData.map((item, i) => {
        return (
          <AccordionItem
            key={`key-${i}`}
            id={item.id}
            title={item.title}
            description={item.descr}
            isOpen={activeId === item.id}
            onClick={handleActiveId}
          />
        );
      })}
    </>
  );
};

export const Primary: Story = {
  args: {
    title: "Accordion Story (Not necessary)",
    description:
      "(Not necessary) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum, libero sit amet porttitor hendrerit, odio tortor malesuada purus, vitae congue augue ipsum vitae metus. In eu pretium odio. Sed congue nisi vel quam lobortis tempor.",
    children: <AccordionChildren />,
  },
};
