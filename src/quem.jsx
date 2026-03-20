import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoNikkei from './assets/logotipo-1.png'
import menu from './assets/menu.png'
import './quem.css'

export default function QuemSomos() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <header>
          <div id="logo">
            <img src={logoNikkei} alt="Logo Nikkei" />
          </div>
          <div id='menu'>
            <img src={menu} alt="menu" />
          </div>
          <div id='presentation'>

          </div>
      </header>
      <body>
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
