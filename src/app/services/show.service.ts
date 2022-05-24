import { Injectable } from '@angular/core';
import { Show } from '../models/show';

import Service from '../services/services.service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private service: Service) {}

  registerShow(data: Show) {
    return this.service.postData('shows', data);
  }

  listShows(){
    return this.service.getData('shows');
  }

  deleteShow(id: number) {
    return this.service.deleteData('shows', id);
  }

  updateShow(data: Show, newData: Show) {
    return this.service.putData('shows', newData, data.id);
  }

}
