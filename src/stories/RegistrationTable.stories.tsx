import type { StoryFn as Story, Meta } from "@storybook/react";

import { MaxWidth } from "@/utils/styling";
import { RegistrationListing, type RegistrationListingProps } from "@/components/modules";
import { Container } from "@/components/ui";

export default {
  title: "Modules/Registration Table",
  component: RegistrationListing,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story<RegistrationListingProps> = args => {
  return (
    <Container maxWidth={MaxWidth.Small}>
      <RegistrationListing {...args} />
    </Container>
  );
};

Default.args = {
  programName: "2024 Advanced Volleyball - Tracy HS",
  programType: "Volleyball",
  divisions: [
    {
      id: 1,
      Location: "Tracy HS",
      divisionName: "1st Grade Division/Kindergarten",
      scDivisionId: "41282348",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
    {
      id: 2,
      Location: "Tracy HS",
      divisionName: "2nd Grade Division",
      scDivisionId: "41282349",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
    {
      id: 4,
      Location: "Tracy HS",
      divisionName: "4th Grade Division",
      scDivisionId: "41282351",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
    {
      id: 5,
      Location: "Tracy HS",
      divisionName: "5th Grade Division",
      scDivisionId: "41282352",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
    {
      id: 6,
      Location: "Tracy HS",
      divisionName: "6th Grade Division",
      scDivisionId: "41282353",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
    {
      id: 7,
      Location: "Tracy HS",
      divisionName: "7th Grade Division",
      scDivisionId: "41282354",
      registrationEnd: "01/22/2024 12:00 AM",
      seasonStart: "01/22/2024",
      seasonEnd: "03/10/2024",
      divisionMaxPlayers: 96,
      divisionTeamSize: 48,
      divisionTeamCount: 4,
      divisionPracticeTime: "10:00 AM",
      divisionGameTime: "09:00",
    },
  ],
  price: 100,
};
