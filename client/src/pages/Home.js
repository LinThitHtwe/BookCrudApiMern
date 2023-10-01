import BookList from "../components/BookList";

const Home = () => {
  const showAllUrl = "http://localhost:8000/";

  return (
    <div>
      <BookList fetchUrl={showAllUrl} />
    </div>
  );
};

export default Home;
