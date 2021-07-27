import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelpPage } from '../help/help.page';
import { JokePagePage } from '../joke-page/joke-page.page';
import { SettingPage } from '../setting/setting.page';
import { ToDoPage } from '../to-do/to-do.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage  {
 
todoList=[{
    itemName: 'Demo:Final Project',
    itemDueDate: '23-07-21',
    itemPriority: 'high',
    itemCategory: 'School'
  },
  {
    itemName: 'Basketball Training',
    itemDueDate: '23-09-21',
    itemPriority: 'low',
    itemCategory: 'personal'
  },
  {
    itemName: 'Family Reunion',
    itemDueDate: '23-12-21',
    itemPriority: 'middle',
    itemCategory: 'personal'
  }]
  


constructor (public modalCtrl:ModalController,) {}

  async dismiss(){
    await this.modalCtrl.dismiss()
    
  }
async TodoPage(){
const modal =await this.modalCtrl.create({
component: ToDoPage})
modal.onDidDismiss().then(newTaskObj=>{
console.log(newTaskObj.data);
this.todoList.push(newTaskObj.data)
})

 return await modal.present()
}
delete(index){
this.todoList.splice(index,1)}
done(index){
this.todoList.splice(index,1)
}

async Setting(){
const modal =await this.modalCtrl.create({
component: SettingPage
})
return await modal.present()}

async Help(){
const modal =await this.modalCtrl.create({
component: HelpPage
})
return await modal.present()}

async JokePage(){
  const modal =await this.modalCtrl.create({
    component: JokePagePage
  })
  return await modal.present()}
  

doRefresh(event: { target: { complete: () => void; }; }) {
console.log('Begin async operation');
setTimeout(() => {
console.log('Async operation has ended');
event.target.complete();
}, 2000);}

today=new Date();
}

