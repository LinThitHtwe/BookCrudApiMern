import React from "react";
import useFetch from "../useFetch";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookList = ({ fetchUrl }) => {
  const navigate = useNavigate();
  const successMessage = "Process Successful";
  const { data, isPending, error } = useFetch(fetchUrl);

  const deleteBook = async (id, e) => {
    e.preventDefault();
    const deleteBookURL = "/delete/" + id;

    const response = await axios.delete(deleteBookURL);
    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      toast.success(successMessage);
      //navigate("/");
      window.location.reload();
    }
  };

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
                <a href="#" onClick={(e) => deleteBook(d._id, e)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default BookList;
