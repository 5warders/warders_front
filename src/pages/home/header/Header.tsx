import styled from "styled-components";
import image from '../../../assets/Black_Umbrella.png'
import { LoginTab } from "./LoginTab";

export function Header() {

    return (
        <Wrapper>
            <Title src={image}></Title>
            <LoginTab />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;   
    height: 79.3px;
    border-bottom: 1px solid #000000;
    display: grid;
`

const Title = styled.img`
    position: absolute;
    left: 37px;
    width: 322px;
    height: 25px;
    top: 30px;
`