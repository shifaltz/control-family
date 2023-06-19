import './style.css';
import iconUser from '../../assets/icon-user.png'
import iconPassword from '../../assets/icon-pass.png'
import { Link } from 'react-router-dom'

export default function FormLogin(){
  return(
    <>
      <div className='card-login'>
        <div className='form-login'>
          <img src={iconUser} alt="" />
          <input type="text" placeholder='usuario'/>
        </div>
        <div className='form-login'>
          <img src={iconPassword} alt="" />
          <input type="password" name="" id="" placeholder='senha'/>
        </div>
        <div className='form-login'>
          <Link to={'/cards'}>
          <button type="submit">login</button>
          </Link>
        </div>
      </div>
    </>
  )
}