import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 30px;
  gap: 50px;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 60px;
  width: 500px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  padding: 0 120px 0 20px;
border: none;
outline: none;
  color: #1b263b;
  background-color: #e0e1dd;

  transition: border-color 0.5s ease;

`;

export const SearchButton = styled.button`
    outline: none;
    border: none;
  cursor: pointer;
  height: 65px;
  width: 120px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  color: #e0e1dd;
  background-color: #1b263b;

  &:hover,
  &:focus {
    color: #1b263b;
    background-color: #e0e1dd;
  }
`;
