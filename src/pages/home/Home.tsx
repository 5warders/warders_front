import { Body } from "./body/Body";
import { Filter } from "./filter/Filter";
import { Header } from "./header/Header";

export function Home() {
    return (
        <div>
            <Header />
            <Filter />
            <Body />
        </div>
    )
}