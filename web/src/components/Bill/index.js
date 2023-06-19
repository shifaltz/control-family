import Status from '../Status';
import './style.css';

export default function Bill({context}){
  return(
    <div className="list-debt">
      <div className='total-value'>
       <p>VALOR TOTAL</p> <span>R$ 1.500,00</span>
      </div>
      <table>
        <tr>
          <th>Data</th>
          <th>Nome Prod.</th>
          <th>{context}</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>20/JAN</td>
          <td>BROTHERS HOUSE PIZZARI</td>
          <td>Nubank 8888</td>
          <td>5.000,00</td>
          <td><Status code={'ok'}/></td>
        </tr>
        <tr>
          <td>03/JAN</td>
          <td>Q PONTO DA ESFIHA</td>
          <td>C6 Platinum 9999</td>
          <td>80,00</td>
          <td><Status code={'ok'}/></td>
        </tr>
        <tr>
          <td>20/JAN</td>
          <td>BROTHERS HOUSE PIZZARI</td>
          <td>Nubank 8888</td>
          <td>65,00</td>
          <td><Status/></td>
        </tr>
        <tr>
          <td>03/JAN</td>
          <td>Q PONTO DA ESFIHA</td>
          <td>C6 Platinum 9999</td>
          <td>80,00</td>
          <td><Status code={'ok'}/></td>
        </tr>
      </table>
    </div>
  )
}