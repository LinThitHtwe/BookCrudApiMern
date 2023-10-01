import React from "react";
import useFetch from "../useFetch";

const BookList = ({ fetchUrl }) => {
  const { data, isPending, error } = useFetch(fetchUrl);

  return (
    <div>
      <p>Book Lists</p>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {error && <tr>{error}</tr>}
        {error && <tr>{isPending}</tr>}
        {data &&
          data.map((d) => (
            <tr key={d._id}>
              <td>{d.title}</td>
              <td>{d.author}</td>
              <td>{d.price}</td>
              <td>
                <a href={`/update/${d._id}`}>Update</a>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default BookList;
