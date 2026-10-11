import { createSlice } from "@reduxjs/toolkit";
import { getData ,setData } from "../../../localstorage/localStorage.js";

const jobSlice = createSlice({
    name: "jobs",

    initialState: {
        jobs:getData()
    },

    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
            setData(state.jobs)
        },

        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter(
                (item) => item.id !== action.payload
            );
            setData(state.jobs)
        },


        updateJob: (state, action) => {
            const index = state.jobs.findIndex(
                (item) => item.id === action.payload.id
            );

            if (index !== -1) {
                state.jobs[index] = action.payload;
                setData(state.jobs)
            }

        }

    }
});

export const { addJob, deleteJob ,updateJob } = jobSlice.actions

export default jobSlice.reducer