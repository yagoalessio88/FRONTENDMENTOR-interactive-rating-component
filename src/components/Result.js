import styled from "styled-components";
import Image from "../images/illustration-thank-you.svg";
import { useRatingContext } from "../context/RatingContext.js";
function Result() {
  const { puntuation } = useRatingContext();
  return (
    <Wrapper>
      <section>
        <article className="main-section">
          <div className="image-container">
            <img src={Image} alt="ilustration" />
            <div className="title-container">
              <h6>
                You selected <span>{puntuation}</span> out of <span>5</span>
              </h6>
            </div>
          </div>
          <div className="text-container">
            <h4>Thank you!</h4>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </article>
      </section>
    </Wrapper>
  );
}

export { Result };

const Wrapper = styled.section`
  .image-container {
    width: 100%;
    padding: 0.1rem;
    text-align: center;
  }
  .image-container img {
    display: block;
    margin: 0 auto;
  }
  .title-container {
    padding: 0.4rem;
    margin: 1.5rem auto;
    background-color: rgb(46, 46, 67);
    border-radius: 1rem;
    width: 180px;
  }
  .title-container h6 {
    color: rgb(232, 135, 55);
    font-size: 0.8rem;
  }
  .text-container {
    text-align: center;
  }
  .text-container h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: rgb(189, 189, 189);
  }
  .text-container p {
    color: rgb(105, 105, 117);
  }
`;
