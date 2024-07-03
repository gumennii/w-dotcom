import { Container } from "@/components/ui/Container/Container";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { MaxWidth } from "@/utils/styling";
import { LeagueOperationsItem } from "./LeagueOperationsItem";

const fakeAccordionData = [
  {
    title: "Base Player Pack - $40.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
  },
  {
    title: "Pro Player Pack - $55.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
  },
  {
    title: "Performance Pack - $65.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
  },
  {
    title: "Baller Player Pack - $145.00",
    descr:
      "Nike Player Long Sleeve Shirt featuring the Next Level Player Logo on the front, participant's last name on the back.",
  },
];

type LeagueOperationsProps = {
  nodeType: "document";
  data: {};
  content: any[];
};

export const LeagueOperations = () => {
  return (
    <Container maxWidth={MaxWidth.Small} className="my-10">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">League Operations</h2>
      <div className="flex flex-wrap items-start justify-between gap-y-8">
        <LeagueOperationsItem title="Season Operations">
          The Next Level Flag Football season at Cal will run with 9 program dates over the program schedule
        </LeagueOperationsItem>
        <LeagueOperationsItem title="Game Dates">
          All games are on Sundays - except Super Bowl Weekend (Games on Saturday).
        </LeagueOperationsItem>
        <LeagueOperationsItem title="Season Fees">
          $315.00 - Fees are inclusive of a participant&apos;s custom jersey, shorts, use of flags, and other
          equipment/offerings. (In December, expedited uniform shipping charge added to any registrations.)
        </LeagueOperationsItem>
        <LeagueOperationsItem title="Team Roster Size">
          Teams are 12 players maximum (15 for 7th grade) , limited exceptions on a case-by-case basis.
        </LeagueOperationsItem>
        <LeagueOperationsItem title="Optional Player Packs" className="order-2 md:order-1">
          <p>
            During the registration process, participants have the option to purchase additional Player Packs upon check
            out. For the 2024 Next Level Flag Football season, 4 options are available for purchase (see below). Player
            Pack costs will be added to the base league registration fees at check out. All Player Pack merchandise will
            be shipped with your participant&apos;s Next Level Flag Football uniform - unless otherwise communicated
            from our team. Sizing verification will be sent via email as your season uniform heads into production!
          </p>
          <Accordion>
            {fakeAccordionData.map((item, i) => {
              return <AccordionItem key={`key-${i}`} id={`id-${i}`} title={item.title} description={item.descr} />;
            })}
          </Accordion>
        </LeagueOperationsItem>
        <LeagueOperationsItem title="Uniform Delivery">
          All season uniforms will be shipped to a participant&apos;s home (or provided shipping address). Delivery will
          occur via USPS and a valid USPS delivery location is required. Participants must keep their shipping addresses
          up to date for proper delivery. Replacement uniforms will be at the cost of the participant should inaccurate
          addresses be provided at the time of production.
        </LeagueOperationsItem>
      </div>
    </Container>
  );
};
