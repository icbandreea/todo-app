export type TaskStatus = 'to-do' | 'in-progress' | 'done';

export interface Task {
    id: number,
    title: string,
    description: string,
    priority: 'low' | 'medium' | 'high',
    dueDate: Date | null,
    status: TaskStatus,
    tags?: string
}