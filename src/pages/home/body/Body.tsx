import styled from "styled-components"
import { Profile } from "./Profile";
import emptyUrl1 from "./42.png"
import emptyUrl2 from "./39.png"
import emptyUrl3 from "./36.png"

export function Body() {
    // 스크롤 될때마다 페이지 요청
    // 1페이지일 때는 레이아웃 다르게
    // 2페이지부터는 레이아웃 동일
    return (
        <Wrapper>
            <ProfileTable>
                {/* 테스트용.. urlList 받아서 개수만큼 그리도록 변경*/}
                <Profile url={emptyUrl1}></Profile>
                <Profile url={emptyUrl2}></Profile>
                <Profile url={emptyUrl3}></Profile>
                <Profile url={emptyUrl1}></Profile>
                <Profile url={emptyUrl2}></Profile>
                <Profile url={emptyUrl3}></Profile>
                <Profile url={emptyUrl1}></Profile>
                <Profile url={emptyUrl2}></Profile>
                <Profile url={emptyUrl3}></Profile>
                <Profile url={emptyUrl1}></Profile>
                <Profile url={emptyUrl2}></Profile>
                <Profile url={emptyUrl3}></Profile>
            </ProfileTable>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    height: 100vh;
`

const ProfileTable = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;

