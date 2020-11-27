import './App.css';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo 1.svg';

function App() {
  return (
    <div id="page-landing">
        <img src={logoImg} alt="" />
      
      <div className="pedidos">
          <h1>Pedido 1</h1>
      </div>
        <div className="pedido">
          <h1>Pedidos</h1>
        </div>
          <div className="tela">
            <h1>Mesa 4</h1>
          </div>
            <div className="produto">
              <h1>Prod</h1>
            </div>
              <div className="quantidade">
                <h1>Qtd</h1>
              </div>
                <div className="sucos">
                  <h1>Suco de Abacaxi 1Litro</h1>
                </div>
                  <div className="qtdSucos">
                    <h1>1</h1>
                  </div>
                    <div className="bebidas">
                      <h1>Brahma Long Neck</h1>
                    </div>
                      <div className="qtdBebidas">
                        <h1>2</h1>
                      </div>
                        <div className="retangulo">
                          <h1></h1>
                        </div>
                          <div className="botao">
                            <h1>Finalizado</h1>
                          </div>
    </div>
  );
}

export default App;
