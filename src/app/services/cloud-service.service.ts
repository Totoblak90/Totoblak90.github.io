import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloudServiceService {
  files: any = [
    {
      url: '../../assets/rolling-stones-satisfaction.mp3',
      name: 'Satisfaction',
      artist: 'Rolling Stones'
    },
    {
      url: '../../assets/rolling-stones-you-cant-always-get-what-you-want.mp3',
      name: 'You cant always get what you want',
      artist: 'Rolling Stones'
    },
    {
      url: '../../assets/ed-sheeran-shape-of-you.mp3',
      name: 'Shape of you',
      artist: 'Ed Sheeran'
    },
    {
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect',
      artist: ' Ed Sheeran',
    }
  ];

  getFiles() {
    return of(this.files);
  }
}
