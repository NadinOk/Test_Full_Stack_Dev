import Styles from "./styles.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import {MainPage} from "../../Pages";

const Main = ({footer}) => {
    return (
        <div className={Styles.container}>
            <Header/>
            <main className={Styles.main_content}>
                <MainPage/>
            </main>
            {footer && <Footer/>}
        </div>
    );
};

export default Main;
