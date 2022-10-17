import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const SetDefaultCityThunk = createAsyncThunk(
  "cities/SetDefaultCityThunk",
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch("http://ip-api.com/json");

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      dispatch(getWetherForApiThunk(data.city));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWetherForApiThunk = createAsyncThunk(
  "cities/getWetherForApiThunk",
  async function (city, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c06cd8fad6a643c1ae0134857221310&q=${city}&days=1&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      dispatch(addCity(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewCityThunk = createAsyncThunk(
  "cities/addNewCityThunk",
  async function (
    { newCity, onFinishFailed, onCallback },
    { rejectWithValue, dispatch }
  ) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c06cd8fad6a643c1ae0134857221310&q=${newCity}&days=1&aqi=no&alerts=no`
      );
      if (!response.ok) {
        onFinishFailed("No City");

        throw new Error("No City!");
      }
      const data = await response.json();
      dispatch(newCityAdd({ data, onFinishFailed }));
      onCallback(`/${data.location.name}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

export const citySlice = createSlice({
  name: "cities",
  initialState: {
    defaultCity: null,
    cities: [],
    status: null,
    error: null,
  },
  reducers: {
    addCity(state, action) {
      const cityFromApi = action.payload;
      return {
        ...state,
        cities: [cityFromApi],
      };
    },
    newCityAdd(state, action) {
      const newCity = action.payload.data;
      const onCallback = action.payload.onFinishFailed;
      const newCities = [...state.cities, newCity];
      const newArray = Array.from(
        new Set(newCities.map((el) => JSON.stringify(el)))
      ).map((el) => JSON.parse(el));

      return {
        ...state,
        cities: newArray,
      };
    },
    deleteCity(state, action) {
      const deletedCity = action.payload.label;
      const cities = state.cities.filter(
        (city) => city.location.name !== deletedCity
      );

      return {
        ...state,
        cities,
      };
    },
  },
  extraReducers: {
    [SetDefaultCityThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [SetDefaultCityThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.defaultCity = action.payload;
    },
    [SetDefaultCityThunk.rejected]: setError,
    [getWetherForApiThunk.rejected]: setError,
  },
});

export const { addCity, newCityAdd, deleteCity } = citySlice.actions;

export default citySlice.reducer;
