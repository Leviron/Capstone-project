import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  background-color: #fff;

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

export const FormButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

export const AddButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;
