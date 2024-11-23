
async function diretoresFavoritos() {
    try {
        const dados = {
            "Christopher Nolan": 40,
            "Quentin Tarantino": 30,
            "Steven Spielberg": 50,
            "Martin Scorsese": 35,
            "Ridley Scott": 25
        };

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
