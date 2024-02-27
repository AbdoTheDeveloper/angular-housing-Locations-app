import { Component  , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule , RouterModule],
  template: `
   <!-- The code creates a section for a listing with an image, heading, location, and a link to learn more -->
<section class="listing">
      <!-- Image of the housing location -->
      <img [src]="housingLocation.photo" alt="Housing Location photo " class="listing-photo">
      <!-- Heading of the housing location -->
      <h2 class ="listing-heading">{{housingLocation.name}}</h2>
      <!-- Location of the housing location -->
      <p class="listing-location">{{housingLocation.city}} ,  {{housingLocation.state}}</p>
      <!-- Link to learn more about the housing location -->
      <a [routerLink]="['details', housingLocation.id]">Learn More</a>
       </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // This is a property that takes in an input of type HousingLocation
  @Input() housingLocation! : HousingLocation ; 

}
