import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomenotifyService {
homeclick:Subject<string>=new Subject();

  constructor() { }
}
