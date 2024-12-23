export class CTodo  {
    id!: number;
    text?: string;
    completed!: boolean;
    deleted?:boolean;

    constructor(text: string, completed = false, id = Date.now()) {
        this.text = text;
        this.id = id;
        this.completed = completed;
        this.deleted = false;
    }

}