import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
const routeConfig : Routes = [
{
    path: ""  , // The path for the home page
    component : HomeComponent , // The component for the home page
    title : "Home Page" // The title of the home page
} , 
   { path: "details/:id"  , // The path for the details page
    component : DetailsComponent , // The component for the details page
    title : "Details Page" // The title of the details page
}
] ; 
export default routeConfig ; 