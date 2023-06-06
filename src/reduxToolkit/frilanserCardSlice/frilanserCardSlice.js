import { createSlice } from "@reduxjs/toolkit";
import { getFreelancer, getUserLanguage } from "reduxToolkit/extraReducers";
import defaultuserImage from "../../assets/images/Freelancer/defaultUserImage.png";
const initialState = {
  loading: "",
  defaultuserImage: defaultuserImage,
  freelancerData: [],
  skillsData: [],
  hobbiesData: [],
  userLanguages: null,
  error: null,
  freelancer: {
    firstName: "",
    lastName: " ",
    phoneNumber: "",
    email: "",
    DateOfBirthString: "",
    address: {
      countryId: 1,
      country: null,
      street: "",
    },
    position: 0,
    bio: "",
    contacts: {
      whatsapp: "",
      facebook: "",
      instagram: "",
      telegram: "",
      github: "",
      twitter: "",
    },
  },
};

const freelancerSlice = createSlice({
  name: "freelancer",
  initialState,
  reducers: {
    firstStep: (state, action) => {
      state.freelancer.firstName = action.payload.firstName;
      state.freelancer.lastName = action.payload.lastName;
      state.freelancer.email = action.payload.email;
      state.freelancer.phoneNumber = action.payload.phoneNumber;
    },
    secondStep: (state, action) => {
      state.freelancer.address.street = action.payload.street;
    },
    yourSelfStep: (state, action) => {
      state.freelancer.position = action.payload.positions;
      state.freelancer.DateOfBirthString = action.payload.DateOfBirthString;
      state.freelancer.bio = action.payload.bio;
    },
    socialStep: (state, action) => {
      state.freelancer.contacts = { ...action.payload };
    },
    getSkills: (state, action) => {
      state.skillsData = action.payload;
    },
    getHobbies: (state, { payload }) => {
      state.hobbiesData = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFreelancer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFreelancer.fulfilled, (state, action) => {
        state.loading = false;
        state.freelancerData = action.payload;
      })
      .addCase(getFreelancer.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserLanguage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserLanguage.fulfilled, (state, action) => {
        state.loading = false;
        state.userLanguages = action.payload;
      })
      .addCase(getUserLanguage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {
  firstStep,
  secondStep,
  yourSelfStep,
  socialStep,
  getSkills,
  getHobbies,
} = freelancerSlice.actions;
export default freelancerSlice.reducer;
