import { useEffect, useState } from "react";
import { NetworkAPI } from "../services/network";
export function usePage(slug) {
  let [pageInformation, setValue] = useState([]);

  useEffect(() => {
    console.log("pageInformation has changed into ", pageInformation);
  }, [pageInformation]);

  const setPage = () => {
    let networkAPI = new NetworkAPI();
    networkAPI.fetchPageInformation(slug).then((pageInformation) => {
      pageInformation = pageInformation.flat();
      console.log(pageInformation);
      setValue(pageInformation);
    });
  };

  return [pageInformation, setPage];
}
