import { NgModule } from "@angular/core"
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from "./auth.guard.service";



const routes:Routes =[
    {path:"", component:HomeComponent},
    {path:"users", component:UsersComponent , children:[{path:":id/:name", component: UserComponent}]},
    
      {path:"servers",canActivate:[AuthGuard], component:ServersComponent, children:[
      {path:":id", component:ServerComponent},
      {path:":id/edit", component:EditServerComponent}
    ]},
    {path:"page_not_found", component: PageNotFoundComponent},
    {path:"**", redirectTo:"/page_not_found"}
   
   
  
  ];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]

})

export class AppRoutingModule{

}