import Bill from "../components/Bill"
import Header from "../components/Header"
import MainMenu from "../components/MainMenu"
import TitleContent from "../components/TitleContent"
import TitlePage from "../components/TitlePage"

import './style.css'

export default function Control(){

  const user = 'Regiane'

  return(
    <>
      <Header></Header>
      <MainMenu></MainMenu>

      <TitlePage title={'Controle'}></TitlePage>
      <TitleContent title={'Gastos da ' + user}></TitleContent>
      <Bill context={'cartão'}></Bill>
    </>
  )
}