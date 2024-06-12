import { Component, OnInit } from '@angular/core';
import { ApiService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response: any) => {
        console.log('Response from API:', response);
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
