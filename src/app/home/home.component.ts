import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    // Set the date we're counting down to
    var countDownDate = new Date('November 20, 2020').getTime();
    var elem = document.getElementById('demo');

    if (!elem)
      return
  
    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in an element with id="demo"
      elem.innerHTML = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
      }
    }, 100);
  }
}
