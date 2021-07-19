
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { FilmeService } from '../filme.service';  
import { Filme } from '../filme';  

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
  dataSaved = false;  
  FilmeForm: any;
  allFilmes!: Observable<Filme[]>;   
  FilmeIdUpdate : object;  
  message: string;
  constructor(private formbulider: FormBuilder, private FilmeService:FilmeService)
   {  this.message = ''
      this.FilmeIdUpdate = Object
   }
  ngOnInit() {
    this.FilmeForm = this.formbulider.group({  
      Nome: ['', [Validators.required]],  
      Titulo: ['', [Validators.required]],  
    });  
    this.loadAllFilmes();  
  }
  loadAllFilmes() {  
    this.allFilmes = this.FilmeService.getAllFilmes();    
  } 
  onFormSubmit() {  
    this.dataSaved = false;  
    const Filme = this.FilmeForm.value;  
    this.CreateFilme(Filme);  
    this.FilmeForm.reset();  
  } 
  CreateFilme(Filme: Filme) {  
    if (this.FilmeIdUpdate == null) {  
      this.FilmeService.createFilme(Filme).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = "Registro salvo com sucesso";  
          this.loadAllFilmes();  
          this.FilmeIdUpdate = Object;  
          this.FilmeForm.reset();  
        }  
      );  
    } else {  
      Filme.filmeId = this.FilmeIdUpdate;  
      this.FilmeService.updateFilme(this.FilmeIdUpdate,Filme).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro atualizado com sucesso';  
        this.loadAllFilmes();  
        this.FilmeIdUpdate = Object;  
        this.FilmeForm.reset();  
      });  
    }  
  }  
  loadFilmeToEdit(Filmeid: string) {  
    this.FilmeService.getFilmeById(Filmeid).subscribe(Filme=> {  
      this.message = 'null';  
      this.dataSaved = false;  
      this.FilmeIdUpdate = Filme.filmeId;  
      this.FilmeForm.controls['Nome'].setValue(Filme.titulo);  
      this.FilmeForm.controls['Genero'].setValue(Filme.generofilme);  
    });    
  }  
  deleteFilme(Filmeid: string) {  
    if (confirm("Deseja realmente deletar este Filme ?")) {   
      this.FilmeService.deleteFilmeById(Filmeid).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro deletado com sucesso';  
        this.loadAllFilmes();  
        this.FilmeIdUpdate = Object;  
        this.FilmeForm.reset();  
      });  
    }  
  }  
  resetForm() {  
    this.FilmeForm.reset();  
    this.message = '';  
    this.dataSaved = false;  
  } 
}
