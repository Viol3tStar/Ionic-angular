import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { Member } from './tab2.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  members: Member[];
  constructor(private membersService: MembersService) {}

  ngOnInit(){
    this.members = this.membersService.getAllMembers();
  }
}
