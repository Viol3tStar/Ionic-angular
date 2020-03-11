import { Injectable } from '@angular/core';

import { Member } from './tab2.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members: Member[] = [
    {
      id : '1',
      title : 'Johson Tan',
      imageUrl : '../../assets/images/satorini-banner.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'
    },
    {
      id : '2',
      title : 'Jackson Leong',
      imageUrl : '../../assets/images/faith-wallpaper.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'

    },
    {
      id : '3',
      title : 'Vemen Ng',
      imageUrl : '../../assets/images/earth-wallpaper.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veritatis. Id, molestias commodi rem quisquam rerum amet cumque architecto quas fugiat aliquam perspiciatis esse neque, alias impedit accusamus, placeat iure.'

    }
  ];

  constructor() {}
    
    getAllMembers(){
      return [...this.members];
    }

    getMember(memberId: string) {
      return {
        ...this.members.find(member => {
        return member.id === memberId;
        })
      };
    }
}
