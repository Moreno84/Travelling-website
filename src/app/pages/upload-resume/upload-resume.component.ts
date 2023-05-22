import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {

  //Form validation

  registerForm = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    lname: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required]),
    uploadResume: new FormControl('',[Validators.required,Validators.maxLength(50)])

  })

  onSubmit(){
    console.warn(this.registerForm.value)
  }

  get name(){
    return this.registerForm.get('fname');
  }

  get surname(){
    return this.registerForm.get('lname');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get phone(){
    return this.registerForm.get('phone');
  }

  get uploadResume(){
    return this.registerForm.get('uploadResume');
  }



}
