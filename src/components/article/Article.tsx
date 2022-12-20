import './Article.css';

type Props = {
  imgUrl: string;
  date: string;
  title: string;
};

const Article = (props: Props) => {
  const { imgUrl, date, title } = props;
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog-image' />
      </div>
      <div className='gpt3__blog-container_artсile-content'>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full article</p>
      Article
    </div>
  );
};

export default Article;
