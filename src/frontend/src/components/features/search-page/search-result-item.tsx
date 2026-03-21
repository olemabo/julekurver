import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import Link from "next/link";
import Image from "next/image";
import styles from "./search-result-item.module.css";
import { PageType, SearchHit } from "./types";
import { buildAppRoute } from "@/utils/routes";
import { LocaleProps } from "@/config/i18n";

type SearchResultItemProps = {
  hit: SearchHit;
  query: string;
} & LocaleProps;

const highlightQuery = (text: string, query: string) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    ),
  );
};

const sanitizeHtml = (html: string) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
};

const truncatedDescription = (description: string, limit: number) => {
  if (description.length > limit) {
    return description.substring(0, limit) + " ...";
  }
  return description;
};

export function SearchResultItem({ hit, query, lang }: SearchResultItemProps) {
  const { description, url, title, type, imageUrl } = hit;
  const sanitizedDescription = sanitizeHtml(description);
  const displayDescription = truncatedDescription(sanitizedDescription, 225);
  const isHjertekurvPage = type === PageType.HJERTEKURV;

  const urlPath = isHjertekurvPage
    ? buildAppRoute({
        route: "/[lang]/hjertekurver/",
        params: { lang },
      })
    : buildAppRoute({ route: "/[lang]/", params: { lang } });

  return (
    <li className={`${styles.searchResultItem} ${type}`}>
      <Link className={styles.link} href={`${urlPath}${url}`}>
        <Heading withMargins={false} level="h2">
          {title}
        </Heading>
        <div className={styles.descriptionImageContainer}>
          <Paragraph className={styles.descriptionContainer} maxWidth={600}>
            {highlightQuery(displayDescription, query)}
          </Paragraph>
          {isHjertekurvPage && imageUrl && (
            <Image
              src={createApiMediaUrl(imageUrl)}
              alt={title}
              width={120}
              height={107}
              className={styles.image}
            />
          )}
        </div>
      </Link>
    </li>
  );
}
