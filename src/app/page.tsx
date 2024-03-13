"use client";
import Todo from "@/components/Todo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col px-full py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center self-stretch px-16 py-10 w-full text-4xl font-black text-indigo-500 whitespace-nowrap bg-stone-950 max-md:px-5 max-md:max-w-full">
            <Link
              href="/"
              className="flex items-center mb-6 text-5xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d248bebe8d4f1569af87ffddfbe0d8cf13fcb5ead992f23df74f2453edeb6647?"
                className="shrink-0 aspect-[0.71] w-[32px] mr-2"
              />
              <div className="grow">
                <span className="text-blue-400">to</span>
                <span className="text-indigo-500">do</span>
              </div>
            </Link>
          </div>
        </div>
        <Todo />
      </div>
    </section>
  );
}
