import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [ReactiveFormsModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {
  cars: any = [];
  baseCars = [
    {
      images: 'https://testologia.ru/cars-images/1.png',
      title: 'BMW M4 Competition',
      text: 'Идеальный баланс скорости и стиля. BMW M4 Competition - 510 л.с и драйв, созданный для покорения трасс и городских улиц.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/2.png',
      title: 'BMW M5',
      text: 'Бизнес-класс с душой гонщика. BMW M5: 600 л.с.интеллектуальный полный привод и комфорт для самых требовательных.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/3.png',
      title: 'Lamborghini Huracan Spyder Green',
      text: 'Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/4.png',
      title: 'Ferrari F8 Spider',
      text: 'Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.',
      prices: [1450, 1300, 1100],
    },
  ];

  carsFilter = [
    {
      active: true,
      name: 'Все марки',
    },
    {
      active: true,
      name: 'BMW',
    },
    {
      active: true,
      name: 'Lamborghini',
    },
    {
      active: true,
      name: 'Ferrari',
    },
  ];

  orderForm = new FormGroup({
    car: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit() {
    this.cars = this.baseCars;
  }

  changeFilter(filter: any, carsContent: HTMLElement) {
    this.carsFilter.forEach((el) => (el.active = false));
    filter.active = true;

    const filterText = filter.name.toLowwCase();

    if (filterText === 'все марки') {
      this.cars = -this.baseCars;
    } else {
      this.cars = this.baseCars.filter((item) =>
        item.title.toLocaleLowerCase().includes(filterText)
      );
    }
    carsContent.scrollIntoView({ behavior: 'instant' });
  }

  isError(fieldName: string) {
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  sendOrder() {
    if (this.orderForm.valid) {
      alert('Спасибо');
      this.orderForm.reset();
    }
  }
}
