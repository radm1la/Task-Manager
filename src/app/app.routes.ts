import { Routes } from '@angular/router';
import { Board } from './features/board/board';

export const routes: Routes = [
    {path:'',redirectTo:'board',pathMatch:'full'},
    {path:'board',component:Board}
];
