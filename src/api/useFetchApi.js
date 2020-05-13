import { useState, useEffect } from "react";

// Export native fecth function for test purposes
export function fetchSearchResults(query) {
  return fetch(`http://localhost:3001/submission?q=${query}`)
    .then((Response) => {
      if (Response.headers.get("Content-type").includes("application")) {
        return Response.json().then((json) => ({ json, Response }));
      }
      return Response;
    })
    .catch((e) => {
      if (e instanceof TypeError) {
        throw TypeError(Response.statusText);
      }
      return { json: e, Response: {} };
    })
    .then(({ json: data, Response }) => {
      if (!Response.ok) {
        if ([422, 404, 403].includes(Response.status)) {
          return Response.statusText;
        } else throw new Error(`Service unavailable ${Response.statusText}`);
      }
      if (query === undefined || query === "") {
        return data;
      }
      if (typeof query === "string" && query !== "") {
        return data;
      } else {
        throw TypeError(Response.statusText);
      }
    });
}

// Create a Costume Hook useFetchApi
export function useFetchApi(query) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchSearchResults(query).then((data) => setData(data));
  }, [query]);

  return { data };
}
