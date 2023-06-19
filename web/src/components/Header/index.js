
import './style.css';
import logo from '../../assets/logo.png';

export default function Header(){
  return(
    <header className="app-header">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}