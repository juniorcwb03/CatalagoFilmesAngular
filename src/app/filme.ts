export class Filme 
{
    filmeId: String;
    titulo: string;
    datalancamento: string; 
    generofilme: string;
    diretor: string;
    listaautores: string;

    constructor(){
        this.filmeId = '1'
        this.titulo = 'A volta'
        this.datalancamento = '20/07/2020'
        this.generofilme = 'Romance'
        this.diretor = 'Joao Antonio'
        this.listaautores= 'maria,isis,igor'
    }
}
