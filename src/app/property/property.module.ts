import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DataRequestInterceptor } from '../core/data-request.interceptor';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyContainerComponent } from './dashboard/property-container/property-container.component';


@NgModule({
  declarations: [DashboardComponent, PropertyContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DataRequestInterceptor, multi: true },],
  exports: [DashboardComponent, PropertyContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyModule { }
