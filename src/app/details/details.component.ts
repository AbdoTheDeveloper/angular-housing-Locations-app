import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `

     <article>
      <!-- Photo of housing location -->
      <img class ="listing-photo" [src]="housingLocation?.photo" alt="Housing Location Details Photo">
      <!-- Description of housing location -->
      <section class ="listing-description">
        <h2 class ="linsting-heading">{{housingLocation?.name}}</h2>
        <p>
          {{housingLocation?.city}} , {{housingLocation?.state}}
        </p>
      </section>
      <!-- Features of housing location -->
      <section class ="listing-features">
        <h2 class = "section-heading">About This Location </h2>
        <ul> 
          <!-- Number of units available -->
          <li>Units available {{housingLocation?.availableUnits}}</li>
          <!-- Wifi availability -->
          <li>Does this location has wifi {{housingLocation?.wifi}} </li>
          <!-- Laundry availability -->
          <li>Does this location has laudry {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <!-- Application section -->
      <section class ="listing-apply">
        <h2 class ="section-heading"> Apply now to live here</h2>
        <!-- Form for application -->
        <form [formGroup]="applyForm" (submit) =  "submitApplication()">
      <label for ="first-name"  >First Name</label>
      <!-- First name input field -->
      <input type="text" id ="first-name" type ="text" formControlName="firstName">
      <label for ="last-name"  > Last Name </label>
      <!-- Last name input field -->
      <input type="text" id="last-name" formControlName="lastName">
      <label for ="email"  > Email </label>
      <!-- Email input field -->
      <input type="text" id="email" formControlName="email">
      <!-- Submit button -->
      <button type="submit" class ="primary">Apply now</button>
    </form>
      </section>
     </article>
    
  `,
  styleUrls: ['./details.component.css']
})
// Export the DetailsComponent class
export class DetailsComponent {
  // Inject the ActivatedRoute
  Route: ActivatedRoute = inject(ActivatedRoute);
  // Inject the HousingService
  housingService = inject(HousingService);
  // Declare the housingLocation variable
  housingLocation: HousingLocation | undefined;
  // Create a new FormGroup
  applyForm = new FormGroup({
    // Create a new FormControl for the firstName
    firstName: new FormControl(''),
    // Create a new FormControl for the lastName
    lastName: new FormControl(""),
    // Create a new FormControl for the email
    email: new FormControl("")
  });
  // Constructor method
  constructor() {
    // Get the housingLocationId from the Route snapshot
    const housingLocationId  = Number(this.Route.snapshot.params["id"]) ; 
    // Get the housingLocation from the housingService
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation : HousingLocation | undefined )=>{
      // Set the housingLocation
      this.housingLocation = housingLocation  ; 
    }); 
  }
  // SubmitApplication method
  submitApplication() {
    // Call the submitApplication method from the housingService
    this.housingService.submitApplication(
      // Pass the firstName from the applyForm or an empty string
      this.applyForm.value.firstName ?? "",
      // Pass the lastName from the applyForm or an empty string
      this.applyForm.value.lastName ?? "",
      // Pass the email from the applyForm or an empty string
      this.applyForm.value.email ?? "")
  }
  addRating(Rating : number){
    
  }


}
