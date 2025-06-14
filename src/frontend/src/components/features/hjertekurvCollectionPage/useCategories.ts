import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { Category } from "@/types/category";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [data, setData] = useState<Category[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const apiBaseUrl = createBackendUrl();

    const fetchHjertekurver = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiBaseUrl}/api/categories`, {
          next: {
            revalidate: 3600,
          },
        });

        const categories: Category[] = await response.json();

        if (response.status == 500 || response.status == 400) {
          setError(categories.toString());
        }

        const parsedContent =
          typeof categories === "string" ? JSON.parse(categories) : categories;

        setData(parsedContent);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchHjertekurver();
  }, []);

  return { data, error, loading };
};

export default useCategories;
