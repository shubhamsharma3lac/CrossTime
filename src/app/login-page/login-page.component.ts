import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserAccountModel } from '../user-account-model';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  //Model to store user information
  private model : UserAccountModel;
  private modelKeys : string[];

  private form  : FormGroup;
  private formControls = {};

  constructor() { 
    this.model = new UserAccountModel(null, null, null, null, null, null);
    this.modelKeys = Object.keys(this.model);

    this.modelKeys.forEach((key) =>{
      let validators = [];
      validators.push(Validators.required);
      
      if(key === 'email'){
        validators.push(Validators.email);
      }
      if(key === 'phone'){
        validators.push(Validators.minLength(5));
      }

      let control = new FormControl(this.model[key], validators);
      this.formControls[key] = control;
    });

    this.form = new FormGroup(this.formControls);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  onSubmit(){
    let x = this.form.value['email'];
  }

}
