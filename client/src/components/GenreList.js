import React from "react";
import useFetch from "../useFetch";

const GenreList = ({ fetchUrl }) => {
  const { data, error, isPending } = useFetch(fetchUrl);
  return (
    <div>
      <p>Genre List</p>
      <a href="/genre/add">Add</a>
      <table>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
        {error && <tr>{error}</tr>}
        {isPending && <tr>{isPending}</tr>}
        {data &&
          data.map((d) => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>
                <a href={`/genre/update/${d._id}`}>Update</a>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default GenreList;
