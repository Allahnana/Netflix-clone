import styled from "styled-components/macro";

export const Container = styled.div`
display: flex;
border-bottom: 8px solid #222;
`;

export const Body = styled.div``;

export const Frame = styled.div`
margin-bottom: 40px;
`;

export const Inner = styled.div`
display: flex;
flex-direction: column;
padding: 75px 45px;
margin: auto;
max-width: 815px;
`;

export const Item = styled.div`
color: white;
margin-bottom: 10px;



&:first-of-type{
    margin-top:3em;
}
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
margin-bottom: 1px;
background: #303030;
font-weight: normal;
font-size: 26px;
padding: 0.8em 1.2em;
user-select: none;
align-items: center;
`;

export const Title = styled.h1`
font-size: 50px;
line-height: 1.1;
margin-top: 0;
margin-bottom: 8px;
color: white;
text-align: center;


@media(max-width: 600px){
    font-size: 35px;
}
`;


