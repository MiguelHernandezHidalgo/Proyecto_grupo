import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormAltaComponent } from './form-alta/form-alta.component';
import { FormBajaComponent } from './form-baja/form-baja.component';
import { ListaComponent } from './lista/lista.component';
import { PortfoliosService } from './portfolios.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { IndividualComponentComponent } from './individual-component/individual-component.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:'full-list', component:ListaComponent},
  {path:'one-to-one', component:IndividualComponentComponent},
  {path:'new', component:FormAltaComponent},
  {path:'delete', component:FormBajaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent,
    FooterComponentComponent,
    IndividualComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PortfoliosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
