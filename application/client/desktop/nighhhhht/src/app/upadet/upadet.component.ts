import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UpadetService } from './upadet.service';



@Component({
  selector: 'app-upadet',
  templateUrl: './upadet.component.html',
  styleUrls: ['./upadet.component.scss'],
})
export class UpadetComponent implements OnInit {

queryId: string;
school = {
   name: '',
   email: ''
};

  constructor(
private activatedRoute: ActivatedRoute,
private upadetService: UpadetService
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpUpdate();
});
this.GpGetNounById();
  }

GpGetNounById() {
 this.upadetService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.school = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpUpdate() {
 this.upadetService.GpUpdate(this.school)
  .subscribe(
    data => {
 this.school.name = '';

 this.school.email = '';

       console.log('data updated successfully --- ', data);
    },
    error => {
       console.log('cannot able to update the data --- ', error);
    }
    );
}

}