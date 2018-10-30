import { Component, OnInit } from '@angular/core';
import { InfoBonbonService } from '../info-bonbon.service';
import { Observable } from 'rxjs';
import { BonbonInfo } from '../bonbon-info';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Gestion du clic pour le bonbon sélectionné ( Participage à l'affichage de la popup)
  public currentSelectedCandy: any = {
    "name": "",
    "img": ""
  }

  public CandyInfo(param_obj: any): any {
    this.currentSelectedCandy.name = param_obj.name;
    this.currentSelectedCandy.img = param_obj.img;
  }

  // Utilisation service


  public planetImg: BonbonInfo = null;

  public img: string = "";
  public images: string[];

  private service: InfoBonbonService;

  constructor(
    param_bonbon_service : InfoBonbonService
  ) { 
    this.planetImg = new BonbonInfo("bonbon", "bonbon");
    this.service = param_bonbon_service;
    this.img = "";
    this.images = [];
  }

  ngOnInit() {

    const obs: Observable<any[]> = this.service.getBonbonInfo(this.planetImg.planet);
    
    obs.subscribe(
      (param_images_urls: any[]) => {
        this.images = param_images_urls;
      }

    );
  }



}


