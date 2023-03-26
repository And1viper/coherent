import ArticlesDataServices from "../../services/ArticleDataServices";
import Login from "./Login";
import { useState } from "react"


const ManageBlog = () => {
    //Login
    const [token, setToken] = useState({data: false});

    //Add article
    const [title, setTitle] = useState("");
    const [markdown, setMarkdown] = useState("");
    const [partner, setPartner] = useState("coherent");
    const [fileName, setFileName] = useState("");

    const handleChangeFile = (e) => {
        setFileName(e.target.files[0]);
    }

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setPartner(value);
    };


    const saveArticle = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("title", title);
        data.append("markdown", markdown);
        data.append("partner", partner);
        data.append("articleImage", fileName);

        ArticlesDataServices.createArticle(data)
            .then(response => {
                alert("Submitted!");
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    
    }

    //Delete article
    const [id, setId] = useState("");

    const deleteArticle = (e) => {
        e.preventDefault();

        ArticlesDataServices.deleteArticle(id)
            .then(response => {
                alert("Deleted!");
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    if(!token.data){
        return <Login setToken={setToken}/>
    }

    return (
        <div className="container">
            <section className="add-article">
                <h1>Добавить статью в блог</h1>
                <form onSubmit={saveArticle} className="add-article-form" encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input required type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="markdown">Markdown</label>
                        <textarea required name="markdown" id="markdown" onChange={e => setMarkdown(e.target.value)}className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Partner">Partner</label>
                        <select onChange={handleSelectChange} className="form-control">
                            <option value="coherent">Coherent</option>
                            <option value="inntech">Inntech</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="file">Article Image</label>
                        <input type="file" filename="articleImage" required id="img_name" onChange={handleChangeFile}className="form-control"/>
                    </div>

                    <button type="submit" className="btn">Save</button>

                </form>
            </section>

            <section className="delete-article">
                <h1>Удалить статью</h1>
                <form onSubmit={deleteArticle} className="add-article-form">
                    <div className="form-group">
                        <label htmlFor="id">ID of article</label>
                        <input required type="text" name="id" id="id" onChange={e => setId(e.target.value)} className="form-control"/>
                    </div>

                    <button type="submit" className="btn">Delete</button>

                </form>
            </section>
        </div>
    )
}

export default ManageBlog
