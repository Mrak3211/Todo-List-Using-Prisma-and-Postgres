"use client";
import React from "react";
import Image from "next/image";
import clipboard from "../../public/icons/clipboard-list-alt-svgrepo-com.svg";
import bin from "../../public/icons/bin-svgrepo-com.svg";
import { TodoType } from "./Todo";

const TodoItem = ({ tasks, toggleTaskCompletion, removeTask }: any) => {
  return (
    <div>
      <div className="flex gap-5 justify-between mt-16 max-w-full font-bold whitespace-nowrap w-[736px] max-md:flex-wrap max-md:mt-10">
        <div className="flex gap-2 px-5">
          <div className="grow text-sm text-blue-400">Tasks Created</div>
          <div className="justify-center px-2 py-0.5 text-xs bg-zinc-800 rounded-[999px] text-zinc-300">
            {tasks.length}
          </div>
        </div>
        <div className="flex gap-2 px-5">
          <div className="text-sm text-indigo-400">Completed</div>
          <div className="justify-center px-2 py-0.5 text-xs bg-zinc-800 rounded-[999px] text-zinc-300">
            {tasks.filter((task: TodoType) => task.completed === true).length}
          </div>
        </div>
      </div>
      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center px-6 py-16 mt-6 max-w-full text-base font-bold leading-6 text-center rounded-lg border-t border-solid border-zinc-800 text-zinc-500 w-[736px] max-md:px-5">
          <Image
            priority
            src={clipboard}
            alt=""
            className="self-center w-14 aspect-square"
          />
          <div className="mt-4 max-md:max-w-full text-indigo-400">
            You don't have tasks registered yet
            <br />
            Create tasks and organize your to-do items
          </div>
        </div>
      ) : (
        tasks.map((task: TodoType, index: number) => (
          <div
            key={index}
            className={`flex gap-3 justify-center items-start p-4 mt-3 max-w-full text-sm rounded-lg border border-solid shadow-sm bg-neutral-800 border-zinc-800 text-zinc-100 w-[736px] max-md:flex-wrap ${
              task.completed ? "line-through" : ""
            }`}
          >
            <input
              className="shrink-0 w-6 aspect-square mt-0.5"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id, index)}
            />
            <div className="flex-auto self-stretch max-md:max-w-full mt-0.6 m-1">
              {task.text}
            </div>
            <button
              onClick={() => removeTask(task.id, index)}
              className="shrink-0 w-6 aspect-square mt-0.5 cursor-pointer"
            >
              <Image
                priority
                src={bin}
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoItem;
