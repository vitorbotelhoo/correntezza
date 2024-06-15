import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className='header-container'>
            <img></img>
            <nav>
                <a>Quem somos</a>
                <a>Projetos</a>
                <a>Instagram</a>
            </nav>
        </div>
      </header>
      <main>
        <section>
            <img></img>
            <h1>Encantamos a sua empresa com a direção certa.</h1>
        </section>
        <section>
            <h2>Projetos em evidência</h2>
            <ul>
                <li>
                    <h3>Redes Sociais do Hospital de Olhos de Florianópolis.</h3>
                    <p>Redes Sociais</p>
                </li>
                <li>
                    <h3>Projeto de Logo e Identidade para a Tic Sales.</h3>
                    <p>Branding</p>
                </li>
                <li>
                    <h3>Projeto de site da Ampe Metropolitana.</h3>
                    <p>Site em Wordpress</p>
                </li>
            </ul>
            <button>Veja mais projetos aqui</button>
        </section>
        <section>
            <h3>É facil pra você.</h3>
            <h2>Você pede, e a Correnteza faz.</h2>
            <ul>
                <li>
                    <img></img>
                    <h3>Design de qualidade à qualquer momento.</h3>
                    <p>Tenha um setor de design sem ter estresse interno, problemas empregatícios e pagando menos do que um salário de CLT. É a sua chance de construir um design sustentável para a sua empresa.</p>
                    <a>É fácil pra você.</a>
                </li>
                <li>
                    <img></img>
                    <h3>Chega de orçamentos picados e caros.</h3>
                    <p>Atendemos uma gama de demandas variadas à depender do seu plano. Sua solução de design pode estar à uma mensalidade de alcance.</p>
                    <a>É fácil pra você.</a>
                </li>
                <li>
                    <img></img>
                    <h3>Combine os melhores prazos para suas entregas.</h3>
                    <p>Negociamos prazos para entregas complexas com rapidez elevada. Pode ser a sua chance de acalmar a cabeça sobre aquela apresentação de última hora.</p>
                    <a>É fácil pra você.</a>
                </li>
            </ul>
        </section>
        <section>
            <img></img>
            <h3>Escolha um plano, agende uma reunião e estamos prontos pra navegar!</h3>
            <p>Facilitamos a sua vida com um processo de adesão simplificado, só precisamos de alguns materiais e de um briefing para começar.</p>
        </section>
        <section>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
        </section>
        <section>
            <h3>E a melhor parte...</h3>
            <h2>Confira os nossos planos:</h2>
            <ul>
                <li>
                    <img></img>
                    <h3>Consultoria em Gotas</h3>
                    <p>Tem dúvidas no seu time, ou tem um problema com um projeto de design. Me deixe descomplicar isso para você.</p>
                    <p>Não inclui mão de obra, apenas análise e feedbacks elaborados de acordo com a demanda.</p>
                    <p>R$800,00</p>
                    <button>Eu quero!</button>
                </li>
                <li>
                    <p>Recomendado</p>
                    <img></img>
                    <h3>Chuva de Design</h3>
                    <p>Resolva problemas de design. Esse plano é perfeito para quem quer ter entrega na mão.</p>
                    <p>Inclui consultoria e entregáveis com prazos curtos e demandas de variados tipos.</p>
                    <p>R$2.000,00</p>
                    <button>Eu quero!</button>
                </li>
                <li>
                    <img></img>
                    <h3>Correnteza</h3>
                    <p>Tem demandas urgentes? Preciso de uma entrega com mais qualidade para sua empresa? Esse é o plano perfeito.</p>
                    <p>Tudo que você precisar de design com até 1 dia útil de prazo.</p>
                    <p>R$4.000,00</p>
                    <button>Eu quero!</button>
                </li>
            </ul>
        </section>
    </main>
    <footer>
            <img></img>
            <nav>
                <menu>Quem somos?</menu>
                <menu>Dúvidas</menu>
                <menu>Projetos</menu>
                <menu>vitor@correnteza.com</menu>
                <menu>(48) 9 8803-2352</menu>
                <menu>Instagram</menu>
            </nav>
        </footer>

      
      <style jsx>{`
        header {
          display: flex;
          width: 100%;
          padding-top: 12px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .header-container {
          display: flex;
          height: 90px;
          max-width: 1280px;
          padding: 12px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 48px;
        }

        a {
          display: flex;
          height: 32px;
          padding: 8px 12px;
          align-items: center;
          gap: 8px;

          border-radius: 12px;
          background: var(--Cores-Azul-Marinho, #0F2752);
        }

        h1 {
          color: var(--Cores-Branco, #FFF);
        font-family: Gabarito;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 64px */
        }

        h2 {
        color: var(--Cores-Branco, #FFF);
        font-family: Gabarito;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; /* 39.6px */
        }

        h3 {
          color: var(--Cores-Branco, #FFF);
          font-family: Gabarito;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 110%; /* 26.4px */
        }

        p {
          color: var(--Cores-Branco, #FFF);
          font-family: Gabarito;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 23.4px */
        }

        main {
          padding: 0 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #08152C;
          padding: 0;
          margin: 0;
          font-family: Gabarito;
          color: #fff;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
