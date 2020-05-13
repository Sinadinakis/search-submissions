import { fetchSearchResults } from "./useFetchApi";

describe("Test fetchSearchResults function", () => {
  it("Returns a promise", () => {
    expect(fetchSearchResults()).toBeInstanceOf(Promise);
  });

  it("Return empty response if no query is given", (done) => {
    return fetchSearchResults().then((results) => {
      expect(results).toEqual([]);
      done();
    });
  });

  it("Return empty response if query is empty string", (done) => {
    return fetchSearchResults("").then((results) => {
      expect(results).toEqual([]);
      done();
    });
  });

  it("Returns an array when a query is given", (done) => {
    const expected = [
      {
        SubmissionId: 1,
        Date: "2014-07-15 17:53:02.127",
        Latitude: 52.385,
        Longitude: 4.636,
        Address: "AH Kruisstraat 10, Haarlem ",
      },
      {
        SubmissionId: 190,
        Date: "2014-05-31 17:31:06.920",
        Latitude: 52.389,
        Longitude: 4.621,
        Address: "AH Kruisstraat 10, Haarlem ",
      },
    ];

    return fetchSearchResults("AH Kruisstraat 10, Haarlem").then((results) => {
      expect(results).toEqual(expected);
      done();
    });
  });
});
