import { Component, EventEmitter, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FileModel } from './interfaces/file-model';
import { CroppedImageSubjectService } from './services/cropped-image-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  files: FileModel[] = [];

  destroyTrigger: Boolean = false;

  currentCroppedImage: ImageCroppedEvent = {} as ImageCroppedEvent;

  finalImagePreview: any = []; 

  constructor(private croppedSubjectService: CroppedImageSubjectService) {}
  
  uploadedImages(event: FileModel[]) {
    console.log("upload: ",event);
    this.files = event;
    this.destroyTrigger = false;
  }

  saveCroppedImage (evt: Event) {
    this.finalImagePreview.push(this.currentCroppedImage);
    console.log("final", this.finalImagePreview);
    this.destroyTrigger = true;
  }

  croppedImage (evt: ImageCroppedEvent) {
    this.currentCroppedImage = evt;
    console.log("after saving",evt)
  }

  reset(evt: Event) {
    this.destroyTrigger = false;
    this.croppedSubjectService.clearImage();
  }

  ngOnInit() : void {}
}
