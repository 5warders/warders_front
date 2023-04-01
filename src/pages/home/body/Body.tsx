import styled from "styled-components"
import { Profile } from "./Profile";


import { useProfileData } from "./hooks/useProfileData";
import { useRef } from "react";

export function Body() {
    const targetRef = useRef<HTMLDivElement>(null);

    // 홈페이지 로드 시 프로필 조회하도록(스크롤 될 때마다 페이지 요청)
    const { data, loading, error } = useProfileData(targetRef);
    // 1페이지일 때는 레이아웃 다르게
    // 2페이지부터는 레이아웃 동일
    return (
        <>
            <Wrapper>
                <ProfileTable>
                    {data.map((profileContent, idx) => {
                        return (<Profile key={'profile_' + idx} url={profileContent.imageUrl} description={profileContent.description}></Profile>)
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

