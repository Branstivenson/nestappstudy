import { Inject, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './entities/task.entity';
import { v4 } from 'uuid';
import { TaskDto } from './dto/task.dto';
import { get } from 'http';
import { map } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { resolve } from 'path';
import { Z_ASCII } from 'zlib';
import { TaskDtoUpdate } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { error } from 'console';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRespository: Repository<Task>
    ) { }



    findAll(): Promise<Task[]> {
        return this.taskRespository.find();
    }
    
    findAllByStatus(status): Promise<Task[]>{
        let statusEnum:TaskStatus=status;
        return this.taskRespository.findBy({status:statusEnum})
    }


    create(createTaskDto: CreateTaskDto): Promise<object> {
        let task = this.taskRespository.create(createTaskDto)
        let taskSaved = this.taskRespository.save(task);
        return taskSaved;

    }

    findOne(id: number): Promise<object> {
        let task = this.taskRespository.findOneById(id);
        console.log(task);
        return task;
    }

    async update(id: number, taskDto: TaskDtoUpdate): Promise<any> {
        await this.findOne(id);
        let task=this.taskRespository.create(taskDto);
        task.id=id;
        return this.taskRespository.save(task);
    }

    remove(id): Promise<any>{
        return this.taskRespository.delete(id);
    }
    


}
