import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedTask?: Task;
  taskPosition = {top: 0, left: 0};
  showTaskDetails = false;

  tasks: Task[] = [
    {
      id: 1,
      title: 'Finish Angular Fundamentals module',
      description: 'Complete tutorial',
      priority: 'high',
      dueDate: new Date('2025-10-25'),
      status: 'in-progress',
      tags: 'tutorial'
    },
    {
      id: 2,
      title: 'Go to the dentist appointment',
      description: 'Teeth cleaning appointment',
      priority: 'low',
      dueDate: new Date('2025-10-22'),
      status: 'to-do',
    },
    {
      id: 3,
      title: 'Meal prep for the week',
      description: 'Prepare meals for the week',
      priority: 'medium',
      dueDate: new Date('2025-10-20'),
      status: 'done',
    },
        {
      id: 4,
      title: 'Feedback for coworker',
      description: 'Finish writing the feedback for my teammate',
      priority: 'high',
      dueDate: new Date('2025-10-19'),
      status: 'done',
    }
  ];

  get toDoTasks() {
    return this.tasks.filter(t => t.status === 'to-do');
  }

  get inProgressTasks() {
    return this.tasks.filter(t => t.status === 'in-progress');
  }

  get doneTasks() {
    return this.tasks.filter(t => t.status === 'done');
  }

  drop(event: CdkDragDrop<Task[]>, newStatus: TaskStatus) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.status = newStatus;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
