
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { GeneroService } from '../Genero.service';  
import { Genero } from '../Genero';  

@Component({
  selector: 'app-Genero',
  templateUrl: './Genero.component.html',
  styleUrls: ['./Genero.component.css']
})
export class GeneroComponent implements OnInit {
  dataSaved = false;  
  GeneroForm: any;
  allGeneros!: Observable<Genero[]>;   
  GeneroIdUpdate : object;  
  message: string;
  constructor(private formbulider: FormBuilder, private GeneroService:GeneroService)
   {  this.message = ''
      this.GeneroIdUpdate = Object
   }
  ngOnInit() {
    this.GeneroForm = this.formbulider.group({  
      Nome: ['', [Validators.required]],  
      Titulo: ['', [Validators.required]],  
    });  
    this.loadAllGeneros();  
  }
  loadAllGeneros() {  
    this.allGeneros = this.GeneroService.getAllGeneros();    
  } 
  onFormSubmit() {  
    this.dataSaved = false;  
    const Genero = this.GeneroForm.value;  
    this.CreateGenero(Genero);  
    this.GeneroForm.reset();  
  } 
  CreateGenero(Genero: Genero) {  
    if (this.GeneroIdUpdate == null) {  
      this.GeneroService.createGenero(Genero).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = "Registro salvo com sucesso";  
          this.loadAllGeneros();  
          this.GeneroIdUpdate = Object;  
          this.GeneroForm.reset();  
        }  
      );  
    } else {  
      Genero.GeneroId = this.GeneroIdUpdate;  
      this.GeneroService.updateGenero(this.GeneroIdUpdate,Genero).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro atualizado com sucesso';  
        this.loadAllGeneros();  
        this.GeneroIdUpdate = Object;  
        this.GeneroForm.reset();  
      });  
    }  
  }  
  loadGeneroToEdit(Generoid: string) {  
    this.GeneroService.getGeneroById(Generoid).subscribe(Genero=> {  
      this.message = 'null';  
      this.dataSaved = false;  
      this.GeneroIdUpdate = Genero.GeneroId;  
      this.GeneroForm.controls['Nome'].setValue(Genero.nome);  
       
    });    
  }  
  deleteGenero(Generoid: string) {  
    if (confirm("Deseja realmente deletar este Genero ?")) {   
      this.GeneroService.deleteGeneroById(Generoid).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registro deletado com sucesso';  
        this.loadAllGeneros();  
        this.GeneroIdUpdate = Object;  
        this.GeneroForm.reset();  
      });  
    }  
  }  
  resetForm() {  
    this.GeneroForm.reset();  
    this.message = '';  
    this.dataSaved = false;  
  } 
}
