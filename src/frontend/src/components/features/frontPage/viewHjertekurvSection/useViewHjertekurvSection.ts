import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { createBackendUrl } from "@/utils/backendApiUrl";
import { useState, useEffect } from "react";

const useHjertekurver = (hjertekurvName: string) => {
  const [data, setData] = useState<Hjertekurv[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const apiBaseUrl = createBackendUrl();

    const fetchHjertekurver = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiBaseUrl}/api/hjertekurver-page-api/?hjertekurvName=${hjertekurvName}`,
          {
            next: {
              revalidate: 3600,
            },
          },
        );

        const pageContent: Hjertekurv[] = await response.json();

        const parsedContent =
          typeof pageContent === "string"
            ? JSON.parse(pageContent)
            : pageContent;

        setData(parsedContent);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchHjertekurver();
  }, [hjertekurvName]);

  return { data, error, loading };
};

export default useHjertekurver;
