import FrontPage from "@/components/features/frontPage/frontPage";
import { Locale } from "@/providers";

export const revalidate = 46000;

export default async function Home(props: PageProps<"/[lang]">) {
  // const { lang } = (await props.params) as Locale;

  return <div>Heii</div>;
}
