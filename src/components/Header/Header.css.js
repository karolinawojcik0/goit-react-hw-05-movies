import styled from 'styled-components';

export const Head = styled.header`
  background-color: #333;
  padding: 10px;

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  nav ul li a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;