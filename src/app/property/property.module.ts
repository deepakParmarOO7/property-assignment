import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyContainerComponent } from './dashboard/property-container/property-container.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataRequestInterceptor } from '../core/data-request.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, PropertyContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DataRequestInterceptor, multi: true },],
  exports: [DashboardComponent, PropertyContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyModule { }
