import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  color: var(--color-grayscale-900);
  margin-right: 5.7rem;

  @media (max-width: 1023.5px) {
    display: none;
  }

  p {
    color: var(--color-grayscale-900);
  }
`;
