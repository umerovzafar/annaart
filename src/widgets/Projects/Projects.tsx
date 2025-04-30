import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project from '../../assets/images/project.png';

interface ProjectItem {
    img: string;
    title: string;
    descr: string;
}

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('коммерческие помещения');

    const tabs = ['коммерческие помещения', 'жилые помещения', 'другое'];

    const items: ProjectItem[] = [
        { img: project, title: 'Современный интерьер квартиры в Ташкенте', descr: 'Этот проект — идеальное сочетание эстетики и функциональности.' },
        { img: project, title: 'Современный интерьер квартиры в Ташкенте', descr: 'Этот проект — идеальное сочетание эстетики и функциональности.' },
        { img: project, title: 'Современный интерьер квартиры в Ташкенте', descr: 'Этот проект — идеальное сочетание эстетики и функциональности.' },
        { img: project, title: 'Современный интерьер квартиры в Ташкенте', descr: 'Этот проект — идеальное сочетание эстетики и функциональности.' },
    ];

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="projects">
            <div className="projects__content container">

                <div className="projects__header" data-aos="fade-up">
                    <h2>Реализованные проекты</h2>
                    <p>
                        Наша миссия — воплощать ваши идеи в жизнь, создавая пространства, которые вдохновляют и удовлетворяют самые высокие стандарты качества...
                    </p>
                </div>

                <div className="projects__tabbar" data-aos="fade-up" data-aos-delay="100">
                    {tabs.map((tab) => (
                        <span
                            key={tab}
                            className={`projects__tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>

                <div className="projects__body">
                    {items.map((item, index) => (
                        <div
                            className="projects__body-item"
                            key={`${activeTab}-${index}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img src={item.img} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.descr}</p>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <button>
                        <span>Посмотреть все проекты</span>
                        <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Projects;
