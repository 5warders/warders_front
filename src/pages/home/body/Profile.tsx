import styled from "styled-components"
import { UserProfile } from "./UserProfile";

interface ProfileProps {
    url?: string;
}
export function Profile({ url = './36.png' }: ProfileProps) {
    return (
        <Wrapper>
            <Img src={url} />
            <UserProfile />
            <Description>Description</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #000;
    padding: 10px 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 90%;
    height: 471px;
    object-fit: contain;
    background-color: black;
`


const Description = styled.div`
    width: 90%;
    height: 46px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
`
