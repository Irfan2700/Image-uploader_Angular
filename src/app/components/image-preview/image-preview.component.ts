import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CroppedImageSubjectService } from 'src/app/services/cropped-image-subject.service';


@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  @Output() currentCroppedImage: EventEmitter<any> = new EventEmitter();

  croppedImage : any = {};

  loaded: boolean = true;

  constructor(private croppedSubjectService: CroppedImageSubjectService) { }

  // async subjectwait() {
  //   return await this.croppedSubjectService.subject$.toPromise();
  // }

  ngOnInit(): void {

    this.croppedSubjectService.subject$.subscribe((data : any) => {
        this.croppedImage = data;
        console.log("preview", data)
        this.currentCroppedImage.emit(this.croppedImage);
        this.loaded = false;
    })
  }

}
