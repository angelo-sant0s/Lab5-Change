import React from 'react';

const NewsArticle = (props) => {

    const {
        abstract, headline: {main}, byline: {original},
        lead_paragraph, news_desk, section_name,
        web_url, word_count
    } = props.article;

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl hover:shadow-lg hover:shadow-white flex items-center space-x-4">
        <article className="py-10 text-black px-5">

            <h2 className='titulo text-2xl mb-2 lg:text-4xl pb-2'>{main}</h2>
            <div className="w-1/2 border-t-2"></div>
            <p className="pt-2 text-gray-800 font-light">{abstract}</p>
            <p className="text-gray-800 font-light">{lead_paragraph}</p>
            <ul className='my-4 text-gray-800 font-light'>
                <li>{original}</li>
                <li>
                    <span className='font-medium'>News Desk:</span>
                    {news_desk}
                </li>
                <li>
                    <span className='font-medium'>Section Name:</span>
                    {section_name}
                </li>
                <li>
                    <span className='font-medium'>Word Count:</span>
                    {word_count}
                </li>
            </ul>
            <a href={web_url} target="_blank" className='hover:underline uppercase'>News Link</a>

        </article>
</div>
    )
}

export default NewsArticle;