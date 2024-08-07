import { TaskStatus } from "../entities/task.entity";
import { IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto{
    @IsString()
    @IsOptional()
    title:string;
    @IsString()
    @IsOptional()
    description:string;   
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.PENDING])
    status:TaskStatus;

}