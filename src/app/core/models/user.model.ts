import { Model } from '.';
import {Entity} from './entity.enum';

export class User extends Model {
    email: string;
    password: string;
    name: string;
    phone: string;
    roles: [];
    travels: [];
    type: Entity.USER;

    isValidEmail(): boolean {
        return this.email.includes('@');
    }

    isComplete(): boolean {
        return this.isValidEmail() && this.password.length > 5;
    }
}
