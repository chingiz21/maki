import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 1px solid #000;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    transition: all .3s ease;
    ${mobile({ display: "none" })}

    &:hover {
        color: #9f9f9f;
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    text-decoration: none;
`;

const Logo = styled.h1`
    font-weight: 700;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    transition: all .3s ease;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

    &:hover {
        color: #9f9f9f;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color: "gray", fontSize: 16}} />
            </SearchContainer>
        </Left>
        <Center><StyledLink to="/"><Logo>MAKI</Logo></StyledLink></Center>
        <Right>
            <StyledLink to="/register"><MenuItem>REGISTER</MenuItem></StyledLink>
            <StyledLink to="/login"><MenuItem>SIGN IN</MenuItem></StyledLink>
            <StyledLink to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
            </StyledLink>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar