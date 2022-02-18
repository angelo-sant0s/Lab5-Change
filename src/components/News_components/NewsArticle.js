import React from 'react';

const NewsArticle = (props) => {
    
      
    console.log(props.article);
    const {
        abstract, headline:{main}, byline:{original}, 
        lead_paragraph, news_desk, section_name,
        web_url, word_count
      } = props.article;
  return (
    <article className="text-white py-10 px-5">
           <h2 className='titulo text-2xl mb-2 lg:text-4xl'>{main}</h2>
           <p>{abstract}</p>
           <p>{lead_paragraph}</p>
           <ul className='my-4'>
             <li>{original}</li>
             <li><span className='font-bold'>News Desk: </span>{news_desk}</li>
             <li><span className='font-bold'>Section Name: </span>{section_name}</li>
             <li><span className='font-bold'>Word Count: </span>{word_count}</li>
           </ul>
           <a href={web_url} target="_blank" className='underline'>News Link</a>
    </article>
  )
}

export default NewsArticle;