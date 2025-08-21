import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
cars: any =[];
baseCars =[
  {
images:"https://testologia.ru/cars-images/1.png",
title:"BMW M4 Competition",
text:"Идеальный баланс скорости и стиля. BMW M4 Competition - 510 л.с и драйв, созданный для покорения трасс и городских улиц.",
prices:[1450,1300,1100]
},
{
images: "https://testologia.ru/cars-images/2.png" ,
title: "BMW M5",
text: "Бизнес-класс с душой гонщика. BMW M5: 600 л.с.интеллектуальный полный привод и комфорт для самых требовательных.",
prices:[1450,1300,1100]
},
{
images: "https://testologia.ru/cars-images/3.png", 
title: "Lamborghini Huracan Spyder Green",
text: "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.",
prices:[1450,1300,1100]
},
{
images: "https://testologia.ru/cars-images/4.png",
title: "Ferrari F8 Spider",
text:"Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
prices:[1450,1300,1100]
}
]
}

