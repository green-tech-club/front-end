import React from 'react';
import './NewsGrid.css';



const newsData = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  },
  {
    id: 5,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  },
  {
    id: 6,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageurl: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#'
  }
];


const NewsGrid = () => {
  
  return (
    <div>
      <div className='news-header'>
        <h1 className='NewsSecTitle'>News and Updates</h1>
        <div className="explore_but"> <p className="explore_btn_text">Browse all</p> </div>
      </div>
    <div className="news-container" >
      {newsData.map((newsItem) => (
        <div className='news-card' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${newsItem.imageurl})`, filter: "saturate(60%)"}}>
          <div className="news-card-content" key={newsItem.id}>
            <div className='EmptyElement'></div>
            <h2 className='news-title'>{newsItem.title}</h2>
            <p className='news-desc'>{newsItem.content}</p>
            <a className='news-link' href={newsItem.link}>Explore article</a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewsGrid;