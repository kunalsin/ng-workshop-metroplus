import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModules, MaterialComponents, MaterialServices } from './material-imports';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from './book-guard.service';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    ...MaterialComponents,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    ...MaterialModules,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  entryComponents: [
    NewBookComponent
  ],
  providers: [...MaterialServices,
              BookGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
