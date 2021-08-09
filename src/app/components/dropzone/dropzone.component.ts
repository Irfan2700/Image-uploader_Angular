import { Component, OnInit, Output, EventEmitter, HostBinding, HostListener, ViewChild } from '@angular/core';
import { FileModel } from 'src/app/interfaces/file-model';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  @Output() files : EventEmitter<FileModel[]> = new EventEmitter();

  @HostBinding('style.fontSize') fontSize : Boolean = true;

  constructor() { }
  
  filesDropped(evt: FileModel[]) : void {
    // console.log(evt);
    this.files.emit(evt)
  }

  ngOnInit(): void {
  }

}
