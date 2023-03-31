import styled from "styled-components"
import menuUrl from "../../assets/bars.png"
import { useNavigate } from 'react-router-dom';
import searchUrl from "../../assets/magnifier.png"

export function LoginTab() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Login');
    };

    return (
        <Wrapper>
            <InnerWrapper>
                <Title onClick={handleClick}>LOGIN</Title>
                <TabWrapper>
                    <MenuBtn src={menuUrl}></MenuBtn>
                    <SearchBtn src={searchUrl}></SearchBtn>
                </TabWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 480px;
    height: 79.3px;
    display: flex;
    position: absolute;
    align-items: center;
    right: 0;
    border-left: 1px solid #000000;
`

const InnerWrapper = styled.div`
    width: 365px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 50px;
`

const TabWrapper = styled.div`
    display: flex;
    gap: 35.35px;
`

const Title = styled.div`
    width: 74px;
    height: 29px;
    left: 1490px;
    top: 25px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-transform: uppercase;

    color: #000000;
`
const MenuBtn = styled.img`
    width: 30px;
    height: 30px;
`

const SearchBtn = styled.img`
    width: 30px;
    height: 30px;
`