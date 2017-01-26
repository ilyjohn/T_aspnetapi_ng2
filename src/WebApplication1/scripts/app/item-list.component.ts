import {Component, OnInit, Input} from '@angular/core';
import {Item} from './item';
import {ItemService} from './item.service';

import {Router} from '@angular/router';


@Component({
    selector: 'item-list',
    template: `
    <h3>{{title}}</h3>    
    <ul class="items">
        <li *ngFor="let item of items"
        [class.selected] = "item === selectedItem"
        (click) = "onSelect(item)"
        >
            <div class="title">{{item.Title}}</div>
            <div class="description">{{item.Description}}</div>
        </li>
    </ul>
<!--
<item-detail *ngIf="selectedItem" [item]="selectedItem"></item-detail>
-->
`,
    styles: [`
    ul.items li{
        cursor: pointer;
    }

    ul.items li.selected{
        background-color: #cccccc;
    }
`]
})
export class ItemListComponent implements OnInit {
    @Input() class: string;
    title: string;
    items: Item[];
    selectedItem: Item;
    errorMessage: string;

    constructor(private itemService: ItemService,
        private router: Router
    ) { }

    ngOnInit() {
        //this.getLatest();
        var s = null;
        switch (this.class) {
            case "latest":
                this.title = "Latest items";
                s = this.itemService.getLatest();
                break;
            case "most-viewed":
                this.title = "Most viewed items";
                s = this.itemService.getMostViewed();
                break;
            case "random":
                this.title = "Random items";
                s = this.itemService.getRandom();
                break;

        }
        s.subscribe(items => this.items = items,
            error => this.errorMessage = <any>error);
    }

    //getLatest() {
    //    return this.itemService.getLatest()
    //        .subscribe(latestItems => this.items = latestItems,
    //        error => this.errorMessage = <any>error);
    //}

    onSelect(item: Item) {
        this.selectedItem = item;
        console.log("item with id " + this.selectedItem.Id + " has been selected.");
        this.router.navigate(["item/view", this.selectedItem.Id]);
    }
}