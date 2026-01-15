import React, { useEffect, useState } from "react";

const useFetch = (url, initalData = []) => {
  const [data, setdata] = useState(initalData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setLoading(false);
      });
  }, [url]);
  return [data, loading];
};

export default useFetch;
