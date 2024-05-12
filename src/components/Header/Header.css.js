import styled from 'styled-components';

export const Head = styled.header`
  background-color: #415a77;
  padding: 10px;

  nav ul {
    list-style-type: none;
    padding: 0;
    margin-left: 30px;
  }

  nav ul li {
    display: inline;
    margin-right: 50px;
    text-transform: uppercase;

    &:last-child {
      margin-right: 0;
    }
  }

  nav ul li a {
    font-size: 24px;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;