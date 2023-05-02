import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AszfComponent } from './components/aszf/aszf.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full' },
  { path: 'categories',  component: CategoriesComponent, pathMatch: 'full' },
  { path: 'categories/:id',  component: CategoryComponent, pathMatch: 'full' },
  { path: 'favorites',  component: FavoritesComponent, pathMatch: 'full' },
  { path: 'aszf',  component: AszfComponent, pathMatch: 'full' },
  { path: 'cookiepolicy',  component: CookiePolicyComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
