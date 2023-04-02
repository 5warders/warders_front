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
        <Wrapper src={src} column={column} row={row}>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ src: string, column?: BannerCoordinates, row?: BannerCoordinates }>`
    grid-column-start: ${props => props.column?.start};
    grid-column-end: ${props => props.column?.end};
    grid-row-start: ${props => props.row?.start};
    grid-row-end: ${props => props.row?.end};
    background-image: url(${props => props.src});
    background-size: cover;
    object-fit: none;
`