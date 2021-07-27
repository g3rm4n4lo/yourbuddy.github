import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  categories =['work','personal','home','school']
  taskName
  taskDate
  taskPriority
  taskCategory

    static Home: HomePage;
    
  taskObject
    constructor(public modalCtrl:ModalController,public navCtrl: NavController,private http: HttpClient,private route: Router) { 
    }
  
    ngOnInit() {
    }
    async dismiss(){
      await this.modalCtrl.dismiss(this.taskObject)
      
    }
    selectedCategory(index){
      this.taskCategory=this.categories[index]
    }
  AddTask(){
this.taskObject=({itemName:this.taskName,
  itemDueDate:this.taskDate,
  itemPriority:this.taskPriority,
itemCategory:this.taskCategory})
this.dismiss()
  }
      
    }
  