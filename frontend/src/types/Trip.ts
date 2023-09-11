export type Trip = {
    id: number, 
    title: string,
    description: string,
    start_time: Date,
    end_time: Date,
    activities: number[],
}