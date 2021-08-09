import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileModel } from '../interfaces/file-model';

@Directive({
  selector: '[appDragndrop]'
})
export class DragndropDirective {

  @Output() files: EventEmitter<any> = new EventEmitter();

  @HostBinding('style.background') private background = '#eee';

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener("dragover", ['$event']) public onDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = "#999";
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener("drop", ['$event']) public onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = "#eee";

    let files : FileModel[] = [];
    // files.push(e);
    let fileread = new FileReader();
    // console.log("drop: ", fileread.readAsDataURL(e.dataTransfer!.files[0]));

    for(let i=0; i < e.dataTransfer!.files.length; i++) {
      const file = e.dataTransfer!.files[i];
      const fileUrls = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
      // if(files.length > 0)
      files.push({ file, fileUrls })
    }
    this.files.emit(files);
  }

}
