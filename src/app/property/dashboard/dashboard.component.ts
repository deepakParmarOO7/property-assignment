import { Component, OnInit } from '@angular/core';
import { DashboardModel } from '../models/dashboard-model';
import { DataProviderService } from '../services/data-provider.service';
import { UtilityService } from '../services/utility.service';
import { PropertyConst } from '../constants/property-const.enum';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reqProperties: DashboardModel[] = [];
  originalPropertiesArr: DashboardModel[] = [];
  isAscending = true;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private readonly dataService: DataProviderService, private readonly utilityService: UtilityService) { }

  ngOnInit(): void {

    this.dropdownList = [
      { config_id: 1, config: '2 bathroom' },
      { config_id: 2, config: '3 bathroom' },
      { config_id: 3, config: '2 bedroom' },
      { config_id: 4, config: '3 bedroom' },
      { config_id: 5, config: '1 halfBathroom' },
      { config_id: 6, config: '0 halfBathroom' },
      { config_id: 7, config: '2BD-2BA' },
      { config_id: 8, config: '2BD-2BA-1/2BA' },
      { config_id: 9, config: '3BD-3BA' },
      { config_id: 10, config: '3BD-3BA-1/2BA' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'config_id',
      textField: 'config',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.dataService.getPropertyData().subscribe(
      (data: []) => {
        console.log(data);
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

  onItemSelect(item: any) {
    debugger
    let customObj: { bathroom: any; bedroom: any; halfBathroom: any; name: any; };
    const bathroomArr = [];
    const bedroomArr = [];
    const halfBathroomArr = [];
    const configNameArr = [];
    this.selectedItems.forEach((element: {config_id , config}, index) => {
      if (element.config_id <= 6) {
        const tempArr = element.config.split(' ');
        if (tempArr[1] === 'bathroom') {
            bathroomArr.push(+tempArr[0]);
        }else if (tempArr[1] === 'bedroom') {
          bedroomArr.push(+tempArr[0]);
        }else {
          halfBathroomArr.push(+tempArr[0]);
        }
      }else {configNameArr.push(element.config);
      }
    });

    customObj = {
        bedroom: bedroomArr,
        bathroom: bathroomArr,
        halfBathroom: halfBathroomArr,
        name: configNameArr
      }
    this.reqProperties = this.utilityService.filterAccToRequirement(this.originalPropertiesArr ,
       customObj);
  }
onSelectAll(items: any) {
    console.log(items);
  }

onDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);

  }

triggerSearch(searchValue: string) {
    const tempArray = this.utilityService.searchForReqData(this.originalPropertiesArr, searchValue);
    this.reqProperties = tempArray;

  }

onPropChange() {
    this.isAscending = !this.isAscending;
    this.reqProperties.reverse();
  }

sortByProperty(val: number) {
    this.reqProperties = this.utilityService.sortAccToDropdown(this.reqProperties, val, this.isAscending);
  }

getPropertiesGreaterThanMinPrice(value: number) {
    this.reqProperties = this.utilityService.getGreaterPropertiesThanMinPrice(this.originalPropertiesArr , value);
  }

}
