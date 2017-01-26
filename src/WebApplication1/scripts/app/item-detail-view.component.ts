import {Component, Input} from '@angular/core';
import {Item} from './item';

import {Router, ActivatedRoute} from '@angular/router';
import {ItemService} from './item.service';

@Component({
    selector: 'item-detail-view',
    template: `
       
<div *ngIf="item">
    <h2>
        <a href="javascript:void(0)" (click)="onBack()">&laquo; Back to Home</a>
    </h2>
    <div class="item-container">
        <ul class="nav nav-tabs">
            <li role="presentation">
                <a href="javascript:void(0)" (click)="onItemDetailEdit(item)">Edit</a>
            </li>
            <li role="presentation" class="active">
                <a href="javascript:void(0)">View</a>
            </li>
        </ul>
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="item-image-panel">
                    <img src="/img/item-image-sample.png" alt="{{item.Title}}" />
                    <div class="caption">Sample image with caption.</div>
                </div>
                <h3>{{item.Title}}</h3>
                <p>{{item.Description}}</p>
                <p>{{item.Text}}</p>
            </div>
        </div>
    </div>
</div>
`,
    styles: []
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

    onItemDetailEdit(item: Item) {

        this.router.navigate(['item/edit', item.Id]);
    }

    

    onBack() {
        this.router.navigate(['']);
    }
}