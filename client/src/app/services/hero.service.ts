/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import {Hero} from "../models/hero";

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http) { }
}