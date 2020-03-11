import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from '../members.service';
import { Member } from '../tab2.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  loadedMember: Member;

  constructor(private activatedRoute: ActivatedRoute, private membersService: MembersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {    //Observable obj subcribe to get data
      if(!paramMap.has('memberId')){
        //check thn redirect
        return;
      }

      const memberId = paramMap.get('memberId');
      this.loadedMember = this.membersService.getMember(memberId);
    });
  }

}
