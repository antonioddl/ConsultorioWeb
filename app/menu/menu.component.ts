import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'app/menu/template/menu.component.html',
    styleUrls: ['app/menu/template/menu.component.css']
})

export class MenuComponent {
    constructor() {
    }

    doctoresShow = false;
}