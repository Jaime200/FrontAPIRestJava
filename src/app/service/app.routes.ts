import { RouterModule,Routes, PreloadAllModules } from "@angular/router";

import { AppComponent } from '../app.component';

const appRoutes: Routes = [    
    {path: '/dashboard',  component : AppComponent, },
    {path: '',  redirectTo : '/dashboard', pathMatch:'full'},    
    {path: '**',  component: AppComponent},

]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { 
    useHash: true,
    preloadingStrategy: PreloadAllModules
   })