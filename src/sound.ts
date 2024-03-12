import { Component } from '@angular/core';
// import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './catalog.component.html',
})
export class CatalogViewComponent {
  playAudio() {
    let audio = new Audio();
    audio.src =
      'https://soundcloud.com/federico-golia/cash-machine-sound?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

    audio.load();
    audio.play();
    this.playAudio();
  }
}
