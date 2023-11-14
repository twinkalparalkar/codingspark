import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
     fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  console.log("this usefetch",data)
  return [data];
};

export default useFetch;