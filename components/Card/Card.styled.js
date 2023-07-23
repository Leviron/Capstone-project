import styled from "styled-components";

export const ContainerStyle = styled.div`
  border-radius: 1rem;
  padding: 0.8rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  .ContainerStyle--text {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  img {
    border-radius: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }

  h2 {
    font-size: 0.5rem;
    margin-top: 0.1rem;
  }
`;
