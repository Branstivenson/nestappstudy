import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
@Entity()
export class Task{
    @PrimaryGeneratedColumn("uuid")
    id:number;
    @Column()
    title:string;
    @Column()
    description:string;
    @Column()
    status:TaskStatus;

    constructor(title:string, description:string, status:TaskStatus){
        this.title=title;
        this.description=description;
        this.status=status;
    }
}