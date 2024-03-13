import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobprofileComponent } from './jobprofile/jobprofile/jobprofile.component';
import { SettingComponent } from './setting/setting/setting.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'jobprofile', component: JobprofileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
