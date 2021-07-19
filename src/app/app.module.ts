import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {  
MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, 
MatCardModule, MatSidenavModule,MatFormFieldModule,  
MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  

import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FilmeService } from './filme.service';
import { GeneroService } from './genero.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    GeneroComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule 
  ],
  providers: [HttpClientModule, FilmeService,GeneroService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
