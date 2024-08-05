import Link from "next/link";
import { getYear } from "date-fns";
import { MaxWidth } from "@/utils/styling";
import { Container, LocationOutlinedIcon, MailOutlinedIcon, Image } from "@/components/ui";
import { TypeWebsiteModuleContacts, TypeModelSocialItem } from "@/types/contentful";
import { Asset } from "contentful";

type FooterProps = {
  contacts: TypeWebsiteModuleContacts<undefined, string>;
};

export const Footer = ({ contacts }: FooterProps) => {
  const address = contacts.fields.address || "";
  const socialLinks = contacts.fields.socialLinks as TypeModelSocialItem<undefined, string>[];

  return (
    <div className="bg-primary sm:px-4 md:px-8 2xl:px-2">
      <Container maxWidth={MaxWidth.Footer}>
        <footer className="footer flex w-full flex-col-reverse justify-between border-info-content py-10 lg:flex-row">
          <div
            className="text-xs text-white lg:hidden"
            dangerouslySetInnerHTML={{ __html: `© ${getYear(new Date())} ${contacts.fields.copyrightNotice}` }}
          />
          <div className="flex w-full items-start justify-start lg:w-3/5 xl:justify-between xl:pr-10">
            <div className="mr-6 xl:mr-12">
              <span className="font-sant footer-title text-lg normal-case text-white opacity-100 xl:text-xl xl:leading-normal">
                Company
              </span>
              <ul className="mt-4 list-none space-y-4 font-inter text-xxs font-medium text-white xl:text-sm xl:leading-relaxed">
                <li>
                  <Link href="https://store.nextlevelsports.com">Our Story</Link>
                </li>
                <li>
                  <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=1029458">Careers</Link>
                </li>
                <li>
                  <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=335647">Testimonials</Link>
                </li>
                <li>
                  <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=605126">Media</Link>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start justify-start md:flex-row">
              <div className="md:mr-6 xl:mr-12">
                <span className="font-sant footer-title text-lg normal-case text-white opacity-100 xl:text-xl xl:leading-normal">
                  Help
                </span>
                <ul className="mt-4 list-none space-y-4 font-inter text-xxs text-white xl:text-sm xl:leading-relaxed">
                  <li>
                    <Link href="https://support.nextlevelsports.com/hc/en-us">FAQ</Link>
                  </li>
                  <li>
                    <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=1004101">
                      General Flag Football Operation
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=1024394">
                      General Basketball Operations
                    </Link>
                  </li>
                  <li>
                    <Link href="/program/2024-advanced-volleyball-tracy-hs">General Flag Football Program</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-sant footer-title hidden text-lg text-primary md:block xl:text-xl">La</span>
                <ul className="mt-4 list-none space-y-4 font-inter text-xxs text-white xl:text-sm xl:leading-relaxed">
                  <li>
                    <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=870019">Rostering Policy</Link>
                  </li>
                  <li>
                    <Link href="https://www.nextlevelsports.com/Default.aspx?tabid=863953">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="https://stacksports.com/legal-privacy">Privacy Statement</Link>
                  </li>
                  <li>
                    <Link href="https://stacksports.com/stack-sports-system-license-agreement-united-states">
                      License Agreement
                    </Link>
                  </li>
                  <li>
                    <Link href="https://stacksports.com/legal-COPPA">Children’s Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="https://stacksports.com/legal-terms">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="-mb-8 w-full text-white lg:mb-0 lg:w-2/5">
            <div className="footer-title mb-2 font-roboto text-3xl font-bold italic leading-tight text-white opacity-100 lg:mb-4 lg:text-4xl xl:mb-6 xl:text-5xl">
              Next Level Sports
            </div>
            {address.length && (
              <div className="my-2 flex items-center justify-start">
                <LocationOutlinedIcon className="mr-3 h-6 w-6" />
                <div className="font-inter text-xs leading-[1.406rem] lg:text-base lg:leading-relaxed">{address}</div>
              </div>
            )}
            <Link href={`maito:${contacts.fields.email}`} className="flex items-center justify-start">
              <MailOutlinedIcon className="mr-3 h-6 w-6" />
              <div className="font-inter text-xs leading-[1.406rem] lg:text-base lg:leading-relaxed">
                {contacts.fields.email}
              </div>
            </Link>
            <div className="my-4 flex lg:my-8">
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
              className="hidden text-sm text-white lg:block"
              dangerouslySetInnerHTML={{ __html: `© ${getYear(new Date())} ${contacts.fields.copyrightNotice}` }}
            />
          </div>
        </footer>
      </Container>
    </div>
  );
};
