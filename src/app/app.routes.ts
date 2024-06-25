import { Routes } from '@angular/router';
import { WelderformsComponent } from './welderforms/welderforms.component';
import { AppComponent } from './app.component';
import { WeldertableComponent } from './weldertable/weldertable.component';


export const routes: Routes = [
    { path: 'welder-table', component: WeldertableComponent },
    { path: 'welder-forms', component: WelderformsComponent },
    { path: '', pathMatch: 'full',  redirectTo: '/welder-table'}
];

