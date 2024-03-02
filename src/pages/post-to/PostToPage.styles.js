import styled from "styled-components";

const PostToPageStyle = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  margin: 5.7rem auto 6.9rem auto;

  .container {
    width: 72rem;
  }

  .recipient-title {
    margin-bottom: 1.2rem;
    line-height: 4.2rem;
  }

  .recipient-input {
    width: 100%;
    height: 5rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--color-grayscale-300);
    background: var(--color-white);
  }

  .background-container {
    margin-top: 5rem;
  }

  .text {
    margin-bottom: 0.4rem;
  }

  .buttons {
    margin: 2.4rem 0 4.5rem;
  }

  button {
    width: 12.2rem;
    height: 4rem;
    border: none;
    border-radius: 0.6rem;
  }

  .select {
    border-radius: 0.6rem;
    border: 0.2rem solid var(--color-purple-600);
    background: var(--color-white);
    color: var(--color-purple-700);
  }

  .card-container {
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    width: 100%;
    height: 16.8rem;
  }

  .card {
    width: 16.8rem;
    height: 16.8rem;
  }

  @media screen and (max-width: 1024px) {
    margin: 4.9rem 2.4rem 34rem 2.4rem;

    .background-container {
      margin-top: 5.4rem;
    }

    .buttons {
      margin-bottom: 4rem;
    }

    .card {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 5rem auto 8.2rem auto;

    .container {
      width: 100%;
      margin: 0 2.4rem;
    }

    .recipient-title {
      line-height: 3.6rem;
    }

    .background-container {
      margin-top: 4.8rem;
    }

    .buttons {
      margin-bottom: 2.8rem;
    }

    .card-container {
      display: grid;
      grid-template-columns: minmax(auto, 15.4rem) minmax(auto, 15.4rem);
      height: auto;
    }

    .card {
      width: auto;
      height: 15.4rem;
    }
  }
`;

export default PostToPageStyle;