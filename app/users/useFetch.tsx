import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Using Axios
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Sorry, something went wrong");
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;