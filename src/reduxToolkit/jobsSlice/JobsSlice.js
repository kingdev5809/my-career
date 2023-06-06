const { createSlice } = require("@reduxjs/toolkit");
const { getAllJobs } = require("reduxToolkit/extraReducers");

const initialState = {
  loading: false,
  error: "",
  data: [],
  filteredData: [],
  activeDote: {
    id: 1,
    label: "Title",
  },
  activeCard: {
    id: 1,
    label: "Title",
  },
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      const { priceFrom, priceTo } = payload;
      if (priceFrom || priceTo) {
        state.filteredData = state.data.filter(({ job }) => {
          if (!priceTo) return +priceFrom <= job.price;
          else return +priceFrom <= job.price && +priceTo >= job.priceRate;
        });
      }
    },
    activeDoteAction: (state, { payload }) => {
      state.activeDote = payload[0];
      state.activeCard = payload[1];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (state, { type, payload }) => {
      state.loading = false;
      state.data = payload.jobs;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { filterData, activeDoteAction } = jobsSlice.actions;
export default jobsSlice.reducer;
