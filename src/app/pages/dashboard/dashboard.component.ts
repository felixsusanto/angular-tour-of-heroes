import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  btnOptions = {
    oneLiner: true,
    callbackOnOptClick: function(index) {
      console.log('hello from callback', index);
    }
  };
  btnOpt2 = {
    ...this.btnOptions,
    optAnchorRight: true
  }

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  optClickHandler(index) {
    console.log(index);
  }

 
}