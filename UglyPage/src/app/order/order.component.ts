import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private toastr:ToastrService, private router:Router) { }
  
  ngOnInit(): void {
  }

  ShowSuccess(){
    this.toastr.success('Revise su correo electrónico', 'Orden de envío generada');
  }

  todo: any[] = [
    {
      productName: 'Arándanos',
      price: 5.96
    },
    {
      productName: 'Uva',
      price: 4.99
    },
    {
      productName: 'Banano',
      price: 7.98
    },
    {
      productName: 'Kiwi',
      price: 2.89
    },
    {
      productName: 'Naranja',
      price: 10.12
    },
    {
      productName: 'Mango',
      price: 5.93
    },
    {
      productName: 'Frambuesa',
      price: 6.96
    }
  ];

  done: any[] = [
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
