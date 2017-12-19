import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importer les composants
import { DashboardComponent } from './dashboard.component';
import { BlogPostComponent } from '../../partials/blog-post/blog-post.component';

// Importer le fichier de la route
import { Routing } from './dashboard.route';


@NgModule({
  declarations: [ DashboardComponent, BlogPostComponent ],
  imports: [ CommonModule , Routing ]
})

export class DashboardModule {}
