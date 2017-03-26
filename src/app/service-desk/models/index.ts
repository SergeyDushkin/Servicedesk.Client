import { IIdentifiable, IDependently, IHasDisplayName } from '../shared/model'

export class Customer implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id : string;
    public name : string;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.name = data.name || "";
    }
}
