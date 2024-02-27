import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
// Export the HousingService class
export class HousingService {
  // Set the url for the housing locations
  url ="http://localhost:3000/locations" ;  

  // Constructor for the HousingService class
  constructor() { }
  // Get all housing locations
  async getAllHousingLocations(): Promise<HousingLocation[]>{
    // Fetch the data from the url
    const data  = await fetch(this.url) ;
    // Return the data as a json object
    return await data.json() ?? []  ;  
  } ; 
  // Get a housing location by id
  async getHousingLocationById(id :number) : Promise <HousingLocation | undefined>{
 // Fetch the data from the url
 const data =  await fetch (`${this.url}/${id}`)
 // Return the data as a json object
 return await data.json()  ?? {}
  } 
  // Submit an application
  submitApplication(firstName : string  , lastName : string , email : string ){
    // Log the application details
    console.log(firstName , lastName, email) ;
  }

}
