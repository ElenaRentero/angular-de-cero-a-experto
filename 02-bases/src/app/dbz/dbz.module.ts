import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

// import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // providers: [
  //   DbzService
  // ] Esto no sería necesario puesto que en el servicio hemos incluido el providedIn: 'root'
})
export class DbzModule { }