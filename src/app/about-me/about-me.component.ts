import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { AppStoreService } from '../services/app-store.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  @ViewChild('title', { static: true }) title: ElementRef<HTMLTitleElement>;
  @ViewChild('titleLine', { static: true })
  titleLine: ElementRef<HTMLHtmlElement>;
  @ViewChild('family', { static: true }) family: ElementRef<HTMLDivElement>;
  @ViewChild('familyLine', { static: true })
  familyLine: ElementRef<HTMLHRElement>;
  @ViewChild('sports', { static: true }) sports: ElementRef<HTMLDivElement>;
  @ViewChild('sportsLine', { static: true })
  sportsLine: ElementRef<HTMLHRElement>;
  @ViewChild('animals', { static: true }) animals: ElementRef<HTMLDivElement>;
  @ViewChild('animalsLine', { static: true })
  animalsLine: ElementRef<HTMLHRElement>;
  @ViewChild('music', { static: true }) music: ElementRef<HTMLTitleElement>;

  constructor(private appStoreService: AppStoreService) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const animationLeft: gsap.TweenVars = {
      duration: 1,
      x: '-100%',
      opacity: 0,
    };
    const animationRight: gsap.TweenVars = {
      duration: 1,
      x: '100%',
      opacity: 0,
    };

    const tl = gsap.timeline();
    tl.delay(this.appStoreService.delayAnimationOnWelcomePage);
    tl.from([this.title.nativeElement, this.titleLine.nativeElement], {
      opacity: 0,
      duration: 1,
    })
      .from(
        [this.family.nativeElement, this.familyLine.nativeElement],
        animationLeft
      )
      .from(
        [this.sports.nativeElement, this.sportsLine.nativeElement],
        animationRight
      )
      .from(
        [this.animals.nativeElement, this.animalsLine.nativeElement],
        animationLeft
      )
      .from(this.music.nativeElement, {
        duration: 1,
        opacity: 0,
        onComplete: () =>
          (this.appStoreService.delayAnimationOnWelcomePage = 0),
      });
  }
}
