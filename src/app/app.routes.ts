import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: '',
        component: ListComponent
    }
];
