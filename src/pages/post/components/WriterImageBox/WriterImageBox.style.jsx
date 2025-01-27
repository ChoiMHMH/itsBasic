import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 500rem;
  overflow: hidden;
  border: 0.2rem solid #fff;
  background-image: url(${({ $profileImageUrl }) => $profileImageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: -1rem;
`;

export const NumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 500rem;
  background-color: var(--color-white);
  border: 0.2rem solid #e3e3e3;
  margin-left: -1rem;

  p {
    font-weight: 500;
    color: #484848;
  }
`;
