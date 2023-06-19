import './style.css';

export default function Status({code}){
  
  var color = '#b84c44'
  
  if(code === 'ok'){
    color = '#50b844';
  }

  return(
    <div className='status' >
      <div className='circle' style={{backgroundColor: color}}>

      </div>
    </div>
  )
}