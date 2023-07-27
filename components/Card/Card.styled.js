import styled from "styled-components";

export const ContainerStyle = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem;
  margin-left: 15rem;
  margin-right: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  img {
    border-radius: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.1rem;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
    margin-top: 0.1rem;
    align-items: center;
    text-align: center;
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 3rem;
  margin-left: 30rem;
  margin-right: 30rem;
  align-items: center;

  input {
    width: 80%;
    height: 2rem;
    border-radius: 20px;
    border: 1px solid black;
    border-color: grey;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const MoreDetailButton = styled.button`
  width: 10rem;
  height: 2rem;
  border-radius: 20px;
  border: 1px solid black;
  border-color: grey;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  justify-content: flex-end;

  &:hover {
    background-color: black;
    color: white;
  }
`;
