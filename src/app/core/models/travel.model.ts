import {Model} from './model';
import {City} from './city.model';
import {User} from './user.model';
import {Entity} from './entity.enum';

export class Travel extends Model {
    origin: City;
    destination: City;
    go: string;
    back: string;
    price: number;
    description: string;
    user: User;
    type: Entity.TRAVEL;

    complete = (): boolean =>
        this.origin !== undefined && this.destination !== undefined && this.go !== undefined

    query = (): string =>
      '?origin.id=' + this.origin.id +
      '&destination.id=' + this.destination.id +
      '&go[after]' + require('moment')(this.go).format('\'YYYY-MM-DD')
}
