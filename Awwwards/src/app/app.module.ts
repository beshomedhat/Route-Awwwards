import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { JobsComponent } from './jobs/jobs.component';
import { NavComponent } from './nav/nav.component';
import { NomineesComponent } from './nominees/nominees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfessionalDirectoryComponent } from './professional-directory/professional-directory.component';
import { SubmitComponent } from './submit/submit.component';
import { TermsComponent } from './terms/terms.component';
import { WinnersComponent } from './winners/winners.component';
import {RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as $ from 'jquery';
import { BlogComponent } from './blog/blog.component'


const appRoutes: Routes=
[
  {path:'home' , component: HomeComponent},
  {path:'' , redirectTo: 'home' , pathMatch:'full'},
  {path:'winners' , component: WinnersComponent},
  {path:'nominees' , component: NomineesComponent},
  {path:'collections' , component: CollectionsComponent},
  {path:'professionalDierctory' , component: ProfessionalDirectoryComponent},
  {path:'aboutUs' , component: AboutUsComponent},
  {path:'submit' , component: SubmitComponent },
  {path:'jobs' , component: JobsComponent },
  {path:'contact' , component: ContactComponent },
  {path:'cookies' , component: CookiesComponent },
  {path:'terms' , component: TermsComponent },
  {path:'policy' , component: PolicyComponent },
  {path:'blog', component:BlogComponent},
  {path:'**' , component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    CookiesComponent,
    FooterComponent,
    JobsComponent,
    NavComponent,
    NomineesComponent,
    NotFoundComponent,
    PolicyComponent,
    ProfessionalDirectoryComponent,
    SubmitComponent,
    TermsComponent,
    WinnersComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
