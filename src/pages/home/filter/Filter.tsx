import styled from "styled-components"

export function Filter() {
    return (
        <Wrapper>
            <FilterBtn>FIlTER1</FilterBtn>
            <FilterBtn>FIlTER2</FilterBtn>
            <FilterBtn>FIlTER3</FilterBtn>
            <FilterBtn>FIlTER4</FilterBtn>
            <FilterBtn>FIlTER5</FilterBtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #000000;
    display: flex;
    gap: 180px;
    height: 60px;


    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-transform: uppercase;
    align-items: center;
    padding-left: 37px;
    
`

const FilterBtn = styled.div`
    color: #FFFFFF;
`