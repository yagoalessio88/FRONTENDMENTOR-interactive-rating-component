import Logo from "../images/icon-star.svg";
import styled from "styled-components";

function Rating() {
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
        <div className="puntuation-container">
          <div className="puntuation-1">
            <span>1</span>
          </div>
          <div className="puntuation-2">
            <span>2</span>
          </div>
          <div className="puntuation-3">
            <span>3</span>
          </div>
          <div className="puntuation-4">
            <span>4</span>
          </div>
          <div className="puntuation-5">
            <span>5</span>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </article>
    </Wrapper>
  );
}

export { Rating };

const Wrapper = styled.section`
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
    padding: 0.5rem;
    background-color: rgb(46, 46, 67);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    position: relative;
  }
  .puntuation-container span {
    font-weight: 600;
    color: rgb(105, 105, 117);
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-45%, -45%);
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
`;
