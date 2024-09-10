import leia from "readline-sync"
import Biblioteca from "./Biblioteca";

var biblioteca = new Biblioteca();
do {
    console.log("---------------MENU-------------------")
    var Menu = leia.keyInSelect(["CRIAR LIVRO", "REMOVER LIVRO", "BUSCAR LICROS"], 'ESCOLHA UMA OPÇÃO: ') + 1
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
        default:
            console.log("VOCE ESCOLHEU SAIR");
            break;
    }
} while (Menu !== 0);