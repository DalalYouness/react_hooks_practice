import { useEffect, useState } from "react";

const useDebouncedSearch = (initialQueryValue = "", initialData = [], url) => {
  const [query, setQuery] = useState(initialQueryValue);
  const [searchingData, setSearchingData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const hanleChangeQuery = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!query) {
      setSearchingData(initialData);
      setLoading(false);
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      fetch(`${url}${query}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchingData(data);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);
  return [query, searchingData, loading, hanleChangeQuery];
};

export default useDebouncedSearch;
