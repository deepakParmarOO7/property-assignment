import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyConst } from '../constants/property-const.enum';
import { DashboardModel } from '../models/dashboard-model';
import { DataProviderService } from '../services/data-provider.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  reqProperties: DashboardModel[] = [];
  originalPropertiesArr: DashboardModel[] = [];
  isAscending = true;
  mySubscription: Subscription;

  constructor(private readonly dataService: DataProviderService, private readonly utilityService: UtilityService) { }

  ngOnInit(): void {

    this.mySubscription = this.dataService.getPropertyData().subscribe(
      (data: []) => {
        data.forEach((element: any) => {
          const modifiedObj = {
            name: element.name,
            buildingName: element.building.name,
            buildingTower: element.building_towers.tower_name,
            propertyType: element.property_type.name,
            configuration: {
              name: element.configuration.name,
              bathroom: element.configuration.bathroom,
              bedroom: element.configuration.bedroom,
              halfBathroom: element.configuration.half_bathroom
            },
            minPrice: element.min_price,
            description: element.description,
            lastUpdated: new Date(element.updated_at).toLocaleDateString(),
            image: element.image
          } as DashboardModel;

          this.reqProperties.push(modifiedObj);

        });
        this.originalPropertiesArr = [... this.reqProperties];
        this.utilityService.sortAccToDropdown(this.reqProperties, PropertyConst.NAME, this.isAscending);

      }
    );

  }

  triggerSearch(searchValue: string): void {
    const tempArray = this.utilityService.searchForReqData(this.originalPropertiesArr, searchValue);
    this.reqProperties = tempArray;

  }

  onPropChange(): void {
    this.isAscending = !this.isAscending;
    this.reqProperties.reverse();
  }

  sortByProperty(val: number): void {
    this.reqProperties = this.utilityService.sortAccToDropdown(this.reqProperties, val, this.isAscending);
  }

  getPropertiesGreaterThanMinPrice(value: number): void {
    this.reqProperties = this.utilityService.getGreaterPropertiesThanMinPrice(this.originalPropertiesArr, value);
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}
