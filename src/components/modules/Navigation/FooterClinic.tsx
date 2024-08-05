import Link from "next/link";
import { getYear } from "date-fns";
import { MaxWidth } from "@/utils/styling";
import { Container, LocationOutlinedIcon, MailOutlinedIcon, LogoSlashWhite, Image } from "@/components/ui";
import { TypeWebsiteModuleContacts, TypeModelSocialItem } from "@/types/contentful";
import { Asset } from "contentful";

type FooterClinicProps = {
  contacts: TypeWebsiteModuleContacts<undefined, string>;
};

export const FooterClinic = ({ contacts }: FooterClinicProps) => {
  const address = contacts.fields.address || "";
  const socialLinks = contacts.fields.socialLinks as TypeModelSocialItem<undefined, string>[];

  return (
    <div className="bg-primary">
      <Container maxWidth={MaxWidth.Footer}>
        <footer className="footer flex w-full flex-col items-start justify-between gap-0 pb-16 pt-12 md:flex-row md:items-center md:pb-12 lg:px-6 2xl:px-0">
          <div className="mb-8 flex flex-col gap-y-4 md:mb-0">
            <LogoSlashWhite />
          </div>
          <div className="text-white">
            {address.length && (
              <div className="mb-4 flex items-center justify-start">
                <LocationOutlinedIcon className="mr-4 h-6 w-6" />
                <div className="font-inter text-xs leading-loose md:text-base md:leading-relaxed">{address}</div>
              </div>
            )}
            <Link href={`maito:${contacts.fields.email}`} className="flex items-center justify-start">
              <MailOutlinedIcon className="mr-4 h-6 w-6" />
              <div className="font-inter text-xs leading-loose md:text-base md:leading-relaxed">
                {contacts.fields.email}
              </div>
            </Link>
            <div className="my-8 flex">
              {socialLinks.map(link => {
                const icon = link.fields.icon as Asset;
                return (
                  <Link
                    key={link.sys.id}
                    href={link.fields.url}
                    target="_blank"
                    className="mr-4 flex h-8 w-8 items-center justify-center hover:opacity-60"
                  >
                    <Image src={icon.fields.file?.url as string} alt={link.fields.name} width={32} height={32} />
                  </Link>
                );
              })}
            </div>
            <div
              className="font-inter text-xs font-normal text-white"
              dangerouslySetInnerHTML={{ __html: `© ${getYear(new Date())} ${contacts.fields.copyrightNotice}` }}
            />
          </div>
        </footer>
      </Container>
    </div>
  );
};
