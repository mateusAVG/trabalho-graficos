
async function generoFilmes() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/genero-filmes.json';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
        
        const dados = await res.json();
        console.log("Dados dos gêneros de filmes:", dados);

        const generos = Object.keys(dados);
        const popularidade = Object.values(dados);

        const data = [
            {
                x: generos,
                y: popularidade,
                type: 'bar',
                marker: { color: 'darkgreen' }
            }
        ];

        const layout = {
            plot_bgcolor: 'gray',
            paper_bgcolor: 'gray',
            title: {
                text: 'Gêneros de Filmes Mais Populares',
                font: { color: 'aliceblue', size: 30 }
            },
            xaxis: {
                title: { text: 'Gêneros', font: { color: 'aliceblue' } }
            },
            yaxis: {
                title: { text: 'Popularidade (milhões)', font: { color: 'aliceblue' } }
            }
        };

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('graficos-').appendChild(grafico);
        Plotly.newPlot(grafico, data, layout);
    } catch (error) {
        console.error("Erro ao carregar o gráfico de gêneros de filmes:", error);
    }
}
generoFilmes();
