import {
  Component,
  OnInit,
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
