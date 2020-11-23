import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class UpadetService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpGetNounById(schoolId: string): Observable<any> {
 return this.http.get(this.sharedService.DESKTOP_API + `/school/${schoolId}`);
}
GpUpdate(school: any): Observable<any> {
 return this.http.put(this.sharedService.DESKTOP_API + '/school', school);
}

}