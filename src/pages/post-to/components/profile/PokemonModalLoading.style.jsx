import styled, { keyframes } from "styled-components";
const movePokeball = keyframes`
		0%,
	100% {
		transform: rotate(0deg);
		transform-origin: 50% 50%;
	}

	10% {
		transform: rotate(40deg);
	}

	20%,
	40%,
	60% {
		transform: rotate(-40deg);
	}

	30%,
	50%,
	70% {
		transform: rotate(40deg);
	}

	80% {
		transform: rotate(-40deg);
	}

	90% {
		transform: rotate(40deg);
	}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    animation: ${movePokeball} 5s 0s infinite linear alternate;
  }

  p {
    font-size: 5rem;
    margin-top: 2rem;
    text-align: center;
  }
`;
