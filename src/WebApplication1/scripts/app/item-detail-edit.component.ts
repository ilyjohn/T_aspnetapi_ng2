﻿import {Component, Input} from '@angular/core';
import {Item} from './item';

import {Router, ActivatedRoute} from '@angular/router';
import {ItemService} from './item.service';

@Component({
    selector: 'item-detail',
    template: `
         <div *ngIf="item" class="item-container">
          <div class="item-tab-menu">
            <span class="selected">Edit</span>
            <span *ngIf="item.Id != 0" (click)="onView(item)">View</span>
          </div>
          <div class="item-details">
            <div class="mode">Edit Mode</div>
            <h2>{{item.Title}}</h2>
                <ul>
                    <li>
                        <label>Title:</label>
                        <input [(ngModel)]="item.Title" placeholder="Insert the title..."/>
                    </li>
                    <li>
                        <label>Description:</label>
                        <textarea [(ngModel)]="item.Description" placeholder="Insert a suitable description..."></textarea>
                    </li>
                </ul>
                <div *ngIf="item.Id == 0" class="commands insert">
                    <input type="button" value="Save" (click)="onInsert(item)" />
                    <input type="button" value="Cancel" (click)="onBack()" />
                </div>
                <div *ngIf="item.Id != 0" class="commands update">
                    <input type="button" value="Update" (click)="onUpdate(item)" />
                    <input type="button" value="Delete" (click)="onDelete(item)" />
                    <input type="button" value="Cancel" (click)="onView(item)" />
                </div>
            </div>
        </div>
    `,
    styles: [`
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

.item-details input[type="text"] {
    display: block;
    width: 100%;
}

.item-details textarea {
    display: block;
    width: 100%;
    height: 60px;
}

.commands {
    text-align: right;
    margin: 10px 20px 10px 10px;
}
`]
})
export class ItemDetailEditComponent {
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

    onInsert(item: Item) {
        return this.itemService.add(item).subscribe(
            (data) => { this.item = data; this.router.navigate(['']) },
            (error) => { console.log(error); }
        );
    }

    onUpdate(item: Item) {
        return this.itemService.update(item).subscribe(
            (data) => { this.item = data; this.router.navigate(['']) },
            (error) => { console.log(error); });
    }

    onDelete(item: Item) {
        return this.itemService.delete(item.Id).subscribe(
            (data) => { this.item = data; this.router.navigate(['']) },
            (error) => { console.log(error); });
    }

    onView(item: Item) {
        this.router.navigate(['item/view', item.Id]);
    }

    onBack(item: Item) {
        this.router.navigate(['']);
    }
}