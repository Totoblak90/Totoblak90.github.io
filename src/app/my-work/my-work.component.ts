import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('stackEndLine', { static: true })
  stackEndLine: ElementRef<HTMLHRElement>;
  @ViewChild('professionalExperienceTitle', { static: true })
  professionalExperienceTitle: ElementRef<HTMLTitleElement>;
  @ViewChild('professionalExperienceP1', { static: true })
  professionalExperienceP1: ElementRef<HTMLParagraphElement>;
  @ViewChild('professionalExperienceP2', { static: true })
  professionalExperienceP2: ElementRef<HTMLParagraphElement>;

  constructor(private appStoreService: AppStoreService) {}

  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const tl = gsap.timeline();
    tl.delay(this.appStoreService.delayAnimationOnWelcomePage);

    tl.from(
      [this.stackTitle.nativeElement, this.stackTitleLine.nativeElement],
      {
        duration: 1,
        opacity: 0,
      }
    )
      .from(
        [
          this.frontEnd?.nativeElement,
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
          this.stackEndLine.nativeElement,
          this.professionalExperienceTitle.nativeElement,
          this.professionalExperienceP1.nativeElement,
          this.professionalExperienceP2.nativeElement,
        ],
        {
          opacity: 0,
          stagger: 0.25,
          onComplete: () =>
            (this.appStoreService.delayAnimationOnWelcomePage = 0),
        }
      );
  }
}
