﻿import {Component, Input} from '@angular/core';
import {Item} from './item';

import {Router, ActivatedRoute} from '@angular/router';
import {ItemService} from './item.service';

@Component({
    selector: 'item-detail',
    template: `
        <div *ngIf="item" class="item-container">
          <div class="item-tab-menu">
            <span (click)="onEdit(item)">Edit</span>
            <span class="selected">View</span>
          </div>
          <div class="item-details">
            <div class="mode">Display Mode</div>
            <h2>{{item.Title}}</h2>
            <p>{{item.Description}}</p>
               <div class="commands">     <input type="button" value="Cancel" (click)="onBack()" /></div>
          </div>
        </div>
`,
    styles: [`
.commands {
    text-align: right;
    margin: 10px 20px 10px 10px;
}
.item-container {  
    width: 600px;
}

.item-tab-menu {
    margin-right: 30px;
}

.item-tab-menu span {
    background-color: #dddddd;
    border: 1px solid #666666;
    border-bottom: 0;
    cursor: pointer;
    display: block;
    float: right;
    margin: 0 0 -1px 5px;
    padding: 5px 10px 4px 10px;
    text-align: center;
    width: 60px;
}

.item-tab-menu span.selected {
    background-color: #eeeeee;
    cursor: auto;
    font-weight: bold;
    padding-bottom: 5px;
}

.item-details {
    background-color: #eeeeee;
    border: 1px solid black;
    clear: both;
    margin: 0;
    padding: 5px 10px;
}

.item-details * {
    vertical-align: middle;
}

.item-details .mode {
    font-size: 0.8em;
    color: #777777;
}

.item-details ul li {
    padding: 5px 0;
}
`]
})
export class ItemDetailViewComponent {
    //@Input("item") item: Item;
    item: Item;
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService) { }

    ngOnInit() {
        var id = +this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.itemService.get(id).subscribe(item => this.item = item);
        } else if (id === 0) {
            this.item = new Item(0, "New Item", null);
        }
        else {
            console.log('invalid id: routing back to home...');
            this.router.navigate(['']);
        }
    }

    onEdit(item: Item) {

        this.router.navigate(['item/edit', item.Id]);
    }

    

    onBack() {
        this.router.navigate(['']);
    }
}