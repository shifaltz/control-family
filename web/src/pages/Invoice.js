import Bill from "../components/Bill";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import TitleContent from "../components/TitleContent";
import TitlePage from "../components/TitlePage";

import './style.css'

export default function Invoice(){
  return(
    <>
      <Header></Header>
      <MainMenu></MainMenu>
      <TitlePage title={'Fatura'}></TitlePage>
      <TitleContent title={'Nome cartão'}></TitleContent>
      <Bill context={'responsavel'}></Bill>
    </>
  )
}