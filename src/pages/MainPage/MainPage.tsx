import NavBar from "../../widgets/NavBar/NavBar";
import { motion } from 'framer-motion';
import image from '../../assets/images/main-header.png'
import About from "../../widgets/About/About";
import Projects from "../../widgets/Projects/Projects";
import Video from "../../widgets/Video/Video";
import Services from "../../widgets/Services/Services";

import './MainPage.scss';
import Repair from "../../widgets/Repair/Repair";
import Products from "../../widgets/Products/Products";
import Styles from "../../widgets/Styles/Styles";
import Offer from "../../widgets/Offer/Offer";
import Stages from "../../widgets/Stages/Stages";
import Banner from "../../widgets/Banner/Banner";
import Why from "../../widgets/Why/Why";
import Reviews from "../../widgets/Reviews/Reviews";

const MainPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <header className="header">
                <div className="header__content container">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        AnnArt
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Искусство, вдохновленное вами!
                    </motion.h2>

                    <motion.div
                        className="header__content-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p>
                            Полный цикл услуг: от разработки дизайна интерьеров и экстерьеров до ремонта
                            <span>«под ключ».</span>
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <span>Посмотреть проекты</span>
                            <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="white" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
                <motion.img
                    src={image}
                    alt="Header Image"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                />
            </header>
            <main className="main">
                <About />
                <Projects />
                <Video />
                <Services />
                <Repair />
                <Products />
                <Styles />
                <Offer />
                <Stages />
                <Banner />
                <Why />
                <Reviews />
            </main>

        </>
    );
}

export default MainPage;
