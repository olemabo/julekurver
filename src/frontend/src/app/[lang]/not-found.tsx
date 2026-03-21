import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";

export default async function NotFound() {
  const lang = "no";
  const dictionary = await getDictionary(lang);

  const linkItems = [
    {
      linkText: dictionary.breadcrumb.frontpage,
      href: buildAppRoute({ route: "/[lang]", params: { lang } }),
    },
    {
      linkText: "404",
      href: "#",
    },
  ];

  return (
    <PageWrapper>
      <Breadcrumb linkItems={linkItems} />
      <Heading level="h1">404</Heading>
      <Paragraph>Beklager, siden du leter etter finnes ikke.</Paragraph>
    </PageWrapper>
  );
}
