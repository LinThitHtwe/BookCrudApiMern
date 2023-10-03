import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const BookForm = () => {
  const navigate = useNavigate();
  const successMessage = "Process Successful";
  const { id } = useParams();
  const addBokkURL = "/add";
  const updateBookURL = "/update/" + id;
  const genreListURL = "http://localhost:8000/genre";

  const { data, error, isPending } = useFetch(genreListURL);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });

  useEffect(() => {
    if (id) {
      const FillFormForUpdate = async () => {
        const response = await axios.get(updateBookURL);
        console.log(updateBookURL);
        const { title, author, price } = response.data;
        setFormData({ title, author, price });
      };
      FillFormForUpdate();
    }
  }, []);

  const bookFormSubmit = async (e) => {
    e.preventDefault();
    const { title, author, genre, price } = formData;

    try {
      let postUrl;
      let httpMethod;
      if (!id) {
        postUrl = addBokkURL;
        httpMethod = "post";
      } else {
        postUrl = updateBookURL;
        httpMethod = "put";
      }
      const response = await axios({
        url: postUrl,
        method: httpMethod,
        data: {
          title,
          author,
          genre,
          price,
        },
      });
      if (response.data.error) {
        console.log(response.data.error);
        toast.error(response.data.error);
      } else {
        toast.success(successMessage);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={bookFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <label>Author</label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <label>Price</label>
        <input
          type="text"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <select
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        >
          <option value="none" selected disabled>
            Select a Genre
          </option>
          {data &&
            data.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
        </select>
        {isPending && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
