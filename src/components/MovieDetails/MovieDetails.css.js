import { Link } from 'react-router-dom';
import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
display: flex;
  align-items: flex-start;
  width: 100%;
`
export const MovieDetailsInfo = styled.div`
flex: 1`

export const MovieTitle = styled.h2`
padding: 20px`

export const MovieDescription = styled.p`
width: 50%;
padding: 0 30px;`

export const MovieRelase = styled.p`
font-size: 10px;
padding: 0 30px;
`
export const MoviePoster = styled.img`
width: 250px;
margin-left: 20px;`

export const LinksContainer = styled.div`
  margin-top: 50px;
  padding-left: 30px;
`
export const StyledLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
  display: block;
  margin-bottom: 5px;`