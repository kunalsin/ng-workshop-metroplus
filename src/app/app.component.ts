import { Component } from '@angular/core';
import { DataService } from './data.service';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'My Tiny Library App';
}
