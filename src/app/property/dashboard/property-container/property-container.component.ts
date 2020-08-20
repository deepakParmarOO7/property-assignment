import { Component, OnInit, Input } from '@angular/core';
import { DashboardModel } from '../../models/dashboard-model';

@Component({
  selector: 'app-property-container',
  templateUrl: './property-container.component.html',
  styleUrls: ['./property-container.component.scss']
})
export class PropertyContainerComponent implements OnInit {

  @Input() propertyData: DashboardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
