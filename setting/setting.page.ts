import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  static Home: HomePage;
    
  
  constructor(public modalCtrl:ModalController,public navCtrl: NavController,private http: HttpClient,private route: Router) { 
  }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss()
    
  }
  
    
  }
