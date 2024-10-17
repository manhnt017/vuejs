import {  defineStore } from 'pinia'
import axios from 'axios'
import type { Task } from '@/types/task'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // tự động lưu  Local store

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[]
  }),
  actions: {
    async fetchTasks() {
        try {
          const response = await axios.get('http://localhost:3000/tasks')
          this.tasks = response.data
          console.log(this.tasks);
          
        } catch (error) {
          console.error('Error fetching tasks:', error)
        }
      },
    async addTask(title: string) {
    try {
        const newTask = { title, completed: false }
        const response = await axios.post('http://localhost:3000/tasks', newTask)
         this.tasks.push(response.data)
         alert("add task ok")

    } catch (error) {
        alert(error)
    }
    },
    async updateTask(updatedTask: Task) {
      try {
        const response = await axios.put(
          `http://localhost:3000/tasks/${updatedTask.id}`,
          updatedTask,
        )
        const index = this.tasks.findIndex(task => task.id === updatedTask.id)
        if (index !== -1) {
          this.tasks[index] = response.data
        }
      } catch (error) {
        console.error('Error updating task:', error)
      }
    },

    async deleteTask(id: number) {
        try {
          await axios.delete(`http://localhost:3000/tasks/${id}`)
          const index = this.tasks.findIndex(task => task.id === id)
          if (index!== -1) {
            this.tasks.splice(index, 1)
          }
          alert("delete task ok")
        } catch (error) {
          console.error('Error deleting task:', error)
        }
      },

    },
    // persist: true // kích hoạt lưu trữ
   
})
