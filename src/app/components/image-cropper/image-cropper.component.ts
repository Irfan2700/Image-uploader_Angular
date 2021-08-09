import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FileModel } from 'src/app/interfaces/file-model';
import { CroppedImageSubjectService } from 'src/app/services/cropped-image-subject.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit, OnChanges {

  @Input() imagefile : any;
  @Input() destroyComponent : any;

  @Output() croppedImagePreview : EventEmitter<any> = new EventEmitter();

  // imageChangedEvent : any = '';
  croppedImage: any = "";

  constructor(private croppedSubjectService: CroppedImageSubjectService) { }

  ngOnChanges() : void {
    console.log("file-changes: ",this.imagefile)
  }

  imageCropped(evt : ImageCroppedEvent) {
    this.croppedImage = evt.base64;

    this.croppedSubjectService.sendCroppedImage({"croppedImage": evt, "ImageInfo": this.imagefile[0].file})
  }

  imageLoaded () {

  }

  cropperReady () {

  }

  loadImageFailed() {

  }

  ngOnInit(): void {
  }

}
