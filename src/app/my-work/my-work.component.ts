import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { AppStoreService } from '../services/app-store.service';
@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  @ViewChild('stackTitle', { static: true })
  stackTitle: ElementRef<HTMLTitleElement>;
  @ViewChild('stackTitleLine', { static: true })
  stackTitleLine: ElementRef<HTMLHRElement>;
  @ViewChild('frontend', { static: true }) frontEnd: ElementRef<HTMLDivElement>;
  @ViewChild('backend', { static: true }) backend: ElementRef<HTMLDivElement>;
  @ViewChild('database', { static: true }) database: ElementRef<HTMLDivElement>;
  @ViewChild('socialProfileTitle', { static: true })
  socialProfileTitle: ElementRef<HTMLTitleElement>;
  @ViewChild('socialProfileLine', { static: true })
  socialProfileLine: ElementRef<HTMLHRElement>;
  @ViewChild('github', { static: true }) github: ElementRef<HTMLDivElement>;
  @ViewChild('linkedin', { static: true }) linkedin: ElementRef<HTMLDivElement>;
  @ViewChild('cv', { static: true }) cv: ElementRef<HTMLDivElement>;
  @ViewChild('professionalExperienceTitle', { static: true })
  professionalExperienceTitle: ElementRef<HTMLTitleElement>;
  @ViewChild('professionalExperienceTitleLine', { static: true })
  professionalExperienceTitleLine: ElementRef<HTMLHRElement>;
  @ViewChild('professionalExperienceP1', { static: true })
  professionalExperienceP1: ElementRef<HTMLParagraphElement>;
  @ViewChild('professionalExperienceP2', { static: true })
  professionalExperienceP2: ElementRef<HTMLParagraphElement>;
  @ViewChild('catalogTitle', { static: true })
  catalogTitle: ElementRef<HTMLTitleElement>;
  @ViewChild('catalogTitleLine', { static: true })
  catalogTitleLine: ElementRef<HTMLHRElement>;
  @ViewChild('marken', { static: true }) marken: ElementRef<HTMLDivElement>;
  @ViewChild('dln', { static: true }) dln: ElementRef<HTMLDivElement>;
  @ViewChild('css', { static: true }) css: ElementRef<HTMLDivElement>;

  constructor(
    private appStoreService: AppStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const tl = gsap.timeline();
    tl.delay(this.appStoreService.delayAnimationOnWelcomePage);

    tl.from(
      [this.stackTitle.nativeElement, this.stackTitleLine.nativeElement],
      {
        duration: 0.5,
        opacity: 0,
      }
    )
      .from(
        [
          this.frontEnd.nativeElement,
          this.backend.nativeElement,
          this.database.nativeElement,
        ],
        {
          duration: 0.7,
          y: -200,
          x: -200,
          opacity: 0,
          stagger: 0.25,
        }
      )
      .from(
        [
          this.socialProfileTitle.nativeElement,
          this.socialProfileLine.nativeElement,
        ],
        {
          duration: 0.5,
          opacity: 0,
        }
      )
      .from(
        [
          this.github.nativeElement,
          this.linkedin.nativeElement,
          this.cv.nativeElement,
        ],

        {
          duration: 0.7,
          y: -200,
          x: 200,
          opacity: 0,
          stagger: 0.25,
        }
      )
      .from(
        [
          this.professionalExperienceTitle.nativeElement,
          this.professionalExperienceTitleLine.nativeElement,
          this.professionalExperienceP1.nativeElement,
          this.professionalExperienceP2.nativeElement,
        ],
        {
          opacity: 0,
          stagger: 0.25,
        }
      )
      .from(
        [this.catalogTitle.nativeElement, this.catalogTitleLine.nativeElement],
        {
          opacity: 0,
          duration: 0.5,
        }
      )
      .from(
        [
          this.marken.nativeElement,
          this.dln.nativeElement,
          this.css.nativeElement,
        ],
        {
          duration: 0.7,
          y: 200,
          opacity: 0,
          stagger: 0.25,
          onComplete: () =>
            (this.appStoreService.delayAnimationOnWelcomePage = 0),
        }
      );
  }
}
