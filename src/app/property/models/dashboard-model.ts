export interface DashboardModel {
    name: string;
    buildingName: {name: string};
    buildingTower: {towerName: string};
    propertyType: {name: string};
    configuration: {
        name: string,
        bathroom: string,
        bedroom: string,
        halfBathroom: string
    };
    minPrice: number;
    description: string;
    lastUpdated: string;
    image: string;
}
