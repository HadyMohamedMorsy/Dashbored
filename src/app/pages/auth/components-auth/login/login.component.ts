import { Component, inject } from '@angular/core';
import { Login } from '@modal/login';
import { AuthService } from '@services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private auth  = inject(AuthService);
  private LoginBuilder = inject(FormBuilder);
  contactLoginForm !: FormGroup;
  
  ngOnInit(): void {
    this.contactLoginForm = this.LoginBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
    
  }

  onSubmit() {
    this.auth.login(this.contactLoginForm.value).subscribe((v)=>{
        console.log(v);
    })
  }
}
