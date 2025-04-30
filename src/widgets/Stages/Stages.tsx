import { motion } from 'framer-motion';
import text from '../../assets/images/text.png';


interface StagesItem {
    num: string;
    title: string;
    subtitle: string;
    descr: string;
    options: Array<string>;
    bottomTitle: string;
    bottomDescr: string;
}

const Stages: React.FC = () => {

    const items: StagesItem[] = [
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '02',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        },
        {
            num: '01',
            title: 'Консультация и обсуждение проекта',
            subtitle: 'Что входит в услугу:',
            descr: 'Мы начинаем с детального обсуждения ваших пожеланий, стиля, функциональности и бюджета.',
            options: ['•Бесплатная консультация с дизайнером•Определение сроков и этапов работы', '•Анализ особенностей помещения', '•Обсуждение стилистики и предпочтений'],
            bottomTitle: 'Результат',
            bottomDescr: 'вы получаете понимание, каким будет ваш будущий интерьер.',
        }
    ];

    return (
        <section className="stages">
            <div className="stages__content container">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    полностью берем на себя все этапы работы от дизайна до результата
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Вам не нужно искать подрядчиков, закупать материалы и контролировать ремонт. Всё под ключ!
                </motion.p>

                <div className="stages__cards">
                    {
                        items.map((item, index) => (
                            <motion.div
                                className="stages__cards-item"
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4>[{item.num}]</h4>
                                <div className="divider"></div>
                                <h5>{item.title}</h5>
                                <p>{item.subtitle}</p>
                                <span>{item.descr}</span>
                                <ul>
                                    {
                                        item.options.map((option, index) => (
                                            <li key={index}>{option}</li>
                                        ))
                                    }
                                </ul>
                                <p>{item.bottomTitle}</p>
                                <span>{item.bottomDescr}</span>
                            </motion.div>
                        ))
                    }
                    <motion.div
                        className="stages__cards-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 8 * 0.1 }}
                        viewport={{ once: true }}
                    >

                        <img src={text} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Stages;
