import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: any;
  password: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.login(this.username, this.password)
        .then((result) => {
          this.router.navigate(['/']);
          // change the above to profile after I make it
        );
      // ... maybe turn this to false if your're staying on the page - this.processing = false;
    }
