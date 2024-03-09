import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 767.5px) {
    display: flex;
    flex-direction: column;
  }
  .selected-profile {
    border-radius: 10rem;
    width: 8rem;
    height: 8rem;
  }

  .select-profile {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .text {
      color: var(--color-grayscale-500);

      @media (max-width: 767.5px) {
        text-align: center;
      }
    }
    .profile {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;

      &:hover {
        transform: scale(1.3);
      }
    }
    .profile-container {
      display: flex;
      gap: 0.4rem;

      @media (max-width: 767.5px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
      }
    }

    .pokemon-profile-button {
      cursor: pointer;
      width: 18rem;
      font-size: 1.4rem;
      background-color: #ff8fa3;
      margin-bottom: 1rem;

      &:hover {
        background-color: #ff758f;
        color: #fff;
      }
    }
  }
`;
