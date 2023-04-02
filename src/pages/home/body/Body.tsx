import styled from "styled-components"
import { Profile } from "./Profile";
import { useProfileData } from "./hooks/useProfileData";
import { useRef } from "react";
import { MainBanner } from "./MainBanner";
import MainBanner1 from "../../../assets/MainBanner1.png"
import MainBanner2 from "../../../assets/MainBanner2.png"

export function Body() {
    const targetRef = useRef<HTMLDivElement>(null);

    // 홈페이지 로드 시 프로필 조회하도록(스크롤 될 때마다 페이지 요청)
    const { data, loading, error } = useProfileData(targetRef);
    return (
        <>
            <Wrapper>
                <ProfileTable>
                    <MainBanner src={MainBanner1} column={{ start: 1, end: 2 }} />
                    <MainBanner src={MainBanner2} column={{ start: 3, end: 5 }} row={{ start: 2, end: 3 }} />
                    {data.map((profileContent, idx) => {
                        return (<Profile key={'profile_' + idx} userName={profileContent.userName} url={profileContent.imageUrl} description={profileContent.description}></Profile>)
                    })}
                </ProfileTable>
                <End ref={targetRef}></End>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
    height: 100vh;
`

const End = styled.div`
    width: 100%;
    height: 10px;
`

const ProfileTable = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;

