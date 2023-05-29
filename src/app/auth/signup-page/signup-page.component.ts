import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements AfterViewInit {
  constructor(private api: ApiService, private router: Router) {}
  @ViewChild('nameFieldRef') nameField!: ElementRef;

  signupForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(20)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  ngAfterViewInit(): void {
    this.nameField.nativeElement.focus();
  }

  getFieldControl(field: string): FormControl {
    return this.signupForm.get(field) as FormControl;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    this.api.signup(this.signupForm.value).subscribe({
      next: (data) => {
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}
