import { Layout } from "./components/UI/Layout";
import { MovieDetail } from "./components/Movie/MovieDetail";
import { MovieList } from "./components/Movie/MovieList";

function App() {
  return (
    <Layout>
      <MovieDetail />
      <MovieList />
    </Layout>
  );
}

export default App;
