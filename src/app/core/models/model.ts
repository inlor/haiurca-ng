import {Entity} from './entity.enum';

export abstract class Model {
    readonly id: number;
    readonly type: Entity;
    readonly createdAt: string;
    readonly updatedAt: string;

    constructor(input?: any) {
        if (input) {
            Object.assign(this, input);
        }
    }

    serialize = () => JSON.stringify(this);
}
