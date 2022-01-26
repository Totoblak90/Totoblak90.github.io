import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StreamState } from 'src/app/interfaces/stream-state.interface';
import { AudioService } from '../../services/audio-player.service';
import { CloudServiceService } from '../../services/cloud-service.service';
import { AppStoreService } from '../../services/app-store.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements AfterViewInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};

  constructor(
    private audioService: AudioService,
    private cloudService: CloudServiceService,
    private appStoreService: AppStoreService
  ) {
    this.cloudService.getFiles().subscribe((files) => {
      this.files = files;
    });

    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngAfterViewInit(): void {
    // if (this.appStoreService.isFirstLoad) {
    //   this.openFile(this.files[0], 0);
    //   this.play();
    //   this.appStoreService.isFirstLoad = false;
    // }
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe();
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}
