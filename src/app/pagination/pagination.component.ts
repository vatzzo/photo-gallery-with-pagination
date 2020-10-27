import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() images: []; 
  @Input() currentPage: number;

  constructor() { }

  ngOnInit(): void {
  }

  priClass = 'pag__item';
  secClass = 'pag__item--active';
  prevClass = 'pag__item--previous';
  nextClass = 'pag__item--next';

  removeClass(element: any, className: string) {
    for(let i = 0; i <= element.parentElement.children.length-1; i++) {
      element.parentElement.children[i].classList.remove(className);
    }
  }

  onClickPag(element: any) {
    // Add active class after clicking - it is not needed anymore thanks to class directive
    // if(!element.classList.contains(this.secClass) && (!element.classList.contains(this.prevClass) && !element.classList.contains(this.nextClass))) {
    //   this.removeClass(element, this.secClass);
    //   element.classList.add(this.secClass);
    // }

    // Next functionality
    // let el = 0;
    // if(element.classList.contains(this.nextClass)) {
    //   for(let i = 0; i <= element.parentElement.children.length-1; i++) {
    //     if(element.parentElement.children[i].classList.contains(this.secClass)) {
    //       el = i + 1;
    //     }
    //   }
    //   if(!element.parentElement.children[el].classList.contains(this.nextClass) && !element.parentElement.children[el].classList.contains(this.prevClass)) {
    //     this.removeClass(element, this.secClass);
    //     element.parentElement.children[el].classList.add(this.secClass)
    //   }
    // }

    // Previous functionality
    // el = 0;
    // if(element.classList.contains(this.prevClass)) {
    //   for(let i = 0; i <= element.parentElement.children.length-1; i++) {
    //     if(element.parentElement.children[i].classList.contains(this.secClass)) {
    //       el = i - 1;
    //     }
    //   }
    //   if(!element.parentElement.children[el].classList.contains(this.prevClass) && !element.parentElement.children[el].classList.contains(this.nextClass)) {
    //     this.removeClass(element, this.secClass);
    //     element.parentElement.children[el].classList.add(this.secClass)
    //   }
    // }
    console.log(this.currentPage);
  }
}
