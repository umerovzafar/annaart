import { motion } from 'framer-motion';
import service from '../../assets/images/service.png';

interface ServiceItem {
    img: string;
    number: string;
    title: string;
    options: Array<string>;
    descr: string;
}

const Services: React.FC = () => {
    const services: ServiceItem[] = [
        {
            img: service,
            number: '01',
            descr: 'Мы берём на себя все этапы работ – от диагностики до финального декора, чтобы вы получили готовый к проживанию интерьер без хлопот',
            title: 'Профессиональный ремонт под ключ',
            options: [
                'Планировочные решения',
                '3D-визуализация',
                'Рабочая документация',
                'Подбор материалов и мебели',
            ],
        },
        {
            img: service,
            number: '02',
            descr: 'Мы берём на себя все этапы работ – от диагностики до финального декора, чтобы вы получили готовый к проживанию интерьер без хлопот',
            title: 'Полный спектр строительных материалов',
            options: [
                'Эскизный проект',
                'Рабочая документация',
                'Конструктивные решения',
                'Согласование проекта',
            ],
        },
        {
            img: service,
            number: '03',
            descr: 'Мы берём на себя все этапы работ – от диагностики до финального декора, чтобы вы получили готовый к проживанию интерьер без хлопот',
            title: 'Авторский надзор',
            options: [
                'Контроль соответствия проекту',
                'Консультации строителей',
                'Корректировки в процессе работ',
                'Фототчёты и визиты на объект',
            ],
        },
    ];

    return (
        <section className="services">
            <div className="services__content container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Услуги <span>нашей компании</span>
                </motion.h2>

                <div className="services__cards">
                    {services.map((item, index) => (
                        <motion.div
                            className="services__cards-item"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img src={item.img} alt="" />
                            <p>[{item.number}]</p>
                            <h4>{item.title}</h4>
                            <span>{item.descr}</span>
                            <ul>
                                {item.options.map((option, i) => (
                                    <li key={i}>
                                        {i + 1} {option}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
