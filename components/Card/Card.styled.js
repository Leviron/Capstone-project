import styled from "styled-components";

export const ContainerStyle = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  .ContainerStyle--text {
    display: flex;
    flex-direction: column;
    margin-left: 15rem;
  }

  img {
    margin-left: 5rem;
    border-radius: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.1rem;
    align-items: center;
  }

  h2 {
    font-size: 1rem;
    margin-top: 0.1rem;
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
`;
