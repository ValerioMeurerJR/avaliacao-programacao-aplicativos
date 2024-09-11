import Livro from "./Livro";

export default class Aluno {
    matricula: string
    nome: string;
    telefone: string;
    livros: Livro[] = [];
    constructor(nome: string, telefone: string){
        this.nome = nome;
        this.telefone = telefone;
        this.matricula = String(Math.floor(Math.random() * 89999) + 10000); 
    }
    public getmatricula(): string {
        return this.matricula;
    }

    public getlivros(): Livro[] {
        return this.livros;
    }
    
    public setlivros(livro: Livro): void {
        this.livros.push(livro);
    }
    
    public exibirReservas(): void {
        console.table(this.livros)
    }    
    
}