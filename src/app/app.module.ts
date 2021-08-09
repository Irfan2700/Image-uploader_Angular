import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';

import { ImageCropperModule } from 'ngx-image-cropper';
import { DragndropDirective } from './directives/dragndrop.directive';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DropzoneComponent,
    DragndropDirective,
    ImageCropperComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
