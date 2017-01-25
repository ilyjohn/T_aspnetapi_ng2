import {Component, Input} from '@angular/core';
import {Item} from './item';

@Component({
    selector: 'item-detail',
    template: `
<div *ngIf="item" class="item-detail">
    <h2>{{item.Title}} - Detail View</h2>
    <ul>
        <li>
            <label>Title: </label>
            <input [ngModel]="item.Title" placeholder="Insert the title..."/>
        </li>
        <li>
            <label>Description: </label>
            <textarea [(ngModel)]="item.Description" placeholder="Insert the description..."></textarea>
        </li>
    </ul>
</div>
`,
    styles: [`
.item-detail{
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid black;
    background-color: #dddddd;
    width: 200px;
}
.item-detail *{
    vertical-align: middle;
}
.item-detail ul li{
    padding: 5px 0;
}
`]
})
export class ItemDetailComponent {
    @Input("item") item: Item;
}