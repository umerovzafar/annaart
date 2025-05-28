import Footer from "../../widgets/Footer/Footer";
import FormWidget from "../../widgets/Form/FormWidget";
import NavBar from "../../widgets/NavBar/NavBar"
import Projects from "../../widgets/Projects/Projects";
import './ProjectsPage.scss';

import projectsPageImage from '../../assets/images/projects_page.png'

const ProjectsPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <header className="header-projects">
                <div className="header-projects__content container">
                    <div className="header-projects__item">
                        <h2>Проекты</h2>
                    </div>
                    <div className="header-projects__item">
                        <p>В Annart мы воплощаем в жизнь самые смелые идеи, создавая функциональные, стильные и уютные интерьеры.</p>
                        <p>  В нашей работе мы используем качественные материалы, современные технологии и индивидуальный подход к каждому клиенту.</p>
                        <p>На этой странице вы найдёте реализованные проекты – от элегантных жилых пространств до роскошных коммерческих интерьеров. Мы работаем с объектами любой сложности, гарантируя качество на каждом этапе.</p>
                    </div>
                </div>
            </header>
            <main>
                <Projects />
                <section className="projects-page">
                    <img src={projectsPageImage} alt="" />
                    <div className="projects-page__content container">
                        <h2>Наши проекты – пространство, созданное с душой</h2>
                        <p>Свяжитесь с нами, и мы всё сделаем за вас!</p>
                    </div>
                </section>
                <FormWidget />
            </main>
            <Footer />
        </>
    )
}

export default ProjectsPage;