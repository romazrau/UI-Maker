import { PagesRoutingModule } from './features/pages/pages-routing.module';
import { PagesModule } from './features/pages/pages.module';
import { BoxModelEditorModule } from './features/box-model-editor/box-model-editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    BoxModelEditorModule,
    PagesRoutingModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
