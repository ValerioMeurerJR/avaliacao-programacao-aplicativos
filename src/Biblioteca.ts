import Livro from "./Livro"
import leia from "readline-sync" 
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca {
    livros: Livro[] = []

    public adicionarLivro(): void {
        console.log("---------------CRIAR LIVRO-------------------")
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

    public removerLivro(): void {
        console.log("---------------DELETAR LIVRO-------------------")
        var isbnLivro = leia.question("DIGITE O ISBN DO LIVRO: ")
        for (var i = 0; i < this.livros.length; i++) {
            if (isbnLivro === this.livros[i].getisbn()) {
                this.livros.splice(i, 1);
                return;
            }
        }        
    }
    public buscarLivro(): void {
        for (var i = 0; i < this.livros.length; i++) {
            console.log("------------------------------------------------------")
            this.livros[i].exibirDetalhes();
        }
    }
    private save(livro: Livro) {
        this.livros.push(livro);
        console.log(`Livro ${livro.getisbn()} foi criada com sucesso`);
    }
    public getListaLivros(): Livro[]{
        return this.livros;
    }   
    public ListaHistoricoLivros(){
        var isbn = leia.question("DIGITE O ISBN DO LIVRO: ");
        for (var i = 0; i < this.livros.length; i++) {
            if (isbn === this.livros[i].getisbn()) {
                this.livros[i].listaHistorico();
                return;
            }
        }    
    }

}