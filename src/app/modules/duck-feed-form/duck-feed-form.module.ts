import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuckFeedFormComponent } from './component/duck-feed-form.component';



@NgModule({
  declarations: [DuckFeedFormComponent],
  imports: [
    CommonModule
  ],
  exports: [DuckFeedFormComponent]
})
export class DuckFeedFormModule { }
