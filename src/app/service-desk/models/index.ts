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
    public user: User;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.unitId = data.unitId || undefined;
        this.userId = data.userId || undefined;
        this.user = new User(data.user) || undefined;
    }
}

export class UnitService implements IIdentifiable {

    public id : string;
    public unitId : string;
    public serviceId : string;
    public service: Service;
    public unit: Unit;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.unitId = data.unitId || undefined;
        this.serviceId = data.serviceId || undefined;
        this.service = new Service(data.service) || undefined;
        this.unit = new Unit(data.unit) || undefined;
    }
}

export class ContractService implements IIdentifiable {

    public id : string;
    public contractId : string;
    public serviceId : string;
    public service: Service;
    public contract: Contract;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.contractId = data.contractId || undefined;
        this.serviceId = data.userId || undefined;
        this.service = new Service(data.service) || undefined;
        this.contract = new Contract(data.contract) || undefined;
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

export class TicketPriority implements IIdentifiable {

    public id : string;
    public name : string;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.name = data.name || "";
    }
}

export class Channel implements IIdentifiable {

    public id : string;
    public name : string;
    public code : string;

    public constructor(data:any = {}) {
        this.id = data.id || undefined;
        this.name = data.name || "";
        this.code = data.code || "";
    }
}

export class Ticket implements IIdentifiable, IDependently {

    public resource : string;
    public referenceId : string;
    public id: string;
    public ticketNumber: string;
    public description: string;
    public startDate: Date;
    public endDate?: any;    
    public createdAt: Date;
    public clientId: string;
    public addressId: string;
    public contractId: string;
    public priorityId: string;
    public statusId: string; 
    public serviceId: string; 
    public operatorId: string; 
    public businessUnitId: string;
    public userId: string;
    public applicantId : string;
    public channelId : string;
    
    //public client: Client;
    public address: Address;
    public contract: Contract;
    //public priority: Priority;
    //public status: Status;
    public service: Service;
    public user: User;
    public applicant : User;
    public operator : User;
    public businessunit: Unit;

    public constructor(data:any = {}) {
        this.resource = data.resource || undefined;
        this.referenceId = data.referenceId || undefined;
        this.id = data.id || undefined;
        this.ticketNumber = data.ticketNumber || undefined;
        this.description = data.description || "";
        this.startDate = data.startDate ? new Date(data.startDate) : undefined;
        this.endDate = data.endDate ? new Date(data.endDate) : undefined;   
        this.createdAt = data.createdAt ? new Date(data.createdAt) : undefined;
        this.clientId = data.clientId || "";
        this.addressId = data.addressId || "";
        this.contractId = data.contractId || undefined;
        this.priorityId = data.priorityId || undefined;
        this.statusId = data.statusId || undefined;
        this.serviceId = data.serviceId || undefined;
        this.operatorId = data.operatorId || undefined;
        this.businessUnitId = data.businessUnitId || undefined;
        this.userId = data.userId || "";
        this.applicantId = data.applicantId || undefined;
        this.channelId = data.channelId || undefined;
        
        //this.client = data.client ? new Client(data.client) : new Client();
        this.address = data.address ? new Address(data.address) : new Address();
        this.contract = data.contract ? new Contract(data.contract) : new Contract();
        //this.priority = data.priority ? new Priority(data.priority) : new Priority();
        //this.status = data.status ? new Status(data.status) : new Status();
        this.service = data.service ? new Service(data.service) : new Service();
        this.user = data.user ? new User(data.user) : new User();
        this.operator = data.operator ? new User(data.operator) : new User();
        this.applicant = data.applicant ? new User(data.applicant) : new User();
        this.businessunit = data.businessunit ? new Unit(data.businessunit) : new Unit();
    }
}