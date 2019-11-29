import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: "**", redirectTo: 'home' }
]; 