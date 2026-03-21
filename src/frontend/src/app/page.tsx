import { DEFAULT_LOCALE } from "@/config/i18n";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
