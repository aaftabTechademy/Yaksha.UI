import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobListingComponent } from './job-listing/job-listing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent},
                    { path: 'job-listing', component: JobListingComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }