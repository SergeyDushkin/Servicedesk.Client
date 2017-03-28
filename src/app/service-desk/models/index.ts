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

export class Unit implements IIdentifiable, IDependently {

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

export class UnitUser implements IIdentifiable {

    public id : string;
    public unitId : string;
    public userId : string;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.unitId = data.unitId || undefined;
        this.userId = data.userId || undefined;
    }
}

export class Supplier implements IIdentifiable, IDependently {

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

export class Service implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id : string;
    public name : string;
    public code : string;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.name = data.name || "";
        this.code = data.code || "";
    }
}

export class Address implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id : string;
    public name : string;
    public address : string;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.name = data.name || "";
        this.address = data.address || "";
    }
}

export class User implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id : string;
    public firstName : string;
    public middleName : string;
    public lastName : string;
    public genderCode : string;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.firstName = data.firstName || "";
        this.middleName = data.middleName || "";
        this.lastName = data.lastName || "";
        this.genderCode = data.genderCode || "";
    }

    public get name() {
        return new String(this.lastName + ' ' + this.firstName + ' ' + this.middleName).trim();
    }
}

export class Contract implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id : string;
    public clientId : string;
    public name : string;
    public number : string;
    public date : Date;
    public startDate : Date;
    public endDate : Date;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.clientId = data.clientId || undefined;
        this.name = data.name || "";
        this.number = data.number || "";
        this.date = new Date(data.date) || undefined;
        this.startDate = new Date(data.startDate) || undefined;
        this.endDate = new Date(data.endDate) || undefined;
    }
}
