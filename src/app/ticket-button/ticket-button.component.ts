import { 
  Component,
  ViewEncapsulation, 
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ticket-button',
  templateUrl: './ticket-button.component.html',
  styleUrls: ['./ticket-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketButtonComponent {
  
  @Input('data-text') text: string;
  @Input('data-href') href: string;
  button: object;

  constructor() {
  
  }

}
