import { Link } from "react-router-dom";

//Image

const ArticleCard = ( {title, partner, date, to, articleImg} ) => {

    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <div className="article-card">
                <div className="article-info">
                    <h1 className="article-card-title">{title}</h1>
                    <h3 className="article-card-date">{date}</h3>
                    <p>При партнере</p>
                    <img src={require(`../../images/partners-logo/${partner}.svg`).default} className="article-partner-img" alt={partner}/>
                </div>
                <div className="article-card-img"> 
                    {articleImg && <img className="article-thumbnail" src={`/blog-images/${articleImg}`} alt={title}/>}
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
