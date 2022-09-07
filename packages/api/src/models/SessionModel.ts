import Model from '../utilities/objection'

export class Session extends Model {
    id: string;
    title: string;
    body: string;
    video: string;
    scheduled: string;
    created: string;
    completed: boolean;

    static get tableName() {
        return 'Sessions';
    }
}
