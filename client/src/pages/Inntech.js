import Button from '../components/Button';
import ContactSection from '../components/ContactSection';
import FrQuestionLink from '../components/FrQuestionLink';
import { Link } from 'react-router-dom';

//Page Transition
import { motion } from 'framer-motion';
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

import InntechLogo from '../images/inntech.svg';
import ScientistImg from '../images/garyshweb1.png';

import SLMprinter from '../images/slm-printer.png';
import DLPprinter from '../images/dlp-printer.png';
import FDMprinter from '../images/fdm-printer.png';

const Inntech = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            <div className="text-half text-more-than-half">
                <p>Мы предлагаем работающие решения для всех, кто занимается стоматологией и лабораторными исследованиями. Наша задача — продвигать  продукты, которые помогают стоматологическим компаниям медицине и улушают качество  жизни людей вокруг.<br/><strong>Мы — компания Garysh.</strong></p>
            </div>
            
            <div className="line line-purple"></div>
            <section className="grid-2-columns">

                <img className="flex-img" src={ScientistImg} alt="close-up-scientist-wearing-face-mask-with-laser"/>
                
                <div className="bg-blue half-round-left order-first div-space-between">
                    <div className="wrapper-main">
                        <h1>Применение 3D принтеров</h1>
                        <p className="temptemp">3D принтеры для создания персональных имплантов, пластиковых ортезов совместимых с телом. Высокопрочные изделия с лучшим качеством и комфортом.</p>
                    </div>
                    <img className="inntech-logo-main" src={InntechLogo} alt="inntech"/>
                    <div className="wrapper-main">
                        <Button buttonStyle="btn-transparent" buttonSize="btn-medium">Оставить заявку</Button>
                    </div>
                </div>
            </section>
            
            <div className="text-half">
                <p><strong>SLM Принтеры.</strong> 3D принтеры с использованием селективного лазерного плавления</p>
            </div>

            <section>
                <div className="drop-shape-left bg-light-grey">
                    <div className="wrapper split">
                        <div className="text-wrapper bg-grey-text">
                            <h1>SLM Принтеры</h1>
                            <p>Материалы: стали и суперсплавы, титан, алюминий, цветные металлы. Максимальные габариты изделия: 280х280х300 мм</p>
                        </div>
                        <div className="img-wrapper inntech-img-medium">
                            <img className="slm-printer flex-img img-in-wrapper" src={SLMprinter} alt="microscope"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-half">
                <p><strong>DLP принтеры.</strong> 3D принтеры с использованием цифровой обработки светом</p>
            </div>

            <section>
                <div className="drop-shape-right bg-blue">
                    <div className="wrapper-right split">
                        <div className="text-wrapper">
                            <h1>DLP принтеры</h1>
                            <p>Материалы: твердые пластики, мягкие пластики, биосовместимые пластики, композиты. Максимальные габариты изделия: 920х510х800 мм</p>
                        </div>
                        <div className="img-wrapper order-first inntech-img-small">
                            <img className="flex-img img-in-wrapper" src={DLPprinter} alt="tft-display"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-half">
                <p><strong>FDM Принтеры.</strong> 3D принтеры с использованием моделирования наплавкой</p>
            </div>

            <section>
                <div className="drop-shape-left bg-purple">
                    <div className="wrapper split">
                        <div className="text-wrapper white-text">
                            <h1>FDM Принтеры</h1>
                            <p className="">Материалы: стали и суперсплавы, титан, алюминий, цветные металлы. Максимальные габариты изделия: 280х280х300 мм</p>
                        </div>
                        <div className="img-wrapper">
                            <img className="flex-img img-in-wrapper" src={FDMprinter} alt="microscope"/>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="text-half">
                <p><strong>Где применяются технологии 3D принтеров?</strong><br/></p>
            </div>

            <section className="grid-more">
                <div className="drop-shape-left bg-blue grid-more-item div-border-bottom">
                    <h2>Стоматология</h2>
                    <p>Протезирование зубов (мостовидные протезы, имплантаты, полные и частичные протезы). Принтеры отлично поможет решить данные задачи стоматологов.</p>
                    <Button buttonStyle="btn-more" buttonSize="btn-small">Подробнее</Button>
                </div>
                <div className="half-round-left bg-purple grid-more-item">
                    <h2>Индивидуальные протезы</h2>
                    <p>Применяя 3D-технологии и искусственный интеллект, мы меняем парадигму иммобилизации в травматологии и ортопедии</p>
                    <Button buttonStyle="btn-more" buttonSize="btn-small">Подробнее</Button>
                </div>
                <div className="drop-shape-left bg-dark-grey item-mobile grid-more-item">
                    <h2>Блог</h2>
                    <p>Самые последние новости и истории успешных кейсов наших партнеров можете найти в блоге.</p>
                    <Link to="/blog"><Button buttonStyle="btn-more" buttonSize="btn-small">Перейти</Button></Link>
                </div>
                <div>
                    
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

export default Inntech
