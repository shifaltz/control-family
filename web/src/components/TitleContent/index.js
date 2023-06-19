import './style.css';

import cardIcon from '../../assets/credit-cards-icon.png';

export default function TitleContent({title}){
  return(
    <div className='title-content'>
      <img src={cardIcon} alt="" />
      <h2>{title}</h2>
    </div>
  )
}