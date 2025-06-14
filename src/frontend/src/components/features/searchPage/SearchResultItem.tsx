import { createApiMediaUrl } from "@/lib/api/backendApiUrl";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import Link from "next/link";
import Image from "next/image";
import "./searchResultItem.scss";
import { PageType, SearchHits } from "./types";

type SearchResultItemProps = {
  hit: SearchHits;
  query: string;
};

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

export function SearchResultItem({ hit, query }: SearchResultItemProps) {
  const { description, url, title, type, imageUrl } = hit;

  const sanitizedDescription = sanitizeHtml(description);

  const displayDescription = truncatedDescription(sanitizedDescription, 225);

  const isHjertekurvPage = type === PageType.Hjertekurv;
  const urlPath = isHjertekurvPage ? "/no/hjertekurver/" : "/no/";

  return (
    <li className={`search-result-item ${type}`}>
      <Link className="link" href={`${urlPath}${url}`}>
        <Heading withMargins={false} headingLevel="h2">
          {title}
        </Heading>
        <div className="description-image-container">
          <Paragraph
            className="description-container"
            maxWidth={600}
            style={{ margin: "0" }}
          >
            {highlightQuery(displayDescription, query)}
          </Paragraph>
          {isHjertekurvPage && imageUrl && (
            <Image
              src={createApiMediaUrl(imageUrl)}
              alt={title}
              width={120}
              height={107}
              className="image"
            />
          )}
        </div>
      </Link>
    </li>
  );
}
