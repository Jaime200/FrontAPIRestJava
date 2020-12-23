import { RouterModule,Routes, PreloadAllModules } from "@angular/router";


import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [    
    {path: 'dashboard',  component : HomeComponent, },
    {path: '',  redirectTo : 'dashboard', pathMatch:'full'},    
    {path: '**',  component: HomeComponent},

]

export const APP_ROUTES = RouterModule.forRoot(appRoutes)