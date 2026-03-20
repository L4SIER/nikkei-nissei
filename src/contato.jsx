import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoNikkei from './assets/logotipo-1.png'
import menu from './assets/menu.png'
import './contato.css'

export default function Contato() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <header>
          <div id="logo">
            <img src={logoNikkei} alt="Logo Nikkei" />
          </div>
          <div id='menu'>
            <button link="./">home</button>
            <button link="./produtos">produtos</button>
            <button link="./quem-somos">quem somos</button>
            <button link="./contatos">contatos</button>
          </div>
          <div id='presentation'>
            <h1>reformar,</h1>
            <h1>construir e curtir.</h1>
          </div>
      </header>
      <body>
        <div id='contact'>
          <h2>contatos</h2>
          <p>entre em contato conosco para saber mais sobre nossos serviços e infraestrutura.</p>
          <div>
            <p>localização: R.edson Luiz Rigonatto, 1295 - Campinas/SP</p>
            <p>Email: vendas.n1@gruponikkei.com.br</p>
            <p>segunda a sexta: 7:30 às 17:30</p>
            <p>sábado: 7:30h às 12h</p>
            <p>domingo: fechado</p>
          </div>
          <h3>venha vamos contruir,reformar e curtir!</h3>
          <map name="contato-map"></map>
          <div>
            <h1>para orçamento coloque informações</h1>
          </div>
        </div>
      </body>
      <footer>
        <div id='footer-content'>
            <p>©2026 Nikkei. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}
