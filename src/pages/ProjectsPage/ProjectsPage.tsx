import { motion } from "framer-motion";
import Footer from "../../widgets/Footer/Footer";
import FormWidget from "../../widgets/Form/FormWidget";
import NavBar from "../../widgets/NavBar/NavBar";
import Projects from "../../widgets/Projects/Projects";
import './ProjectsPage.scss';

import projectsPageImage from '../../assets/images/projects_page.png';

const ProjectsPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <motion.header 
                className="header-projects"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="header-projects__content container">
                    <motion.div 
                        className="header-projects__item"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Проекты</h2>
                    </motion.div>
                    <motion.div 
                        className="header-projects__item"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>В Annart мы воплощаем в жизнь самые смелые идеи, создавая функциональные, стильные и уютные интерьеры.</p>
                        <p>В нашей работе мы используем качественные материалы, современные технологии и индивидуальный подход к каждому клиенту.</p>
                        <p>На этой странице вы найдёте реализованные проекты – от элегантных жилых пространств до роскошных коммерческих интерьеров. Мы работаем с объектами любой сложности, гарантируя качество на каждом этапе.</p>
                    </motion.div>
                </div>
            </motion.header>
            <main>
                <Projects />
                <motion.section 
                    className="projects-page"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img 
                        src={projectsPageImage} 
                        alt="" 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    />
                    <motion.div 
                        className="projects-page__content container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2>Наши проекты – пространство, созданное с душой</h2>
                        <p>Свяжитесь с нами, и мы всё сделаем за вас!</p>
                    </motion.div>
                </motion.section>
                <FormWidget />
            </main>
            <Footer />
        </>
    );
}

export default ProjectsPage;
