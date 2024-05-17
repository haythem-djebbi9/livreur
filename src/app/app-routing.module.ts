import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListcommandeproduitComponent } from './dashboard/listcommandeproduit/listcommandeproduit.component';
import { ListcommandecouleurComponent } from './dashboard/listcommandecouleur/listcommandecouleur.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [ 
  
  { path: 'dashboard', canActivate: [AuthGuard],component: DashboardComponent, children: [
  { path: '', redirectTo: 'commandeproduit/list', pathMatch: 'full' },
  { path: 'commandeproduit/list', component: ListcommandeproduitComponent },
  { path: 'commandecouleur/list', component: ListcommandecouleurComponent },]
  

  },
  { path: 'login', component: LoginComponent },

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
