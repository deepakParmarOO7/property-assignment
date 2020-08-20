import { Injectable } from '@angular/core';
import { PropertyConst } from '../constants/property-const.enum';
import { DashboardModel } from '../models/dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  propertyConstants = PropertyConst;
  constructor() { }

  // For sorting on basis of property values
  sortAccToDropdown(propertyData: DashboardModel[], requestedProp: PropertyConst, isAscending: boolean): DashboardModel[] {
    let propertyDataAfterOpr = [];
    switch (+requestedProp) {
      case this.propertyConstants.NAME:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          if (p1.name > p2.name) { return 1; }
          else if (p1.name === p2.name) { return 0; }
          else { return -1; }
        });
        break;

      case this.propertyConstants.BUILDING_NAME:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          if (p1.buildingName > p2.buildingName) { return 1; }
          else if (p1.buildingName === p2.buildingName) { return 0; }
          else { return -1; }
        });
        break;

      case this.propertyConstants.TOWER_NAME:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          if (p1.buildingTower > p2.buildingTower) { return 1; }
          else if (p1.buildingTower === p2.buildingTower) { return 0; }
          else { return -1; }
        });
        break;

      case this.propertyConstants.PROPERTY_TYPE:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          if (p1.propertyType > p2.propertyType) { return 1; }
          else if (p1.propertyType === p2.propertyType) { return 0; }
          else { return -1; }
        });
        break;

      case this.propertyConstants.CONFIGURATION_NAME:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          if (p1.configuration.name > p2.configuration.name) { return 1; }
          else if (p1.configuration.name === p2.configuration.name) { return 0; }
          else { return -1; }
        });
        break;

      case this.propertyConstants.MIN_PRICE:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          return p1.minPrice - p2.minPrice;
        });
        break;

      case this.propertyConstants.BEDROOM:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          return +p1.configuration.bedroom - +p2.configuration.bedroom;
        });
        break;

      case this.propertyConstants.BATHROOM:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          return +p1.configuration.bathroom - +p2.configuration.bathroom;
        });
        break;

      case this.propertyConstants.HALFBATHROOM:
        propertyDataAfterOpr = propertyData.sort((p1: DashboardModel, p2: DashboardModel) => {
          return +p1.configuration.halfBathroom - +p2.configuration.halfBathroom;
        });
        break;

    }

    return isAscending ? propertyDataAfterOpr : propertyDataAfterOpr.reverse();
  }

  // For searching the data.
  searchForReqData(data: DashboardModel[], searchdata: string) {
    const originalArr = Object.assign(data);
    if (!searchdata) {
      return originalArr;
    }

    return data.filter(values =>
      Object.keys(values).some(index =>
        values[index] != null &&
        values[index]
          .toString()
          .toLowerCase()
          .includes(searchdata.toLowerCase())
      )
    );


  }

  // Filtering the min price.
  getGreaterPropertiesThanMinPrice(data: DashboardModel[], price: number) {
    if (!price) {
      return data;
    }
    return data.filter(
      x => x.minPrice > price
    );

  }

}
