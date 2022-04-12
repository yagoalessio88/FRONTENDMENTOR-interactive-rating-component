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
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <button type="submit">SUBMIT</button>
        </div>
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
    color: white;
  }
`;
