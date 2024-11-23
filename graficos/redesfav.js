
async function diretoresFavoritos() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/diretores.json';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
        
        const dados = await res.json();
        console.log("Dados dos diretores favoritos:", dados);

        const diretores = Object.keys(dados);
        const popularidade = Object.values(dados);

        const data = [
            {
                values: popularidade,
                labels: diretores,
                type: 'pie',
                textinfo: 'labels+percent'
            }
        ];

        const layout = {
            plot_bgcolor: 'gray',
            paper_bgcolor: 'gray',
            title: {
                text: 'Diretores Favoritos do Público',
                font: { color: 'aliceblue', size: 30 }
            }
        };

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('graficos-').appendChild(grafico);
        Plotly.newPlot(grafico, data, layout);
    } catch (error) {
        console.error("Erro ao carregar o gráfico dos diretores favoritos:", error);
    }
}
diretoresFavoritos();
