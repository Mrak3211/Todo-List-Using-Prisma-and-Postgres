"use client";
import { useEffect, useState } from "react";
import TodoItem from "@/components/TodoItem";
import useTodo from "@/hooks/useTodo";

export interface TodoType {
  text: string;
  completed: boolean;
  id?: string;
}

export default function Todo() {
  const { todos, isLoading, addTodo, getTodo, updateTodo, deleteTodo } =
    useTodo();
  const [tasks, setTasks] = useState<TodoType[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    setTasks(todos || []);
  }, [todos]);

  const addTask = (taskText: string) => {
    if (taskText === "") {
      return;
    }
    try {
      const newTask = { text: taskText, completed: false };
      addTodo(newTask)
        .then(() => {
          setTasks([...tasks, newTask]);
          setTask("");
          getTodo();
        })
        .catch((err) => new Error(err));
    } catch (error) {
      console.error("error", error);
    }
  };

  const removeTask = (id: string, index: number) => {
    try {
      const updatedTasks = [...tasks];
      deleteTodo(id)
        .then(() => {
          updatedTasks.splice(index, 1);
          setTasks(updatedTasks);
          getTodo();
        })
        .catch((err) => new Error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskCompletion = (id: string, index: number) => {
    try {
      const updatedTasks = [...tasks];
      const updatedTask = { ...updatedTasks[index] };
      updatedTask.completed = !updatedTask.completed;
      updatedTasks[index] = updatedTask;
      updateTodo({ id: id, completed: updatedTask.completed })
        .then(() => {
          setTasks(updatedTasks);
          getTodo();
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex z-10 gap-2 mt-0 max-w-full whitespace-nowrap leading-[140%] w-[736px] max-md:flex-wrap mt-3">
        <input
          className="grow justify-center items-start py-4 pr-16 pl-4 text-base rounded-lg border border-solid bg-neutral-800 border-stone-950 text-white w-fit max-md:pr-5 max-md:max-w-full"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="flex gap-2 justify-center p-4 text-sm font-bold bg-blue-400 rounded-lg text-zinc-100"
          onClick={() => addTask(task)}
          disabled={isLoading}
        >
          <div className="mt-0.5">Create</div>
        </button>
      </div>
      <TodoItem
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
        isLoading={isLoading}
      />
    </div>
  );
}
