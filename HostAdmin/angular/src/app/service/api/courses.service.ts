import { Injectable } from '@angular/core';
import { ApiClientService } from '../common/api-client.service';

const routes = {
  
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apiClient: ApiClientService) { }

}
