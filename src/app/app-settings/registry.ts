export class Registry {
    private _registry: any;

    constructor() {
        this.clear();
    }

    public get(key: string): any {
        return this._registry[key];
    }

    public set(key: string, value: any): void {
        this._registry[key] = value;
    }

    public clear(): void {
        this._registry = {};
    }
}
