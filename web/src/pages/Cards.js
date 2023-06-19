import ListCards from "../components/ListCards";
import TitleContent from "../components/TitleContent";
import TitlePage from "../components/TitlePage";

import CardC6 from '../assets/card-c6.png'
import CardNu from '../assets/card-nu.png'
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";

import './style.css'

export default function Cards(){

  return(
    <>
      <Header></Header>
      <MainMenu></MainMenu>

      <TitlePage title={'Cartões'}></TitlePage>
      <TitleContent title={'Meus cartões'}></TitleContent>

      <ListCards
        owner={'Pedro de Almeida Santos'} 
        limit={'10.000,00'} 
        dayExpiration={28} 
        nameCard={'C6 Platinum 9999 '} 
        imgCard={CardC6}>
      </ListCards>

      <ListCards 
        owner={'Douglas dos Santos'} 
        limit={'30.000,00'} 
        dayExpiration={15} 
        nameCard={'NuBank 5544 '} 
        imgCard={CardNu}>
      </ListCards>
    </>
  );
}