
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-filmes.json';

async function inform() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
        
        const dados = await res.json();
        const paragrafo = document.createElement('p');
        const totalFilmes = dados.total_filmes;
        const espectadores = (dados.total_espectadores / 1e6).toFixed(1);
        const mediaHoras = parseFloat(dados.media_horas).toFixed(1);

        paragrafo.classList.add('caixa');
        paragrafo.innerHTML = `
            Sabia que existem mais de <span>${totalFilmes} filmes</span> no mundo e cerca de 
            <span>${espectadores} milhões</span> de pessoas assistem filmes com uma média de 
            <span>${mediaHoras} horas</span> por semana?
        `;

        const conteiner = document.getElementById('graficos-');
        if (!conteiner) throw new Error("Elemento #graficos- não encontrado no HTML.");

        conteiner.appendChild(paragrafo);
    } catch (error) {
        console.error("Erro ao carregar os gráficos principais:", error);
    }
}
inform();
