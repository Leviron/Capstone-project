import styled from "styled-components";

export const MoreDetailsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 1px solid black;
  border-radius: 20px;
  border-color: grey;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
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

export const ImageStyle = styled.div``;

export const Ingredients = styled.ul`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  ul {
    width: 100%;
    font-size: 1.5rem;

    text-align: center;
    text-decoration: none;
  }

  li {
    list-style: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
