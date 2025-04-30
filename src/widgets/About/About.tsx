import { motion } from 'framer-motion';

interface CardModel {
    num: string;
    text: string;
}

const About: React.FC = () => {
    const items: CardModel[] = [
        { num: '10+', text: 'лет опыта – создаём стильные интерьеры с 2014 года.' },
        { num: '300+', text: 'реализованных проектов – квартиры, дома, офисы и коммерческие пространства.' },
        { num: '100%', text: 'под ключ – от идеи до финального декора, включая поставку материалов.' },
        { num: '50+', text: 'профессионалов – команда дизайнеров, архитекторов и строителей.' },
    ];

    return (
        <section className="about">
            <div className="about__content container">

                <motion.div
                    className="about-top"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>О нас</h2>
                    <p>
                        Annart — команда профессионалов в области дизайна интерьеров и поставок строительных материалов.
                    </p>
                    <p>
                        Мы создаём комфортные и эстетичные пространства для жизни и бизнеса. <span>
                            Наша команда профессионалов с 25-летним опытом выполняет полный цикл работ: от проектирования и подбора материалов до чистовой отделки и финального декора.
                        </span>
                    </p>
                </motion.div>

                <div className="about-cards">
                    {items.map((item, index) => (
                        <motion.div
                            className="about-cards-item"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3>{item.num}</h3>
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default About;
