import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookForm = () => {
  const successMessage = "Process Successful";
  const { id } = useParams();
  const addBokkURL = "/add";
  const updateBookURL = "/update/" + id;

  const [data, setData] = useState({
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
        setData({ title, author, price });
      };
      FillFormForUpdate();
    }
  }, []);

  const bookFormSubmit = async (e) => {
    e.preventDefault();
    const { title, author, price } = data;

    try {
      let postUrl;
      let httpMehtod;
      if (!id) {
        postUrl = addBokkURL;
        httpMehtod = "post";
      } else {
        postUrl = updateBookURL;
        httpMehtod = "put";
      }
      console.log(postUrl);
      const response = await axios({
        url: postUrl,
        method: httpMehtod,
        data: {
          title,
          author,
          price,
        },
      });
      if (response.data.error) {
        console.log(response.data.error);
        toast.error(response.data.error);
      } else {
        toast.success(successMessage);
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
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <label>Author</label>
        <input
          type="text"
          value={data.author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
        />
        <label>Price</label>
        <input
          type="text"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
