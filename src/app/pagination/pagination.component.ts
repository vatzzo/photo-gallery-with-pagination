import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  priClass = 'pag__item';
  secClass = 'pag__item--active';
  

  onClickPag(element: any) {
    if(!element.classList.contains(this.secClass)) {
      for(let i = 0; i <= element.parentElement.children.length-1; i++) {
        element.parentElement.children[i].classList.remove(this.secClass);
      }
      element.classList.add(this.secClass);
    }
  } 

}
