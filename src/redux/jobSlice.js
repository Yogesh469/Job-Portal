import { createSlice } from "@reduxjs/toolkit";
import { getData, setData } from "../../../localstorage/localStorage.js";

const jobSlice = createSlice({
    name: "jobs",

    initialState: {
        jobs: getData(),
        companies: []
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

        },


        addCompany: (state, action) => {
            state.companies.push(action.payload);
        },

        deleteCompany: (state, action) => {
            state.companies = state.companies.filter(
                (item) => item.id !== action.payload
            )

        },


        updatecompany: (state, action) => {
            const index = state.companies.findIndex(
                (item) => item.id === action.payload.id
            )

            if (index !== -1) {
                state.companies[index] = action.payload;
              
            }

        }




    }
});

export const { addJob, deleteJob, updateJob, addCompany, deleteCompany ,updatecompany } = jobSlice.actions

export default jobSlice.reducer