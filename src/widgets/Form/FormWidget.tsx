const FormWidget:React.FC = ()=> {
    return (
        <section className="form">
            <div className="form__content container">
                <div className="form__item">
                    <h2>Давайте обсудим ваш проект!</h2>
                    <p>Заполните форму, и мы свяжемся с вами в ближайшее время. Обсудим ваши пожелания, ответим на вопросы и предложим оптимальные решения для вашего интерьера.</p>
                </div>
                <div className="form__item">
                    <form action="">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="+998" />
                        <button>связаться с нами</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FormWidget;