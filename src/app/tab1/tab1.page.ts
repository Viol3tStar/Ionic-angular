import { Component } from '@angular/core';

import {Tab1} from './tab1.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tab1s: Tab1[] = [
    {
      title: 'Is Earth is flat?!',
      imageUrl: '../../asests/images/eart-wallpaper.jpg'
    }
  ]
  slider: any = [];
  slideOpts = {
    autoplay:true,
    speed: 400,
    loop:true
  }

  constructor() {
    this.slider = 
    [
      {
        image:'../../assets/images/earth-wallpaper.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'

      },
      {
        image:'../../assets/images/satorini-banner.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'

      },
      {
        image:'../../assets/images/faith-wallpaper.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'

      }
    ]
  }

}
