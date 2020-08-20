import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurePipe } from './secure.pipe';


@NgModule({
  declarations: [SecurePipe],
  imports: [
    CommonModule
  ],
  exports: [SecurePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
