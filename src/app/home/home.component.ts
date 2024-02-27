import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import this if FormsModule is needed
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, FormsModule],
  template: `
    <section>
      <!-- Form to filter housing locations by city -->
      <form action="">
        <!-- Input field for city name -->
        <input type="text" name="" id="" placeholder="filter"(input) = "filterResults(filter.value)" #filter>
        <!-- Search button -->
        <!-- <button class ="primary" type ="button" (click) = "filterResults(filter.value)" >search</button> -->
      </form>
    </section>
    <!-- Section to display housing location results -->
    <section class="results ">
    <!-- Loop through each housing location and display it -->
    <app-housing-location *ngFor="let housingLocation of filtredLocationList" [housingLocation]="housingLocation"> </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
// Export the HomeComponent class
export class HomeComponent {
  // Declare an empty array of HousingLocation type
  housingLocationList: HousingLocation[] = [];
  // Declare a HousingService type variable and inject it
  housingService: HousingService = inject(HousingService)
  // Declare a variable called 'filtredLocationList' of type 'HousingLocation' array.
  filtredLocationList: HousingLocation[] = [];
  // Constructor method
  constructor() {
    // Get all housing locations from the housing service and assign it to the housingLocationList
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filtredLocationList = housingLocationList;
    })

  };
// Method to filter housing locations based on the search term
filterResults(filterTerm: string) {
    this.filtredLocationList = this.housingLocationList.filter((housingLocation: HousingLocation) => {
      return ((housingLocation?.city.toLowerCase().includes(filterTerm.toLowerCase())) || (housingLocation?.name.toLowerCase().includes(filterTerm.toLowerCase())) || (housingLocation?.state.toLowerCase().includes(filterTerm.toLowerCase()))
      || (housingLocation?.availableUnits.toString().includes(filterTerm)));
    } 
    );
  }

}
