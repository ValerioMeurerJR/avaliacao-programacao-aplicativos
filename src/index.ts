import leia from "readline-sync"
import Biblioteca from "./Biblioteca";
import Emprestimo from "./Emprestimo";

var biblioteca = new Biblioteca();
var emprestimos = new Emprestimo()
do {
    console.log("---------------MENU-------------------")
    var Menu = leia.keyInSelect(["CRIAR LIVRO", "REMOVER LIVRO", "BUSCAR LICROS", "ADICIONAR ALUNO", "RESERVAR LIVRO", "LISTAR RESERVAS", "LISTA HISTORICO LIVROS" ], 'ESCOLHA UMA OPÇÃO: ') + 1
    switch (Menu) {
        case 1:
            biblioteca.adicionarLivro();
            break;
        case 2:
            biblioteca.removerLivro();
            break;
        case 3:
            biblioteca.buscarLivro();
            break;
        case 4:
            emprestimos.adicionarAluno();
            break;
        case 5:
            emprestimos.ReservarLivro(biblioteca);
            break;
        case 6:
            emprestimos.ListaReservas();
            break;
        case 7:
            biblioteca.ListaHistoricoLivros();
            break;
        default:
            console.log("VOCE ESCOLHEU SAIR");
            break;
    }
} while (Menu !== 0);