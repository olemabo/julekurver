import { Hjertekurv } from "@/types/hjertekurv";
import { useState, useEffect } from "react";
import { getRelatedHjertekurvData } from "./api";

const useLignendeHjertekurver = (hjertekurvName: string, lang: string) => {
  const [data, setData] = useState<Hjertekurv[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHjertekurver = async () => {
      setLoading(true);
      try {
        const response = await getRelatedHjertekurvData(hjertekurvName, lang);

        const pageContent: Hjertekurv[] = await response.json();

        if (response.status == 500 || response.status == 400) {
          setError(pageContent.toString());
        }

        setData(pageContent);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchHjertekurver();
  }, [hjertekurvName, lang]);

  return { data, error, loading };
};

export default useLignendeHjertekurver;
