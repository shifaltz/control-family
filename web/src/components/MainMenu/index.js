import './style.css';
import avatarIcon from '../../assets/avatar-icon.png';

export default function MainMenu(){
  return(
    <div className='main-menu'>
      <ul className='items-menu'>
        <li>Cartões</li>
        <li>Controle</li>
        <li>Pagamento</li>
      </ul>

      <div className='perfil-user'>
        <img src={avatarIcon} alt="" />
      </div>
    </div>
  )
}