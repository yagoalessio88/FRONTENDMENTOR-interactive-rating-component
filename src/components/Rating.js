import Logo from "../images/icon-star.svg";
import styled from "styled-components";
import { useRatingContext } from "../context/RatingContext.js";
function Rating() {
	const { setIsSubmitted, setPuntuation } = useRatingContext();

	const handlePuntuation = (e) => {
		const buttonsContainer = document.querySelector(".puntuation-container");
		const botones = [...buttonsContainer.querySelectorAll(".span")];
		botones.map((boton) => {
			return boton.classList.remove("selected");
		});
		e.target.classList.add("selected");
		const id = e.target.dataset.id;
		setPuntuation(id);
	};
	return (
		<Wrapper>
			<section>
				<article className="main-section">
					<div className="logo-container">
						<img src={Logo} alt="icon star" />
					</div>
					<div className="body-content">
						<h4>How did we do?</h4>
						<p>
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
					</div>
					<div className="puntuation-container">
						<div>
							<span className="span" data-id={1} onClick={handlePuntuation}>
								1
							</span>
						</div>
						<div>
							<span className="span" data-id={2} onClick={handlePuntuation}>
								2
							</span>
						</div>
						<div>
							<span className="span" data-id={3} onClick={handlePuntuation}>
								3
							</span>
						</div>
						<div>
							<span className="span" data-id={4} onClick={handlePuntuation}>
								4
							</span>
						</div>
						<div>
							<span className="span" data-id={5} onClick={handlePuntuation}>
								5
							</span>
						</div>
					</div>
					<button type="button" onClick={() => setIsSubmitted(true)}>
						SUBMIT
					</button>
				</article>
			</section>
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
		background: #262e38;
		height: 3rem;
		width: 3rem;
		margin-left: 0.5rem;
		border-radius: 50%;
		position: relative;
	}
	.logo-container img {
		height: 1rem;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	h4 {
		font-size: 1.75rem;
		margin-top: 1.75rem;
		margin-bottom: 1rem;
		color: #ffffff;
	}
	p {
		font-size: 1rem;
		color: #969fad;
	}
	.body-content {
		margin: 1rem;
	}
	.puntuation-container {
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-around;
	}

	.puntuation-container div {
		color: #7c8798;
		padding: 0.5rem;
		background: #262e38;
		height: 3.18rem;
		width: 3.18rem;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
	}
	span {
		padding: 60%;
		position: absolute;
		left: 48%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.puntuation-container div:hover {
		background-color: rgb(230, 121, 32);
		color: white;
		cursor: pointer;
	}
	.selected {
		background: #7c8798 !important;
		color: #ffffff !important;
	}
	.selected:hover {
		background-color: rgb(230, 121, 32) !important;
	}

	button {
		border-style: none;
		width: 100%;
		height: 2.81rem;
		padding: 0.5rem;
		border-radius: 1.5rem;
		color: #ffffff;
		background: #fc7614;
		font-weight: 600;
		letter-spacing: 0.1rem;
	}
	button:hover {
		cursor: pointer;
		background: #ffffff;
		color: rgb(232, 135, 55);
	}
`;
