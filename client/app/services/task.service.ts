import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    // Makes sure HTTP is called and Initialized.
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    // Pull all tasks in a json array.
    getTasks(){
        return this.http.get('/api/tasks')
            .map(res => res.json());
    }
    // Lets user post a new Task/Todo
    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    // Removes Task/Todo
    deleteTask(id){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }
    // Allows users to be able to complete a task/todo
    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
}