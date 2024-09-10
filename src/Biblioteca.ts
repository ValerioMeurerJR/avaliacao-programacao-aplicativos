import Livro from "./Livro"
import leia from "readline-sync" 
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca {
    livros: Livro[] = []

    adicionarLivro(): void {
        console.log("---------------CRIANDO CONTA-------------------")
        var titulo = leia.question("DIGITE O TITULO: ");
        var autor = leia.question("DIGITE O AUTOR: ");
        var tipoLivro = leia.keyInSelect(["Livro Fisico", "Ebook"], 'ESCOLHA UMA OPÇÃO: ') + 1;
        var livro: Livro;
        if (tipoLivro === 1) {            
            var numerosPaginas = leia.questionInt("DIGITE O NUMERO DE PAGINAS ");
            livro = new LivroFisico(titulo, autor, numerosPaginas)
        } else {            
            var tamanhoArquivo = leia.questionInt("DIGITE O tamanho do arquivo ");
            livro = new Ebook(titulo, autor, tamanhoArquivo);
        }
        this.save(livro);
    }

    removerLivro(): void {
        console.log("---------------DELETAR LIVRO-------------------")
        var isbnLivro = leia.question("DIGITE O ISBN DO LIVRO: ")
        for (var i = 0; i < this.livros.length; i++) {
            if (isbnLivro === this.livros[i].getisbn()) {
                this.livros.splice(i, 1);
                return;
            }
        }        
    }
    buscarLivro(): void {
        for (var i = 0; i < this.livros.length; i++) {
            console.log("------------------------------------------------------")
            this.livros[i].exibirDetalhes();
        }
    }
    private save(livro: Livro) {
        this.livros.push(livro);
        console.log(`Livro ${livro.getisbn()} foi criada com sucesso`);
    }
}