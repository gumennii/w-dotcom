import { Text } from "@/components/ui";
import { SportTypeCard } from "../SportTypeCard";
import { menu } from "../Navigation";

export const ProgramCards = ({ title = "Explore next level sports" }: { title?: string }) => {
  return (
    <>
      <Text type="h1" className="text-center uppercase italic">
        {title}
      </Text>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SportTypeCard path={menu[1]?.href} icon="footbal" title={menu[1]?.name.toUpperCase()} />
        <SportTypeCard path={menu[2]?.href} icon="basketball" title={menu[2]?.name.toUpperCase()} />
        <SportTypeCard path={menu[3]?.href} icon="volleyball" title={menu[3]?.name.toUpperCase()} />
        <SportTypeCard path={menu[4]?.href} icon="flag-pennant" title={menu[4]?.name.toUpperCase()} />
      </div>
    </>
  );
};
