import Header from "../components/Header";
import Footer from "../components/Footer";
import CarrosselAtracoes from "../components/CarrosselAtracoes";
function Atracoes() {
    return(
       <div>
          <Header/>
          <h1 className="frase-principal">Convidados internacionais, competições de cosplay e <span className="efeito"> muito mais! </span></h1>
          <CarrosselAtracoes/>
          <Footer />
      </div>
  )}

  export default Atracoes;