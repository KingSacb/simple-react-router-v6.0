import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //console.log("useFetch");

  const getData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al consumir la api");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    //console.log("useEffect");
    getData();
  }, [getData]);

  return { data, loading, error };
};
