import { useState, useEffect } from "react"
import ArticleDataServices from "../services/ArticleDataServices";
import ContactSection from "../components/ContactSection";

//Page Transition
import { motion } from "framer-motion";
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';


const Article = (props) => {
    const initialArticleState = {
        id: null,
        title: "",
        markdown: "",
        partner: "coherent",
        date: "",
        imgName: ""
    }
    const [article, setArticle] = useState(initialArticleState);

    const getArticle = (id) => {
        ArticleDataServices.get(id)
            .then(response => {
                setArticle(response.data);   
            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getArticle(props.match.params.id);
    }, [props.match.params.id]);


    return (
        <motion.div exit="out" animate="in" initial="initial" variants={PageVariants} transition={PageTransitions} className="container">
            {article ? (
                <>
                    <section className="article-main">
                        <h1 className="article-title">{article.title}</h1>
                        <div className="article-subinfo">
                            <img src={require(`../images/partners-logo/${article.partner}.svg`).default} className="article-partner-img" alt={article.partner}/>
                            <p className="article-date">{article.date}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: article.markdown}} className="article-body"></div>
                    </section>
                    
                    <section className="article-related">

                    </section>
                </>
            ):(
                <>
                    <h1 className="article-title">Данная статья не найдена!</h1>
                </>
            )}
            <ContactSection/>
        </motion.div>
    )
}

export default Article
