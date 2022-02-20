import React, {useState, useEffect} from 'react';
import NewsArticle from '../components/News_components/NewsArticle';
import SearchForm from '../components/News_components/SearchForm';

const News = () => {

    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('environment');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const res = await fetch(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&fq=news_desk:("Environment" "Energy")&api-key=JMVUgKGVYK2aoxPH7svEVDyle2gaYzFi`
                )
                const news = await res.json();
                setNews(news.response.docs);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchnews();
    }, [search])

    return (
        <>
            <div className='showcase '>
                <div className='overlay px-5'>
                    <h1 className='text-4xl font-bold text-white text-center titulo2 mb-4 uppercase'>Viewing articles
                        about
                        <span className='pl-5 titulo3'>{search}</span>
                    </h1>
                    <SearchForm searchText={(procura) => setSearch(procura)}/>
                </div>
            </div>
            <h1 className='text-4xl text-white px-9 pt-16 pb-11 titulo2 uppercase'>Most relevant</h1>
            {isLoading ? (<h1 className='text-white text-center mt-20 titulo3 text-6xl'>Loading...</h1>) : (
                <div className='text-white px-5 pb-20 grid grid-cols-3 gap-10'>

                {news.map((article) => {
                    return (
                        <NewsArticle key={article._id} article={article}/>
                    )
                })}
                </div>
                )}
        </>
    )
}

export default News;