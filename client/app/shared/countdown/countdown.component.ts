import { 
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './countdown.component.html',
  styleUrls: [
    './countdown.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class CountDownComponent {
  @Input() units: any;
  @Input() end: any;
  @Input() displayString: String = '';
  @Input() text: any;
  @Input() divider: any;
  @Input() showZero: Boolean = false;
  @Output() reached: EventEmitter<Date> = new EventEmitter();
  display: any = [];
  displayNumbers: any = [];
  wasReached: Boolean = false;
  $r = {};

  constructor() {
    setInterval(() => this._displayString(), 100);
  }

  _displayString() {

    if (this.wasReached)
      return;

    if (typeof this.units === 'string') {
      this.units = this.units.split('|');
    }

    let givenDate: any = new Date(this.end);
    let now: any = new Date();
    let dateDifference: any = givenDate - now;

    if ((dateDifference < 100 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
      this.wasReached = true;
      this.reached.next(now);
    }

    let lastUnit = this.units[this.units.length - 1],
      unitConstantForMillisecs = {
        year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
        month: ((1000 * 60 * 60 * 24 * 7) * 4),
        weeks: (1000 * 60 * 60 * 24 * 7),
        days: (1000 * 60 * 60 * 24),
        hours: (1000 * 60 * 60),
        minutes: (1000 * 60),
        seconds: 1000
      },
      unitsLeft = {},
      returnText = '',
      returnNumbers = '',
      totalMillisecsLeft = dateDifference,
      i,
      unit: any;

    for (i in this.units) {
      if (this.units.hasOwnProperty(i)) {

        unit = this.units[i].trim();
        if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
          //$interval.cancel(countDownInterval);
          throw new Error('Cannot repeat unit: ' + unit);

        }
        if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
          throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
        }

        // If it was reached, everything is zero
        unitsLeft[unit] = (this.wasReached) ? 0 : totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

        if (lastUnit === unit) {
          unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
        } else {
          unitsLeft[unit] = Math.floor(unitsLeft[unit]);
        }

        totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
        unitConstantForMillisecs[unit.toLowerCase()] = false;

        // If it's less than 0, round to 0
        unitsLeft[unit] = (unitsLeft[unit] > 0) ? unitsLeft[unit] : 0;

        returnNumbers += ' ' + unitsLeft[unit] + ' | ';
        returnText += ' ' + unit;
      }
    }

    if (this.text === null || !this.text) {
      this.text = {
        Year: 'Year',
        Month: 'Month',
        Weeks: 'Weeks',
        Days: 'Days',
        Hours: 'Hours',
        Minutes: 'Minutes',
        Seconds: 'Seconds',
        MilliSeconds: 'Milliseconds'
      };
    }

    this.displayString = returnText
      .replace('Year', this.text.Year + ' | ')
      .replace('Month', this.text.Month + ' | ')
      .replace('Weeks', this.text.Weeks + ' | ')
      .replace('Days', this.text.Days + ' | ')
      .replace('Hours', this.text.Hours + ' | ')
      .replace('Minutes', this.text.Minutes + ' | ')
      .replace('Seconds', this.text.Seconds);

    this.displayNumbers = returnNumbers.split('|');
    this.display = this.displayString.split('|');
  }
  // createCanvas() {
  //   this.$r = {
  //     countdown_to: "10/10/2018",
  //     rings: {
  //       'DAYS': { 
  //         s: 86400000, // mseconds in a day,
  //         max: 365
  //       },
  //       'HOURS': {
  //         s: 3600000, // mseconds per hour,
  //         max: 24
  //       },
  //       'MINUTES': {
  //         s: 60000, // mseconds per minute
  //         max: 60
  //       },
  //       'SECONDS': {
  //         s: 1000,
  //         max: 60
  //       },
  //       'MICROSEC': {
  //         s: 10,
  //         max: 100
  //       }
  //     },
  //     cvs: null,
  //     ctx: null,
  //     r_count: 5,
  //     r_spacing: 10, // px
  //     r_size: 100, // px
  //     r_thickness: 5, // px
  //     update_interval: 11 // ms
  //   };
  //   this.$r.cvs = document.createElement('canvas'); 
  //   this.$r.ctx = null;  
  //   this.$r.size = { 
  //     w: (this.$r.r_size + this.$r.r_thickness) * this.$r.r_count + (this.$r.r_spacing*(this.$r.r_count-1)), 
  //     h: (this.$r.r_size + this.$r.r_thickness) 
  //   };   

  //   this.$r.cvs.setAttribute('width',this.$r.size.w);           
  //   this.$r.cvs.setAttribute('height',this.$r.size.h);
  //   this.$r.ctx = this.$r.cvs.getContext('2d');
    
  //   $(".countdownwrap").append(this.$r.cvs);
    
  //   this.$r.cvs = $(this.$r.cvs);    
  //   this.$r.ctx.textAlign = 'center';
  //   this.$r.actual_size = this.$r.r_size + this.$r.r_thickness;
  //   this.$r.countdown_to_time = new Date(this.$r.countdown_to).getTime();
  //   this.$r.cvs.css({ width: this.$r.size.w+"px", height: this.$r.size.h+"px" });
  //   this.$r.go();
  // }    
  // go() {
  //   var idx = 0;
  //   this.$r.time = (new Date().getTime()) - this.$r.countdown_to_time;
    
  //   for(var r_key in this.$r.rings) {
  //     this.$r.unit(idx++, r_key,this.$r.rings[r_key]);      
  //   }
  //   setTimeout(this.$r.go, this.$r.update_interval);
  // }
  // unit(idx,label,ring) {
  //   var x,y, value, ring_secs = ring.s;
  //   value = parseFloat(this.$r.time/ring_secs);
  //   this.$r.time-=Math.round(parseInt(value)) * ring_secs;
  //   value = Math.abs(value);
    
  //   x = (this.$r.r_size*.5 + this.$r.r_thickness*.5);
  //   x +=+(idx*(this.$r.r_size+this.$r.r_spacing+this.$r.r_thickness));
  //   y = this.$r.r_size*.5;
  //   y += this.$r.r_thickness*.5;

    
  //   // calculate arc end angle
  //   var degrees = 360-(value / ring.max) * 360.0;
  //   var endAngle = degrees * (Math.PI / 180);
    
  //   this.$r.ctx.save();

  //   this.$r.ctx.translate(x,y);
  //   this.$r.ctx.clearRect(this.$r.actual_size*-0.5,this.$r.actual_size*-0.5,this.$r.actual_size,this.$r.actual_size);

  //   // first circle
  //   this.$r.ctx.strokeStyle = "rgba(128,128,128,0.2)";
  //   this.$r.ctx.beginPath();
  //   this.$r.ctx.arc(0,0,this.$r.r_size/2,0,2 * Math.PI, 2);
  //   this.$r.ctx.lineWidth =this.$r.r_thickness;
  //   this.$r.ctx.stroke();
    
  //   // second circle
  //   this.$r.ctx.strokeStyle = "rgba(253, 128, 1, 0.9)";
  //   this.$r.ctx.beginPath();
  //   this.$r.ctx.arc(0,0,this.$r.r_size/2,0,endAngle, 1);
  //   this.$r.ctx.lineWidth =this.$r.r_thickness;
  //   this.$r.ctx.stroke();
    
  //   // label
  //   this.$r.ctx.fillStyle = "#000000";
    
  //   this.$r.ctx.font = '12px Helvetica';
  //   this.$r.ctx.fillText(label, 0, 23);
  //   this.$r.ctx.fillText(label, 0, 23);   
    
  //   this.$r.ctx.font = 'bold 40px Helvetica';
  //   this.$r.ctx.fillText(Math.floor(value), 0, 10);
    
  //   this.$r.ctx.restore();
  // }
}