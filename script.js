document.addEventListener("DOMContentLoaded", function () {
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const hoje = new Date();
    
    // Calcula a data de cada dia da semana a partir de hoje
    for (let i = 0; i < 7; i++) {
        let data = new Date();
        data.setDate(hoje.getDate() - hoje.getDay() + i);

        let diaElement = document.getElementById(`dia-${i}`);
        if (diaElement) {
            diaElement.innerText = `${diasSemana[data.getDay()]} (${data.getDate()}/${data.getMonth() + 1})`;
        }
    }

    // Adicionar eventos ao clicar nas células da tabela
    const cells = document.querySelectorAll("td:not(:first-child)");
    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            let evento = prompt("Digite seu compromisso:");
            if (evento) {
                this.innerText = evento;
            }
        });
    });

    // Pegando elementos da modal
    const imagem = document.getElementById("minhaImagem");
    const modal = document.getElementById("modal");
    const fechar = document.getElementById("fecharModal");
    const botaoFechar = document.getElementById("botaoFechar");

    // Esconde a modal ao carregar a página
    if (modal) {
        modal.style.display = "none";

        // Quando clicar na imagem, exibe a janela modal
        imagem.addEventListener("click", function () {
            modal.style.display = "flex";
        });

        // Fecha a modal ao clicar no botão (X)
        fechar.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Fecha a modal ao clicar no botão "Fechar"
        botaoFechar.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Fecha a modal se clicar fora dela
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
