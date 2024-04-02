import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-tournament',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-tournament.component.html',
})
export class CreateTournamentComponent {
checkoutForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.httpClient.post('/api/tournament', this.checkoutForm.value).subscribe((data) => {
      console.log(data)
      this.router.navigate(['']).then(() => {});
    });
}
}
