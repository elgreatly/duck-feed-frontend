import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuckFeedFormComponent } from './component/duck-feed-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DuckFeedFormComponent, NgbTimepicker],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DuckFeedFormComponent]
})
export class DuckFeedFormModule { }
