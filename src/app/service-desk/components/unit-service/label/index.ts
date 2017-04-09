import { Component, Input } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { UnitService } from '../../../models';
import { UnitServiceService } from '../services/service';

@Component({
  selector: 'app-unit-service-label',
  templateUrl: 'index.html'
})
export class UnitServiceLabelComponent {

  private data: UnitService = ({} as UnitService);

  @Input('serviceId') 
  set serviceId (val) {
    this.refresh(val);
  }

  constructor(private service: UnitServiceService) { 
  }

  refresh(value) {
    if (!value) return;
    this.service.getUnit(value).subscribe(r => this.data = r, r => this.data = {} as UnitService);
  }

}
