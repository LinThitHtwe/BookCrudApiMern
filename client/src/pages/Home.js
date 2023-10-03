import BookList from "../components/BookList";

const Home = () => {
  const showAllBookUrl = "http://localhost:8000/";

  return (
    <div>
      <BookList fetchUrl={showAllBookUrl} />
    </div>
  );
};

export default Home;
