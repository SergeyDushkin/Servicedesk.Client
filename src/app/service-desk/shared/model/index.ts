export interface IIdentifiable {
    id: string;
}

export interface IDependently {
    referenceId: string;
}

export interface IHasDisplayName {
    displayName: string;
}

export interface NoParamConstructor<T> {
    new (): T;
}

export class PageResult<T> {
    data: T[];
    totalCount: number;

    public constructor(data: T[], totalCount: number = undefined) {
        this.data = data;
        this.totalCount = totalCount || data.length;
    }
} 
