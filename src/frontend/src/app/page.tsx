import { DEFAULT_LOCALE } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(
    buildAppRoute({ route: "/[lang]", params: { lang: DEFAULT_LOCALE } }),
  );
}
