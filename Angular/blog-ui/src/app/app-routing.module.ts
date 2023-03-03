import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './areas/client/home/home-page.component';
import { LayoutComponent } from './areas/client/layout/layout.component';
import { LoginPageComponent } from './areas/client/login/login-page.component';
import { PostPageComponent } from './areas/client/post/post-page.component';
import { RegisterPageComponent } from './areas/client/register/register-page.component';
import { SearchPageComponent } from './areas/client/search/search-page.component';
import { ErrorPageComponent } from './areas/shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children:[
    { path: '', component: HomePageComponent },
    { path: 'search/:term', component: SearchPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'post/:id', component: PostPageComponent },
    { path: 'error/:id', component: ErrorPageComponent },
    { path: '**',   redirectTo: '/error/404' },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
