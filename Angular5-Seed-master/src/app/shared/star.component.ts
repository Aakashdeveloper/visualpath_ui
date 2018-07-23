import { Component, OnChanges, Input,
            Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: Number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onStar(): void {
        this.ratingClicked.emit(` the rating clicked is ${this.rating}`);
    }
}


/*
var a = 10
var b = "my age is "+a;
var b = `my age is ${a}`

function add(a,b){
    return a+b
}

add(9,8)
*/

