import Aluno from "./aluno";

export default class Livro {
    titulo: string;
    autor: string;
    isbn: string;
    historicos: Aluno[] = []
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = String(Math.floor(Math.random() * 89999) + 10000);
    }
    public exibirDetalhes(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        this.historicos.forEach(historico => console.log(`Titulo: ${historico.getNome()}`))
    }
    public getisbn(): string {
        return this.isbn;
    }
    public setHistorico(aluno: Aluno): void {
        this.historicos.push(aluno);
    }
    
    public listaHistorico(): void{
        console.log(this.historicos)
    }
    public getTitulo(): string{
        return this.titulo;
    }



}