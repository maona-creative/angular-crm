import { Routes } from '@angular/router';
import { WelderformsComponent } from './welderforms/welderforms.component';
import { AppComponent } from './app.component';
import { WeldertableComponent } from './weldertable/weldertable.component';
import { FinmetalformsComponent } from './finmetalforms/finmetalforms.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FinmetaltableComponent } from './finmetaltable/finmetaltable.component';

export const routes: Routes = [
    { path: 'welder-table', component: WeldertableComponent },
    { path: 'welder-forms', component: WelderformsComponent },
    { path: 'finmetal-forms', component: FinmetalformsComponent},
    { path: 'finmetal-table', component: FinmetaltableComponent},
    { path: 'navigator', component: NavigatorComponent},
    { path: '', pathMatch: 'full',  redirectTo: '/navigator'}
   
];

