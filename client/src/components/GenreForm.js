import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const GenreForm = () => {
  const successMessage = "Process Successful";
  const navigate = useNavigate();
  const { id } = useParams();
  const addGenreUrl = "/genre/add";
  const updateGenreURL = "/genre/update/" + id;

  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    if (id) {
      const FillFormForUpdate = async () => {
        const response = await axios.get(updateGenreURL);
        const { name } = response.data;
        setData({ name });
      };
      FillFormForUpdate();
    }
  }, []);

  const genreSubmitForm = async (e) => {
    e.preventDefault();

    const { name } = data;
    try {
      let submitUrl;
      let httpMethod;
      if (!id) {
        submitUrl = addGenreUrl;
        httpMethod = "post";
      } else {
        submitUrl = updateGenreURL;
        httpMethod = "put";
      }
      const response = await axios({
        url: submitUrl,
        method: httpMethod,
        data: { name },
      });
      if (response.data.error) {
        console.log(response.data.error);
        toast.error(response.data.error);
      } else {
        toast.success(successMessage);
        navigate("/genre");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={genreSubmitForm}>
        <label>Genre name:</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GenreForm;
