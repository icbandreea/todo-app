export interface Task {
    id: number,
    title: string,
    description: string,
    priority: 'low' | 'medium' | 'high',
    dueDate: Date | null,
    status: 'to-do' | 'in-progress' | 'done',
    tags?: string
}