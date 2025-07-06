import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { QuestComponent } from './quest/quest.component';
import { LicensingComponent } from './licensing/licensing.component';
import { BlogComponent } from './blog/blog.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent}, //inpiration route
    {path:'photographers',component:PhotographersComponent}, //phtographers component
    {path:'quest',component: QuestComponent}, //quest component
    {path:'licensing',component:LicensingComponent}, //licensing component
    {path:'blog',component:BlogComponent}, //blog component
    {path:'memberships',component:MembershipsComponent}, //memberships components
    {path:'**',component:PageNotFoundComponent},//page not found
    
];
