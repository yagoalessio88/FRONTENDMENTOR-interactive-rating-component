import { Rating } from "./components/Rating.js";
import { Result } from "./components/Result.js";
import "./App.css";
import { useRatingContext } from "./context/RatingContext.js";

function App() {
  const { isSubmitted } = useRatingContext();

  return (
    <section className="App">{!isSubmitted ? <Rating /> : <Result />}</section>
  );
}

export default App;
