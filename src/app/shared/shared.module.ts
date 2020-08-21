import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurePipe } from './secure.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [SecurePipe],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [SecurePipe, NgMultiSelectDropDownModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
