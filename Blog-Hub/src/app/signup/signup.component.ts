
import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;


  constructor(private router: Router,
    private fb:FormBuilder

  ) {}
  ngOnInit(): void {
   this.firstFormGroup=this.fb.group({
    name:[''],
    email:[],
    phone:[]

   });

   this.secondFormGroup=this.fb.group({
    password:[''],
    cnfpassword:[],
   });
  }
  isLinear = true;

}
