import express from "express";
import cors from "cors";
import articles from "./api/articles.route.js";
import contact from "./api/contact.route.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/articles", articles);
app.use("/api/v1/contact", contact);

if(process.env.NODE_ENV === 'production'){

        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
}

export default app
