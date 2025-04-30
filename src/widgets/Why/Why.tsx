import { motion } from 'framer-motion';
import whyImage from '../../assets/images/why.png';

interface WhyItem {
    title: string;
    text: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
        },
    }),
};

const Why: React.FC = () => {
    const items: WhyItem[] = [
        { title: 'Комплексный подход', text: 'от идеи до реализации' },
        { title: 'Персональный подход', text: 'учитываем желания клиента' },
        { title: 'Контроль на всех этапах', text: 'от проекта до сдачи' },
        { title: '', text: '' }, // пустой
        { title: 'Фото', text: 'изображение' }, // с фото
        { title: 'Опытные специалисты', text: 'проверенные команды' },
        { title: 'Современные решения', text: 'дизайн в тренде' },
        { title: 'Гарантия качества', text: 'работаем по договору' },
    ];

    return (
        <section className="why">
            <div className="why__content container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    почему нас выбирают
                </motion.h2>

                <div className="why__cards">
                    {items.map((item, index) => {
                        if (index === 3) return <div key={index}></div>;
                        return (
                            <motion.div
                                className="why__cards-item"
                                key={index}
                                style={index === 2 || index === 4 ? { border: 'none' } : {}}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                {index === 2 || index === 4 ? (
                                    <img src={whyImage} alt="Причина" />
                                ) : (
                                    <>
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Why;
