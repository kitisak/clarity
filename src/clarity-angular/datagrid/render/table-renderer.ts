/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, Renderer, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {COMPUTE_WIDTH_CLASS} from "./constants";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({
    selector: "[clrDgTableWrapper]"
})
export class DatagridTableRenderer implements OnDestroy {

    constructor(private el: ElementRef, private renderer: Renderer, organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.tableMode.subscribe(on => this.tableMode(on));
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private tableMode(on: boolean) {
        this.renderer.setElementClass(this.el.nativeElement, COMPUTE_WIDTH_CLASS, on);
    }
}