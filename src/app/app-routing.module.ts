import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {path: "peliculas", component: MoviesComponent},
  {path: "detalle", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
