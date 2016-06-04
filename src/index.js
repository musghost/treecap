import 'reflect-metadata';
import 'zone.js';
import 'jquery';

import {bootstrap} from '@angular/platform-browser-dynamic';

import './index.scss';

import {Main} from './app/main';

import {enableProdMode} from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Main);
