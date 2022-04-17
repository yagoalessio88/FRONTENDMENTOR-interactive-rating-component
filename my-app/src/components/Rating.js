import Logo from "../images/icon-star.svg";
import styled from "styled-components";
import { useRatingContext } from "../context/RatingContext.js";
function Rating() {
  const { setIsSubmitted, setPuntuation } = useRatingContext();

  const handlePuntuation = (e) => {
    const botones = [...e.currentTarget.querySelectorAll("div")];
    botones.map((boton) => {
      return boton.classList.remove("selected");
    });
    if (!e.target.classList.contains("puntuation-container")) {
      e.target.classList.add("selected");
    }
    const id = e.target.dataset.id;
    setPuntuation(id);
  };
  return (
    <Wrapper>
      <article className="main-section">
        <div className="logo-container">
          <img src={Logo} alt="icon star" />
        </div>
        <div>
          <h4>How did we do?</h4>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="puntuation-container" onClick={handlePuntuation}>
          <div data-id={1}>1</div>
          <div data-id={2}>2</div>
          <div data-id={3}>3</div>
          <div data-id={4}>4</div>
          <div data-id={5}>5</div>
        </div>
        <button type="button" onClick={() => setIsSubmitted(true)}>
          SUBMIT
        </button>
      </article>
    </Wrapper>
  );
}

export { Rating };

const Wrapper = styled.section`
  :root {
    --dark-grey: rgb(46, 46, 67);
    --light-grey: rgb(105, 105, 117);
  }
  .logo-container {
    background-color: rgb(46, 46, 67);
    height: 2rem;
    width: 2rem;
    margin-left: 0.5rem;
    border-radius: 50%;
    position: relative;
  }
  .logo-container img {
    height: 0.7rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  h4 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
  }
  p {
    color: rgb(105, 105, 117);
  }
  .puntuation-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-around;
  }

  .puntuation-container div {
    color: rgb(105, 105, 117);
    padding: 0.5rem;
    background-color: rgb(46, 46, 67);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    position: relative;
    text-align: center;
  }
  .puntuation-container div:hover {
    background-color: rgb(230, 121, 32);
    color: white;
    cursor: pointer;
  }
  .selected {
    background-color: rgb(105, 105, 117) !important;
    color: white !important;
  }
  .selected:hover {
    background-color: rgb(230, 121, 32) !important;
  }

  button {
    border-style: none;
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    color: rgb(232, 135, 55);
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  button:hover {
    cursor: pointer;
  }
`;
