import {Slider} from "../../components/Slider/Slider";
import {Menu} from "../../components/Menu/Menu";
import Reservation from "../../components/Reservation/Reservation";
import {Google} from "../../components/Google/Google";
import {YouTube} from "../../components/YouTube/YouTube";
import {Footer} from "../../components/Footer/Footer";


export const Main = () => {

    return (
        <>
            <Slider />

            <Menu />
            <Reservation />
            <Google />
            <YouTube />
            <Footer />
        </>
    );
};