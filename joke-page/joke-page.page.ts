import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.page.html',
  styleUrls: ['./joke-page.page.scss'],
})
export class JokePagePage implements OnInit {
  joke: any;
  constructor(public modalCtrl:ModalController,private http:HttpClient) { }

  ngOnInit(){
    this.http.get('https://official-joke-api.appspot.com/random_joke').subscribe (data=>{
      console.log(data);
     this.joke=data;
    });
  
  }
  async dismiss(){
    await this.modalCtrl.dismiss()
    
  }

}
