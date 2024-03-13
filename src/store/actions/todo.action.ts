import axiosClient, { APISuccessResponse } from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTodoAction = createAsyncThunk<
    APISuccessResponse,
    {
        text: string;
        completed: boolean;
    }
>("todo/add-todo", async (arg, thinkAPI) => {
    try {
        const { data, status } = await axiosClient.post<APISuccessResponse, any>(
            "/api/todo/add-todo",
            arg
        );
        if (status !== 200)
            return thinkAPI.rejectWithValue(
                new Error(data.message || "Something is wrong here")
            );
        return thinkAPI.fulfillWithValue(data);
    } catch (error: any) {
        if (error.response.data)
            return thinkAPI.rejectWithValue(
                new Error(error.response.data.error || "Something went wrong")
            );
        return thinkAPI.rejectWithValue(
            new Error(error.response || "Something is wrong here")
        );
    }
});

export const getTodoAction = createAsyncThunk<
    APISuccessResponse
>("todo/get-todo", async (arg, thinkAPI) => {
    try {
        const { data, status } = await axiosClient.post<APISuccessResponse, any>(
            "/api/todo/get-todo",
            arg
        );
        if (status !== 200)
            return thinkAPI.rejectWithValue(
                new Error(data.message || "Something is wrong here")
            );
        return thinkAPI.fulfillWithValue(data);
    } catch (error: any) {
        if (error.response.data)
            return thinkAPI.rejectWithValue(
                new Error(error.response.data.error || "Something went wrong")
            );
        return thinkAPI.rejectWithValue(
            new Error(error.response || "Something is wrong here")
        );
    }
});

export const deleteTodoAction = createAsyncThunk<
    APISuccessResponse,
    { id: string; }
>("todo/delete-todo", async (arg, thunkAPI) => {
    try {
        const { data, status } = await axiosClient.delete<APISuccessResponse, any>(
            "/api/todo/delete-todo",
            { data: arg }
        );
        if (status !== 200)
            return thunkAPI.rejectWithValue(
                new Error(data.message || "Something is wrong here")
            );
        return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
        if (error.response.data)
            return thunkAPI.rejectWithValue(
                new Error(error.response.data.error || "Something went wrong")
            );
        return thunkAPI.rejectWithValue(
            new Error(error.response || "Something is wrong here")
        );
    }
});

export const updateTodoAction = createAsyncThunk<
    APISuccessResponse,
    {
        id: string;
        completed: boolean
    }
>("todo/update-todo", async (arg, thunkAPI) => {
    try {
        const { data, status } = await axiosClient.put<APISuccessResponse, any>(
            "/api/todo/update-todo",
            arg
        );
        console.log("status", status)
        if (status !== 200)
            return thunkAPI.rejectWithValue(
                new Error(data.message || "Something is wrong here")
            );
        return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
        if (error.response.data)
            return thunkAPI.rejectWithValue(
                new Error(error.response.data.error || "Something went wrong")
            );
        return thunkAPI.rejectWithValue(
            new Error(error.response || "Something is wrong here")
        );
    }
});

