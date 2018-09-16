import {Component} from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  prevScrollpos = window.pageYOffset;

  constructor() {

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById('mat-toolbar').style.top = '0';
      } else {
        document.getElementById('mat-toolbar').style.top = '-70px';
      }
      this.prevScrollpos = currentScrollPos;
    };
  }
}
