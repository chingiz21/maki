import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-bottom: 5px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    color: #000;
    width: 40%;
    transition: all .3s ease;

    &:hover {
        color: #878787;
    }
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" /> 
                <Input placeholder="Password" /> 
                <Button>LOGIN</Button>
                <Link href='#'>FORGOT YOUR PASSWORD?</Link> 
                <Link href='#'>CREATE A NEW ACCOUNT</Link> 
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login