import { useEffect, useState } from "react";
import { API_URL } from "../utlity/config";

export const useNews = () => {
    const [news, setNews]= useState(null);

    useEffect(() => {
        fetch(`${API_URL}allNews`)
            .then(res => res.json())
            .then(result => setNews(result))
    }, []);

    return news;
}
