import { TaskStatus } from "../entities/task.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class TaskDto{
    @IsString()
    @MinLength(5)
    title:string;
    @IsString()
    @IsNotEmpty()
    description:string;
}
