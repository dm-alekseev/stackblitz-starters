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
    {
      images: 'https://testologia.ru/cars-images/5.png',
      title: 'Porsche 911 Targa 4S Yellow',
      text: 'Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/6.png',
      title: 'Mercedes SL 55 AMG',
      text: ' Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/7.png',
      title: 'BMW Z4',
      text: 'Компактный кабриолет для стильных путешествий. BMW Z4: идеальный союз маневренности, мощности и элегантного дизайна.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/8.png',
      title: 'Mercedes C180 Convertible',
      text: 'Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/9.png',
      title: 'Chevrolet Corvette Orange',
      text: 'Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/10.png',
      title: 'BMW Z4',
      text: 'Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/11.png',
      title: 'Mercedes C180 Convertible',
      text: 'Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/12.png',
      title: 'Mercedes C180 Convertible',
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
      active: false,
      name: 'BMW',
    },
    {
      active: false,
      name: 'Lamborghini',
    },
    {
      active: false,
      name: 'Ferrari',
    },
    {
      active: false,
      name: 'Porsche',
    },
    {
      active: false,
      name: 'Mercedes',
    },
    {
      active: false,
      name: 'Chevrolet',
    },
    {
      active: false,
      name: 'Ford',
    },
    {
      active: false,
      name: 'Audi',
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

    const filterText = filter.name.toLowerCase();

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
