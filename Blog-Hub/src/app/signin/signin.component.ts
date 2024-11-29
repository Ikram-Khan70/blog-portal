import {ChangeDetectionStrategy, Component, signal ,OnInit} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {merge} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {//implements OnInit {
//   signInForm!: FormGroup;
//   readonly email = new FormControl('', [Validators.required, Validators.email]);

//   errorMessage = signal('');

//   constructor(
//     private fb:FormBuilder
//   ){
//     merge(this.email.statusChanges, this.email.valueChanges)
//     .pipe(takeUntilDestroyed())
//     .subscribe(() => this.updateErrorMessage());
//   }
//   ngOnInit(): void {
//     this.signInForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }
//   hide = signal(true);
//   clickEvent(event: MouseEvent) {
//     this.hide.set(!this.hide());
//     event.stopPropagation();
//   }

//   updateErrorMessage() {
//     if (this.email.hasError('required')) {
//       this.errorMessage.set('You must enter a value');
//     } else if (this.email.hasError('email')) {
//       this.errorMessage.set('Not a valid email');
//     } else {
//       this.errorMessage.set('');
//     }
// }

// Submit(){
//     console.log('workin');
//   }

email: string = '';
password: string = '';

constructor(private router: Router) {}

onSubmit(): void {
  if (this.email && this.password) {
    console.log('Sign-In successful!');
    this.router.navigate(['/home']);
  } else {
    alert('Please enter both email and password');
  }
}
}
