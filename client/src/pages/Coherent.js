import Button from '../components/Button';
import ContactSection from '../components/ContactSection';
import FrQuestionLink from '../components/FrQuestionLink';
import { Link } from 'react-router-dom';

//Page Transition
import { motion } from 'framer-motion';
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

import Coherent from '../images/coherent.svg';
import ScientistImg from '../images/garyshweb.png';
import Microscope from '../images/microscope.png';
import TftDisplay from '../images/tft-display.png';

const PresentationCoherent = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            <div className="text-half text-more-than-half">
                <p>Мы предлагаем работающие решения для всех, кто занимается стоматологией и лабораторными исследованиями. Наша задача — продвигать  продукты, которые помогают стоматологическим компаниям медицине и улушают качество  жизни людей вокруг.<br/><strong>Мы — компания Garysh.</strong></p>
            </div>
            
            <div className="line line-purple"></div>
            <section className="grid-2-columns">

                <img className="flex-img" src={ScientistImg} alt="close-up-scientist-wearing-face-mask-with-coherent-laser"/>
                
                <div className="bg-blue half-round-left div-space-between order-first">
                    <div className="wrapper-main">
                        <h1>Настольный лазер</h1>
                        <p>Компактная система для сварки и резки мелких деталей.  Отлично подходит для металлических изделий и лабораторных работ.</p>
                    </div>
                    <img className="coherent-logo" src={Coherent} alt="coherent"/>
                    <div className="wrapper-main">
                        <Button buttonStyle="btn-transparent" buttonSize="btn-medium">Оставить заявку</Button>
                    </div>
                </div>
            </section>
            
            <div className="text-half">
                <p><strong>Микроскоп Leica.</strong> Микроскоп премиум-класса от немецкого производителя Leica.</p>
            </div>

            <section>
                <div className="drop-shape-left bg-light-grey">
                    <div className="wrapper split">
                        <div className="text-wrapper bg-grey-text">
                            <h1>Микроскоп Leica</h1>
                            <p>Он содержит всемирно известную оптику, оптическую эргономику, хорошую силу света и большое увеличение.</p>
                        </div>
                        <div className="img-wrapper">
                            <img className="flex-img img-in-wrapper" src={Microscope} alt="microscope"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-half">
                <p><strong>TFT Дисплей.</strong> Цветной дисплей с сенсорным интерфейсом прямо как на телефоне</p>
            </div>

            <section>
                <div className="drop-shape-right bg-blue">
                    <div className="wrapper split">
                        <div className="text-wrapper">
                            <h1>TFT Дисплей</h1>
                            <p>Комбинированное устройство, которое включает в себя ЖК-дисплей TFT и сенсорную накладку на экране / дисплее. Может отображать контент и действовать как интерфейс</p>
                        </div>
                        <div className="img-wrapper order-first">
                            <img className="flex-img img-in-wrapper" src={TftDisplay} alt="tft-display"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-half">
                <p><strong>Для чего предназначен лазер?</strong><br/>Компактная система для сварки и резки мелких деталей. Отлично подходит для обработки металлических изделий и лабораторных работ. Используется в разных индустриях.</p>
            </div>

            <section className="grid-more">
                <div className="round-right-up bg-blue grid-more-item div-border-bottom">
                    <h2>Стоматология</h2>
                    <p>Протезирование зубов (мостовидные протезы, имплантаты, полные и частичные протезы). Лазер отлично поможет решить данные задачи стоматологов, и поможет людям обрести улыбку и уверенность</p>
                    <Button buttonStyle="btn-more" buttonSize="btn-small">Подробнее</Button>
                </div>
                <div className="half-round-left bg-purple grid-more-item">
                    <h2>Сварка материалов</h2>
                    <p>Сварка с помощью лазерного луча также предотвращает обесцвечивание и дает небольшой, прямой и прочный сварной шов, который имеет привлекательный внешний вид и не требует последующей шлифовки.</p>
                    <Button buttonStyle="btn-more" buttonSize="btn-small">Подробнее</Button>
                </div>
                <div className="drop-shape-left bg-dark-grey item-mobile grid-more-item">
                    <h2>Блог</h2>
                    <p>Самые последние новости и истории успешных кейсов наших партнеров можете найти в блоге.</p>
                    <Button buttonStyle="btn-more" buttonSize="btn-small">Перейти</Button>
                </div>
                <div className="half-round-bottom bg-blue grid-more-item grid-more-item-padding">
                    <h2>Ювелирные изделия</h2>
                    <p>Лазер может резать, сваривать или маркировать с высокой пространственной точностью и без неблагоприятного воздействия на драгоценные материалы.</p>
                    <Link to="/blog"><Button buttonStyle="btn-more" buttonSize="btn-small">Перейти</Button></Link>
                </div>
                <div className="round bg-light-grey item-last grid-more-item">
                    <h2>Частые вопросы</h2>
                    <div className="fr-question-list">
                        <FrQuestionLink to="/faq#we-work-with">С кем мы работаем?</FrQuestionLink>
                        <FrQuestionLink to="/faq#how-to-contact-us">Как с нами связаться?</FrQuestionLink>
                        <FrQuestionLink to="/faq#partnership-conditions">Какие условия сотрудничества?</FrQuestionLink>
                        <FrQuestionLink to="/faq#purpose">Для чего подходит лазер?</FrQuestionLink>
                        <FrQuestionLink to="/">О нас</FrQuestionLink>
                        <FrQuestionLink to="#">Успешные кейсы</FrQuestionLink>
                        <FrQuestionLink to="#">Стоматология</FrQuestionLink>
                        <FrQuestionLink to="#">Бижутерия</FrQuestionLink>
                        <FrQuestionLink to="#">Сварка материалов</FrQuestionLink>
                    </div>
                </div>
            </section>

            <ContactSection/>
        </motion.div>
    )
}

export default PresentationCoherent
