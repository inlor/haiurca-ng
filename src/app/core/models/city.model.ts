import {Model} from './model';
import {Country} from './country.model';
import {Entity} from './entity.enum';

export class City extends Model {
    name: string;
    country: Country;
    type: Entity.CITY;

    toString = (): string => this.name + ', ' + this.country.name;
}
