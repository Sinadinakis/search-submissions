import React, { useState } from "../../node_modules/react";

// CSS
import "../assets/css/form.css";
import "../assets/css/input.css";

// Components
import SearchInput from "../components/molecules/SearchInput";
import SearchTable from "../components/oragnisms/SearchTable";

const Submissions = () => {
  const [query, setQuery] = useState("");

  return (
    <form
      className="form form--container"
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(e.target.search.value);
      }}
    >
      <SearchInput name="search" label="Submissions" />
      <SearchTable query={query} />
    </form>
  );
};

export default Submissions;
