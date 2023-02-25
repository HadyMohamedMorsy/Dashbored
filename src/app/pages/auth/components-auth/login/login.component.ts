import { Router } from '@angular/router';
import { ChangeDetectionStrategy,Component, inject, OnDestroy } from '@angular/core';
import { Login } from 'src/app/core/global-modal/login';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  private Router = inject(Router);
  private MessageService = inject(MessageService);
  private loading = inject(NgxSpinnerService);
  private auth = inject(AuthService);
  private LoginBuilder = inject(FormBuilder);
  private sub$ !: Subscription;
  contactLoginForm!: FormGroup;

  ngOnInit(): void {
    this.contactLoginForm = this.LoginBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (
      this.contactLoginForm.controls['email'].status == 'INVALID' ||
      this.contactLoginForm.controls['email'].errors != null ||
      this.contactLoginForm.controls['password'].status == 'INVALID'
    ) {
      this.loading.show();
      setTimeout(() => {
        this.MessageService.add({
          severity: 'error',
          summary: 'please check your Email Or Password',
          detail: 'Validation failed',
        });
        this.loading.hide();
      }, 1500);
    } else {
      this.loading.show();
      this.sub$ = this.auth.login(this.contactLoginForm.value).subscribe({
        next: () => {
          this.loading.hide();
          this.Router.navigate(['/']);
        },
        error: (e) => {
          this.loading.hide();
          this.MessageService.add({
            severity: 'error',
            summary: e,
            detail: 'Validation failed',
          });
        },
      });
    }
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
