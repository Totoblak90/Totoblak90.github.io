import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('appContainer', { static: true })
  appContainer: ElementRef<HTMLDivElement>;
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;
  public showRouterOutlet: boolean = false;
  ngOnInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const tl = gsap.timeline();
    tl.from(this.appContainer.nativeElement, {
      duration: 0.5,
      opacity: 0,
    }).from('h3', {
      y: -150,
      opacity: 0,
      duration: 2,
      ease: 'power4',
      stagger: 0.1
    });
  }
}
