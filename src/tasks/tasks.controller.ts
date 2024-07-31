import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { title } from 'process';
import { TaskDto } from './dto/task.dto';
import { TaskDtoUpdate } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksService:TasksService
    ){}
    
    @Get('hi')
    helloWorld(){
        console.log();
    }
    @Get('show-one/:id')
    findOne(@Param('id') id:number){
        return this.tasksService.findOne(id);
    }

    @Post("/create")
    create(@Body() newTask:CreateTaskDto):Promise<object>{
        return this.tasksService.create(newTask);
    }
    @Patch("/update/:id")
    Update(@Param('id') id:number,@Body() taskDto:TaskDtoUpdate):Promise<any>{
        return this.tasksService.update(id, taskDto);
    }
    @Get()
    findAll(){
        return this.tasksService.findAll();
    }
    @Get(":status")
    findAllById(@Param('status') status):Promise<Task[]>{
        return this.tasksService.findAllByStatus(status);
    }
    @Delete('delete/:id')
    remove(@Param('id') id:number):Promise<any>{
        return this.tasksService.remove(id);
    }
}
