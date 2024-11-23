
async function inform() {
    try {
        const dados = {
            total_filmes: 12000,
            total_espectadores: 4500000000,
            media_horas: 12.5
        };
        
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
