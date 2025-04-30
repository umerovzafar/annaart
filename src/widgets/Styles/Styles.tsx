import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import style from '../../assets/images/style.png';
import "swiper/swiper-bundle.css";
import { motion } from 'framer-motion';

interface StylesItem {
    img: string;
    title: string;
    text: string;
}

const Styles: React.FC = () => {

    const items: StylesItem[] = [
        { img: style, title: 'Лофт', text: 'Индустриальная эстетика: открытые трубы, бетон, кирпич, металл. Простор, высокие потолки и сочетание брутальности с уютом.' },
        { img: style, title: 'Лофт', text: 'Индустриальная эстетика: открытые трубы, бетон, кирпич, металл. Простор, высокие потолки и сочетание брутальности с уютом.' },
        { img: style, title: 'Лофт', text: 'Индустриальная эстетика: открытые трубы, бетон, кирпич, металл. Простор, высокие потолки и сочетание брутальности с уютом.' },
        { img: style, title: 'Лофт', text: 'Индустриальная эстетика: открытые трубы, бетон, кирпич, металл. Простор, высокие потолки и сочетание брутальности с уютом.' },
        { img: style, title: 'Лофт', text: 'Индустриальная эстетика: открытые трубы, бетон, кирпич, металл. Простор, высокие потолки и сочетание брутальности с уютом.' },
    ];
    return (
        <section className="styles">
            <div className="styles__top container">
                <h2>Стили</h2>
                <p>на нашем сайте вы можете посмотреть разные вариации стиля а так же выбрать и вдохновиться на свой интерьер</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={52}
                modules={[Pagination]}
                className="mySwiper styles__swiper"
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide className="styles__swiper-slide" key={index}>
                            <img src={item.img} alt="" />
                            <div className="styles__swiper-slide-content">
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
            <div className="styles__content container">
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
        </section>
    );
}

export default Styles;