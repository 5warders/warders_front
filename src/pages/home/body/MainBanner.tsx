import styled from "styled-components"

interface BannerCoordinates {
    start: number;
    end: number;
}
interface MainBannerProps {
    column?: BannerCoordinates;
    row?: BannerCoordinates;
    src: string;
}
export function MainBanner({ column, row, src }: MainBannerProps) {
    return (
        <Wrapper column={column} row={row}>
            <BannerImg src={src} />
        </Wrapper>
    )
}

const Wrapper = styled.div<{ column?: BannerCoordinates, row?: BannerCoordinates }>`
    grid-column-start: ${props => props.column?.start};
    grid-column-end: ${props => props.column?.end};
    grid-row-start: ${props => props.row?.start};
    grid-row-end: ${props => props.row?.end};
`

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`