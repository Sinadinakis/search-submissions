import React from "react";
import PropTypes from "prop-types";

// Components
import { useFetchApi } from "../../api/useFetchApi";
import { MDBDataTable } from "mdbreact";

// Const
const tableHeaders = [
  {
    label: "Id",
    field: "SubmissionId",
    width: 150,
  },
  {
    label: "Date",
    field: "Date",
    width: 270,
  },
  {
    label: "Latitude",
    field: "Latitude",
    width: 200,
  },
  {
    label: "Longitude",
    field: "Longitude",
    width: 100,
  },
  {
    label: "Address",
    field: "Address",
    width: 150,
  },
];

const SearchTable = ({ query, ...props }) => {
  const result = useFetchApi(query);
  let data;

  /*
   * Construct data object
   * Rows/Columns for MDBDataTable component
   */
  if (result && result.data.length) {
    data = {
      columns: tableHeaders.map((item) => ({ ...item, sort: "asc" })),
      rows: [...result.data],
    };
  }

  return result && result.data.length ? (
    <MDBDataTable striped bordered hover searching={false} data={data} />
  ) : (
    <p>Search for some results</p>
  );
};

SearchTable.propTypes = {
  query: PropTypes.string,
};

export default SearchTable;
