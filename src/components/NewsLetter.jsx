import { Email } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 10px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: teal;
    color: #fff;
    transition: all .3s ease;
    &:hover {
        background-color: #02a1a1;
    }
`;

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get updates on every update</Description>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button><Email /></Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter