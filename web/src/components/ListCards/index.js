import { Link } from 'react-router-dom';
import './style.css';

export default function ListCards(props){
  return(
    <div className='list-cards'>
      <Link to='/invoice'> 
        <div className='card-credit'>
          <img src={props.imgCard} alt="" />
        </div>
      </Link>
    

      <div className='card-info'>
        <div className='infos'>
          <ul>
            <li>
              <p>dono</p><span>{props.owner}</span>
            </li>
            <li>
              <p>limite</p><span>R$ {props.limit}</span>
            </li>
            <li>
              <p>dia vencimento</p><span>{props.dayExpiration}</span>
            </li>
          </ul>
        </div>

        <div className='card-name'>
          <p>{props.nameCard}</p>
        </div>
      </div>
    </div>
  )
}