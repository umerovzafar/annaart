import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "ВЫ ДЕЛАЕТЕ РЕМОНТ ТОЛЬКО ПО ВАШИМ ПРОЕКТАМ ИЛИ МОЖЕТЕ РАБОТАТЬ С УЖЕ ГОТОВЫМ ДИЗАЙНОМ?",
        answer: "Мы можем реализовать ремонт как по нашему дизайн-проекту, так и по вашему готовому. Если у вас уже есть проект, мы проведем его детальный анализ и предложим оптимальные решения для его реализации."
    },
    {
        question: "МОЖНО ЛИ ЗАКАЗАТЬ У ВАС ТОЛЬКО ДИЗАЙН-ПРОЕКТ БЕЗ РЕМОНТА?",
        answer: "Да, вы можете заказать только разработку дизайн-проекта без последующего ремонта."
    },
    {
        question: "СКОЛЬКО ВРЕМЕНИ ЗАНИМАЕТ РЕМОНТ ПОД КЛЮЧ?",
        answer: "Сроки зависят от объёма и сложности проекта, но в среднем ремонт под ключ занимает от 3 до 6 месяцев."
    },
    {
        question: "ВЫ ДАЁТЕ ГАРАНТИЮ НА РЕМОНТ И МАТЕРИАЛЫ?",
        answer: "Да, мы предоставляем гарантию на все виды работ и используемые материалы."
    },
    {
        question: "МОЖНО ЛИ ЗАКАЗАТЬ У ВАС ТОЛЬКО МАТЕРИАЛЫ БЕЗ РЕМОНТА?",
        answer: "Мы специализируемся на комплексных проектах, но готовы рассмотреть индивидуальные запросы по поставке материалов."
    }
];

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-container container">
                <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button onClick={() => toggleIndex(index)}>
                            {item.question}
                            <span className="faq-arrow">
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease"
                                    }}
                                >
                                    <path
                                        d="M27 22.5L18 13.5L9 22.5"
                                        stroke="white"
                                        strokeWidth="1.67"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.p
                                    className="faq-answer"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQAccordion;
