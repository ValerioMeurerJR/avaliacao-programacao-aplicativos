import Aluno from "./aluno";
import leia from "readline-sync"
import Livro from "./Livro";
import Biblioteca from "./Biblioteca";

export default class Emprestimo {
    alunos: Aluno[] = []

    public adicionarAluno(): void {
        console.log("---------------RESERVAR ALUNO-------------------")
        var matricula = leia.question("DIGITE O NUMERO DE MATRICULA: ");
        var telefone = leia.question("DIGITE O TELEFONE: ");
        var aluno = new Aluno(matricula, telefone)
        this.saveAluno(aluno);
    }

    public ReservarLivro(biblioteca: Biblioteca): void {                
        console.log("---------------RESERVAR LIVRO-------------------")
        var matricula = leia.question("DIGITE O NUMERO DE MATRICULA: ");
        var isbn = leia.question("DIGITE O ISBN DO LIVRO: ");
        for (var i = 0; i < this.alunos.length; i++) {
            if (matricula === this.alunos[i].getmatricula()) {
                for (var a = 0; a < biblioteca.getListaLivros().length; a++) {
                    if (isbn === biblioteca.getListaLivros()[a].getisbn()) {
                        this.alunos[i].setlivros(biblioteca.getListaLivros()[a]);
                        biblioteca.livros[a].setHistorico(this.alunos[i])
                    } else {
                        console.log("LIVRO NÃO ENCONTRADO")
                    }
                }
            } else {
                console.log("ALUNO NÃO ENCONTRADO")
            }
        }
    }
    public ListaReservas(): void {
        this.alunos.forEach(aluno => aluno.exibirReservas())
    }
    private saveAluno(aluno: Aluno) {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.getmatricula()} foi criada com sucesso`);
    }

    

}