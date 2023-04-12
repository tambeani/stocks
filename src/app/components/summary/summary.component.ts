import { Component,Input } from '@angular/core';

@Component({
  // Linked selector
  selector: 'summary',
  // Linked templates
  templateUrl: './summary.component.html',
  // Linked styles
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  
  /*
    This is a property which is preceeded
    by @Input. Which signifies that it
    is to be provided to the component
    by the parent component
  */

  @Input() stock: any;     
  isNegative(){
    return(this.stock && this.stock.change < 0);
  }
  isPositive(){
    return(this.stock && this.stock.change > 0);
  }
}
