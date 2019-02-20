import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApisComponent } from './apis/apis.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EmptyComponent} from './empty/empty.component'

const routes: Routes = [
  
  {
    path: '', component: AppComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'apis', component: ApisComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ApisComponent,
    LoginComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EmptyComponent]
})
export class AppModule { }
