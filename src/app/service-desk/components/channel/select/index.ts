import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Channel } from '../../../models';
import { ChannelService } from '../services/service';

@Component({
  selector: 'app-channel-select',
  templateUrl: 'index.html'
})
export class ChannelSelectComponent extends BaseSelectComponent<Channel, ChannelService> {

  constructor(route: ActivatedRoute, service: ChannelService) { 
    super(route, service);
  }
}