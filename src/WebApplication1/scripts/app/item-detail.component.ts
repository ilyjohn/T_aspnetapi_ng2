import {Component, Input} from '@angular/core';
import {Item} from './item';

import {Router, ActivatedRoute} from '@angular/router';
import {ItemService} from './item.service';

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
    //@Input("item") item: Item;
    item: Item;
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService) { }

    ngOnInit() {
        var id = +this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.itemService.get(id).subscribe(item => this.item = item);
        } else {
            console.log('invalid id: routing back to home...');
            this.router.navigate(['']);
        }
    }
}