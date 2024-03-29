import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'ironman';
    public age: number = 45;

    get capitalizedName(): string { // Los get se usan para métodos pero se ven como propiedades poniendo el .
        return this.name.toUpperCase();
    }

    getHeroDescription(): string { // Este es realmente un método y para llamarlo debemos usar los ()
        return `${ this.name } - ${ this.age }`
    }

    changeHero(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 25;
    }

    resetForm(): void {
        this.name = 'ironman';
        this.age = 45;
    }

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
}