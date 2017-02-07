import { Injectable } from '@angular/core';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeros(): Hero[] {
    return HEROES;
  }
}