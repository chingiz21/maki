import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
`;


const Announcements = () => {
  return (
    <Container>
        Free shipping all over the world!
    </Container>
)
}

export default Announcements