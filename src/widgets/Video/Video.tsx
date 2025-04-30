import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import carouselItem from '../../assets/images/carousel-item.png';

const Video: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="video">
            <div className="video__content container">

                <div className="video__top" data-aos="fade-up">
                    <h2>посмотрите видео о нашей компании</h2>
                    <div className="video__top-player">

                    </div>
                </div>

                <motion.div
                    className="video__carousel"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src={carouselItem} alt="carousel item" />
                </motion.div>

            </div>
        </section>
    );
};

export default Video;
