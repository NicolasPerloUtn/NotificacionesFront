import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
