import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CroppedImageSubjectService {

  constructor() { }

  private subject : Subject<any> = new Subject();

  public subject$ = this.subject.asObservable();

  sendCroppedImage(image: any){
    this.subject.next(image);
  }

  clearImage(){
    this.subject.next();
  }

}
