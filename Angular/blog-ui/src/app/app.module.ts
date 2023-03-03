import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './areas/client/layout/layout.component';
import { HomePageComponent } from './areas/client/home/home-page.component';
import { PostPageComponent } from './areas/client/post/post-page.component';
import { SearchPageComponent } from './areas/client/search/search-page.component';
import { ErrorPageComponent } from './areas/shared/error-page/error-page.component';
import { PostComponent } from './components/post/post.component';
import { LoginPageComponent } from './areas/client/login/login-page.component';
import { RegisterPageComponent } from './areas/client/register/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PostPageComponent,
    SearchPageComponent,
    ErrorPageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
