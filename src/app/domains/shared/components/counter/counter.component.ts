import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input({ required: true }) duration = 0
  @Input({ required: true }) message = ''

  constructor() {
    //NO ASYNC
    //Before render
    console.log("Constructor")
    console.log("-".repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    //Before and during render
    console.log("ngOnChanges")
    console.log("-".repeat(10))
    console.log(changes)

    const duration = changes['duration']
    console.log(duration)
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    // after render
    //una vez
    //async, then, subs
    console.log("ngOnInit")
    console.log("-".repeat(10))
    console.log("Duration => " + this.duration)
    console.log("Message => " + this.message)
  }

  ngAfterViewInit() {
    //After render
    //Hijos ya fueron renderizados
    console.log("ngAfterViewInit")
    console.log("-".repeat(10))
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
    console.log("-".repeat(10))
  }

  doSomething() {
    console.log("change duration")
  }

}
