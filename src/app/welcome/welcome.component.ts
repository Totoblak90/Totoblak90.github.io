import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { AppStoreService } from '../services/app-store.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('nombre', { static: true }) nombre: ElementRef<HTMLTitleElement>;
  @ViewChild('descripcion', { static: true })
  descripcion: ElementRef<HTMLParagraphElement>;
  @ViewChild('saludo', { static: true }) saludo: ElementRef<HTMLTitleElement>;
  @ViewChild('renglon', { static: true }) renglon: ElementRef<HTMLHRElement>;
  @ViewChild('avatar', { static: true }) avatar: ElementRef<HTMLImageElement>;
  @ViewChild('musicPlayer', {static: true}) musicPlayer: ElementRef<HTMLDivElement>

  constructor(private appStoreService: AppStoreService) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  public initAnimations() {
    const animation: gsap.TweenVars = {
      y: 'random(-200, 200)',
      x: 'random(-200, 200)',
      opacity: 0,
    };
    let tl = gsap.timeline();
    tl.delay(this.appStoreService.delayAnimationOnWelcomePage);
    tl.from(this.nombre.nativeElement, animation)
      .from(this.descripcion.nativeElement, animation)
      .from(this.renglon.nativeElement, animation)
      .from(this.saludo.nativeElement, animation)
      .from(this.avatar.nativeElement, animation)
      .from(this.musicPlayer.nativeElement, {
        y: 'random(-200, 200)',
        x: 'random(-200, 200)',
        opacity: 0,
        onComplete: () =>
          (this.appStoreService.delayAnimationOnWelcomePage = 0),
      })
  }
}
