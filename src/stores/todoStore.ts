import { defineStore } from "pinia";
import { ref } from "vue";

type TodoItem = {
    completed: boolean;
    content: string;
};

const TODO_STATUS_FILTERS = {
    ALL: "All",
    ACTIVE: "Active",
    COMPLETED: "Completed",
} as const;

type TodoStatusFilters = (typeof TODO_STATUS_FILTERS)[keyof typeof TODO_STATUS_FILTERS];

const useTodoStore = defineStore("todos", () => {
    let todos = ref<Array<TodoItem>>([
        { completed: true, content: "Complete online JavaScript course" },
        { completed: false, content: "Jog around the park 3x" },
        { completed: false, content: "10 minutes meditation" },
        { completed: false, content: "Read for 1 hour" },
        { completed: false, content: "Pick up groceries" },
        { completed: false, content: "Complete Todo App on Frontend Mentor" },
    ]);

    const filter = ref<TodoStatusFilters>("All");

    const addTodo = (todo: TodoItem) => {
        todos.value.push(todo);
    };

    const removeTodo = (index: number) => {
        todos.value.splice(index, 1);
    };

    const setFilter = (value: TodoStatusFilters) => {
        filter.value = value;
    };

    const removeCompleted = () => {
        todos.value = todos.value.filter((v) => !v.completed);
    };

    const getFilteredTodos = () => {
        return todos.value.filter((v) => {
            if (filter.value !== TODO_STATUS_FILTERS.ALL) {
                return v.completed === !(filter.value === TODO_STATUS_FILTERS.ACTIVE);
            }
            return true;
        });
    };

    return { addTodo, removeTodo, todos, setFilter, filter, removeCompleted, getFilteredTodos };
});

export { TODO_STATUS_FILTERS, useTodoStore, type TodoItem, type TodoStatusFilters };
