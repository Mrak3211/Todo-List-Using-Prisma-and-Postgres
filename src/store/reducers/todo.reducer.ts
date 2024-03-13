import { createSlice } from "@reduxjs/toolkit";
import { addTodoAction, deleteTodoAction, getTodoAction, updateTodoAction } from "../actions/todo.action";
import { TodoType } from "@/components/Todo";

export type TodoState = {
    todos?: TodoType[];
    isLoading: boolean;
    message: string;
    error: boolean;
};

const initialState = {
    todos: [],
    isLoading: false,
    message: "",
    error: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add-Todo
        builder.addCase(addTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addTodoAction.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            if (payload.message) {
                state.message = payload.message;
            }
        });
        builder.addCase(addTodoAction.rejected, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = true;
            if (payload?.message) {
                state.message = payload?.message;
            }
        });

        // Get-Todo
        builder.addCase(getTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTodoAction.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            state.todos = payload
            if (payload.message) {
                state.message = payload.message;
            }
        });
        builder.addCase(getTodoAction.rejected, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = true;
            if (payload?.message) {
                state.message = payload?.message;
            }
        });

        // Update-Todo
        builder.addCase(updateTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateTodoAction.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            if (payload.message) {
                state.message = payload.message;
            }
        });
        builder.addCase(updateTodoAction.rejected, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = true;
            if (payload?.message) {
                state.message = payload?.message;
            }
        });

        // Delete-Todo
        builder.addCase(deleteTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteTodoAction.fulfilled, (state, { payload }: any) => {
            state.isLoading = false;
            if (payload.message) {
                state.message = payload.message;
            }
        });
        builder.addCase(deleteTodoAction.rejected, (state, { payload }: any) => {
            state.isLoading = false;
            state.error = true;
            if (payload?.message) {
                state.message = payload?.message;
            }
        });
    },
});

export const { setIsToast }: any = userSlice.actions;
export default userSlice.reducer;