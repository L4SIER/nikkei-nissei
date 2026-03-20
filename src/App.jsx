import { useState } from 'react' 
import logoNikkei from './assets/logotipo-1.png'
import menu from './assets/menu.png'
import ex1 from './assets/ex1.webp'
import ex2 from './assets/ex2.webp'
import ex3 from './assets/ex3.webp'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <main>
      <header>
          <div id="logo">
            <img src={logoNikkei} alt="Logo Nikkei" />
          </div>
          <div id='menu'>
            <button >home</button>
            <button >produtos</button>
            <button >quem somos</button>
            <button >contatos</button>
          </div>
          <div id='presentation'>
            <img src={menu} alt="Menu" />
            <h1>reformar,</h1>
            <h1>construir e curtir.</h1>
          </div>
      </header>
      <body>
        <div id='we-do'>
          <h2>O que fazemos?</h2>
        </div>
        <div id='informations'>
          <p>Somos uma empresa especializada em reformas e construções, dedicada a transformar espaços em ambientes incríveis. Com uma equipe de profissionais experientes e comprometidos, oferecemos serviços de alta qualidade para atender às necessidades dos nossos clientes. Desde pequenas reformas até grandes projetos de construção, estamos prontos para tornar seus sonhos realidade. Nossa missão é proporcionar soluções inovadoras e eficientes, garantindo a satisfação total dos nossos clientes.</p>
        </div>
        <div id='service'>
          <h2>Serviços</h2>
        </div>
        <div id='slider'>
          <img src={ex1} alt="Exemplo 1" />
          <img src={ex2} alt="Exemplo 2" />
          <img src={ex3} alt="Exemplo 3" />
        </div>
        <div id='advantages'>
          <h2> vantagens</h2>
        </div>
        <div id='contact'>
          <h2>contato</h2>
        </div>
      </body>
      <footer>
        <div id='footer-content'>
          <p>© 2023 Nikkei. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
    </>
  )
}
