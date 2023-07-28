import styled from "styled-components";

export const MoreDetailsLayout = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem;
  margin-left: 15rem;
  margin-right: 15rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem;
  text-align: center;
  margin: 3rem;
`;

export const GoBackButton = styled.button`
  align-self: center;
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

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ImageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  img {
    width: 200px;
    height: 180px;
    object-fit: cover;
  }

  dfn {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const Ingredients = styled.ul`
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 2rem;
  margin-right: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: flex-start;
  }

  li {
    display: flex;
    font-weight: bold;
    font-size: 0.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;
