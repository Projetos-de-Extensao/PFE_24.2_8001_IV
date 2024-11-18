import React from 'react';
import '../index.css';

function Ingressos() {
    return (
        <div className="ingressos-container">
            <h1 className="ingressos-titulo">Garanta seu ingresso já</h1>
            <div className="ingressos-cards">
                <div className="card">
                    <h1>Epic pass</h1>
                    <p>a partir de:</p>
                    <h1>R$2.500,00</h1>
                    <p className='ingressos-descricao'>O Epic Pass é uma nova forma de viver o épico, com essa credencial você tem: acesso à Spoiler Night com direito a 1(um) acompanhante, 1 foto ou 1 autógrafo com um artista convidado da CCXP, Kit Epic Pass com itens especiais, Epic Service: fila preferencial na entrada do evento, banheiros e pontos de hidratação exclusivos e acesso ao pavilhão 1h antes da abertura geral, 10% de desconto na CCXP Store, direito à pré-venda da CCXP25.</p>
                    <a href='https://www.mundo-ticket.com/pt/evento/ccxp24/checkout/ingresso?category=epic-pass&utm_medium=internaingressos-site-geral&utm_content=id_202400123&utm_campaign=ccxp-24' className='styled-links'>Compre já</a>
                </div>
                <div className="card">
                    <h1>4 dias</h1>
                    <p>a partir de:</p>
                    <h1>R$800,00</h1>
                    <p className='ingressos-descricao'>Quem veio na CCXP antes afirma: impossível querer vir um dia só. Essa credencial é pra quem quer viver o épico do início ao fim, aproveitando com calma cada momento.</p>
                    <a href='https://www.mundo-ticket.com/pt/evento/ccxp24/checkout/ingresso?category=4-dias&utm_medium=internaingressos-site-geral&utm_content=id_202400122&utm_campaign=ccxp-24' className='styled-links'>Compre já</a>
                </div>
                <div className="card">
                    <h1>Diários</h1>
                    <p>a partir de:</p>
                    <h1>R$200,00</h1>
                    <p className='ingressos-descricao'>Acesso a um dos quatro dias épicos da CCXP24. Quinta-feira, Sexta-Feira, Sábado e Domingo.</p>
                    <a href='https://www.mundo-ticket.com/pt/evento/ccxp24/checkout/ingresso?category=quinta&utm_medium=internaingressos-site-geral&utm_content=id_202400122&utm_campaign=ccxp-24' className='styled-links'>Compre já</a>
                </div>
                <div className="card">
                    <h1>Unlock</h1>
                    <p>a partir de:</p>
                    <h1>R$3.300,00</h1>
                    <p className='ingressos-descricao'>A Conferência definitiva de negócios do entretenimento, é o evento voltado para profissionais do mercado de entretenimento e comunicação. Com o pacote UNLOCK você tem direito a todos os benefícios do ingresso UNLOCK Business e aproveita os 4 dias de CCXP com direito a entrada antecipada.</p>
                    <a href='https://www.mundo-ticket.com/pt/evento/ccxp24/checkout/ingresso?category=unlock&utm_medium=internaingressos-site-geral&utm_content=id_202400122&utm_campaign=ccxp-24' className='styled-links'>Compre já</a>
                </div>
                <div className="card">
                    <h1>Unlock Bussiness</h1>
                    <p>a partir de:</p>
                    <h1>R$1.800,00</h1>
                    <p className='ingressos-descricao'>Conferência definitiva de negócios do entretenimento, é o evento voltado para profissionais do mercado de entretenimento e comunicação. O pacote UNLOCK Business oferece acesso a uma programação focada em negócios, tendências e inovação.</p>
                    <a href='https://www.mundo-ticket.com/pt/evento/ccxp24/checkout/ingresso?category=unlock&utm_medium=internaingressos-site-geral&utm_content=id_202400122&utm_campaign=ccxp-24'className='styled-links'>Compre já</a>
                </div>
            </div>
        </div>
    );
}

export default Ingressos;
