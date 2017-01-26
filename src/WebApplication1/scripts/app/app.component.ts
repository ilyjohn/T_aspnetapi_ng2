import {Component} from '@angular/core';

@Component({
    selector: "appholder",
    template: `
<div class="menu">
    <a class="home" [routerLink]="['']">Home</a>
    | <a class="about" [routerLink]="['about']">About</a>
    | <a class="login" [routerLink]="['login']">Log in</a>
    | <a class="add" [routerLink]="['item/edit',0]">Add New</a>
</div>
<router-outlet></router-outlet>

`, styles: [`
`            
    ]
})
export class AppComponent {
    title = "ap";
}