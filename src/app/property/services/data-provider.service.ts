import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardModel } from '../models/dashboard-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private readonly http: HttpClient) { }

  getPropertyData(): Observable<DashboardModel[]> {
    return this.http.get<DashboardModel>(`assets/properties.json`).pipe(
      map((ele: any) => {
        return ele.data;
      })
    );
  }

}
