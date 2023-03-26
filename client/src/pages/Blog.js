import ContactSection from "../components/ContactSection";
import ArticleCard from "../components/Blog/ArticleCard";
import { useState, useEffect } from "react";

//Page Transition
import { motion } from "framer-motion";
import PageVariants from '../components/PageVariants';
import PageTransitions from '../components/PageTransitions';

//Article List
import ArticleDataServices from '../services/ArticleDataServices';

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        retrieveArticles();
    }, [])

    const retrieveArticles = () => {
        ArticleDataServices.getAll()
            .then(response => {
                //console.log(response.data);
                setArticles(response.data.articles);   
            })
            .catch(e => {
                console.log(e);
            });
    }

    /*const refreshList = () => {
        retrieveArticles();
    }*/

    return (
        <motion.div initial="initial" animate="in" exit="out" variants={PageVariants} transition={PageTransitions} className="container">
            <p className="text-half text-more-than-a-half"><strong>Блог</strong><br/>компании Garysh</p>
            <div className="articles-list">
                {articles.map((articles, i) => (
                    <ArticleCard key={i} title={articles.title} partner={articles.partner} date={articles.date} to={"/blog/"+articles._id} articleImg={articles.imgName}/>
                ))}
            </div>

            <ContactSection/>
        </motion.div>
    )
}

export default Blog
