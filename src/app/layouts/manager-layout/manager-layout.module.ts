import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerLayoutRoutes } from './manager-layout.routing';
import { ListeDepenseComponent } from 'app/pages/manager/liste-depense/liste-depense.component';
import { CreateDepenseComponent } from 'app/pages/manager/create-depense/create-depense.component';
import { EmployeListeComponent } from 'app/pages/manager/statistique/employe-liste/employe-liste.component';
import { EmployeStatistiqueComponent } from 'app/pages/manager/statistique/employe-statistique/employe-statistique.component';
import { ServiceComponent } from 'app/pages/manager/services/service.component';
import { PersonnelComponent } from 'app/pages/manager/personnel/personnel.component';
import { ContactComponent } from 'app/pages/manager/contact/contact.component';
import { PartageModule } from 'app/partage/partage.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    NgbModule,
    PartageModule
  ],
  declarations: [
    ListeDepenseComponent,
    CreateDepenseComponent,
    EmployeListeComponent,
    EmployeStatistiqueComponent,
    ServiceComponent,
    PersonnelComponent,
    ContactComponent
  ]
})

export class ManagerLayoutModule {}
