import './Feature.css';

type Props = {
  title: string;
  text: string;
};

const Feature = (props: Props) => {
  const { title, text } = props;
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div /> 
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
