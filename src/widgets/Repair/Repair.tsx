import { motion } from 'framer-motion';

interface RepairItem {
    text: string;
}

const Repair: React.FC = () => {
    const repairs: RepairItem[] = [
        { text: '50 % суммы вы выплачиваете сразу 50% — в рассрочку через банк.' },
        { text: 'Наши надёжные партнёры: Хамкор Банк и Инфин Банк ' },
        { text: 'Сумма рассрочки — до $50 000' },
        { text: 'Срок — до 10 лет' },
    ];

    return (
        <section className="repair">
            <div className="repair__content container">

                <motion.div
                    className="repair__top"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Ремонт и материалы в рассрочку<br />
                        удобно и без переплаты
                    </h2>
                    <p>
                        В компании Annart мы предлагаем нашим клиентам возможность организовать рассрочку на ремонт, дизайн и строительные материалы — на выгодных и прозрачных условиях.
                    </p>
                </motion.div>

                <motion.div
                    className="repair__work"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {}
                    }}
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Как это работает:
                    </motion.h3>

                    <div className="repair__work-cards">
                        {repairs.map((repair, index) => (
                            <motion.div
                                className="repair__work-cards-item"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <span>{repair.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="repair__info">
                    <motion.div
                        className="repair__info-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5>
                            Деньги выдаются наличными, вы можете использовать их по своему усмотрению:
                            <span>— оплатить ремонт</span>
                            <span>— заказать мебель</span>
                            <span>— приобрести любые материалы</span>
                        </h5>
                        <p>
                            Обязательное условие — залог , как стандартное требование банков.
                            <span>
                                Но оформление происходит через нас , поэтому вы продолжаете ссуду гораздо быстрее , без лишней бюрократии и с гарантией.
                            </span>
                        </p>
                    </motion.div>

                    <motion.div
                        className="repair__info-item"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="repair__info-item-content">
                            <h4>Хотите узнать, подойдёт ли вам рассрочка?</h4>
                            <div className="repair__info-item-content-text">
                                <p>
                                    Оставьте заявку — мы всё подробно описали и поможем с оформлением.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span>связаться с нами</span>
                                    <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.3536 4.35355C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464466C29.9763 0.269204 29.6597 0.269204 29.4645 0.464466C29.2692 0.659728 29.2692 0.976311 29.4645 1.17157L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53553C29.6597 7.7308 29.9763 7.7308 30.1716 7.53553L33.3536 4.35355ZM0 4.5H33V3.5H0V4.5Z" fill="white" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Repair;
