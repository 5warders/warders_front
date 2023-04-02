import styled from "styled-components"
import heartUrl from "./heart.png"

interface UserProfileProps {
    userName: string;
}

export function UserProfile({ userName }: UserProfileProps) {
    return (
        <Wrapper>
            <UserInfo>
                <UserImg />
                <UserName>{userName}</UserName>
            </UserInfo>
            <Heart src={heartUrl} />
        </Wrapper>
    )
}



const Wrapper = styled.div`
    height: 40px;
    width: 90%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;

`

const UserImg = styled.img`
    width: 28px;
    height: 28px;
    background-color: #000000;
    border-radius: 50%;
`

const UserName = styled.div`
    margin-left: 12px;
    line-height: 28px;
    height: 22px;
`

const Heart = styled.img`
    width: 20px;
    height: 18px;
`