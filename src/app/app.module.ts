import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequireAnonGuardService } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
// ---- Services ----
import { AuthService } from './services/auth.service';
// ---- Components ----
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { IndexComponent } from './pages/index/index.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { InitAuthGuard } from './guards/init-auth.guard';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [InitAuthGuard] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: '**', component: NotfoundPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    NotfoundPageComponent,
    IndexComponent,
    RestaurantSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AuthService,
    RequireAnonGuardService,
    RequireUserGuard,
    InitAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
