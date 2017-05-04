import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { NgxDataTableModule } from '../components/ng-table-module';

import { TableDemoComponent } from './components/table/table-demo';
import { TableSectionComponent } from './components/table-section';

import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent,
    TableDemoComponent,
    TableSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDataTableModule,
    PaginationModule,
    TabsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})

export class NgxDataTableDemoModule {
}
