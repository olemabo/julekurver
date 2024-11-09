import { createApiMediaUrl } from "@/utils/backendApiUrl";
import { PageType, SearchHits } from "./searchPage";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

import "./searchResultItem.css";
import Heading from "@/components/shared/ui/heading/heading";

interface SearchResultItemProps {
  hit: SearchHits;
  query: string;
}

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

  return (
    <li className={`search-result-item ${type}`}>
      <a className="link" href={url}>
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
          {type === PageType.Hjertekurv && imageUrl && (
            <img
              src={createApiMediaUrl(imageUrl)}
              alt={title}
              className="image"
            />
          )}
        </div>
      </a>
    </li>
  );
}
