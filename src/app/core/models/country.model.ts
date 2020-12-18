import {Model} from './model';
import {Entity} from './entity.enum';

export class Country extends Model {
    name: string;
    type: Entity.COUNTRY;
}
