import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  public delayAnimationOnWelcomePage = 2.5;
  public isFirstLoad = true;

  constructor() { }
}
