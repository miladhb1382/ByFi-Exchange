import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormType = "login" | "register" | "forgot";

interface SharedData {
  phoneNumber: string;
  tempToken: string;
  forgotEmail?: string;
  forgotCode?: string;
}

interface AuthState {
  currentForm: FormType;
  formSteps: Record<FormType, number>;
  sharedData: SharedData;
}

const initialState: AuthState = {
  currentForm: "login",
  formSteps: {
    login: 1,
    register: 1,
    forgot: 1,
  },
  sharedData: {
    phoneNumber: "",
    tempToken: "",
    forgotEmail: undefined,
    forgotCode: undefined,
  },
};

const MAX_STEPS = {
  login: 3,
  register: 3,
  forgot: 3,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentForm: (state, action: PayloadAction<FormType>) => {
      state.currentForm = action.payload;
    },
    nextStep: (state) => {
      const maxStep = MAX_STEPS[state.currentForm] || 3;
      state.formSteps[state.currentForm] = Math.min(
        maxStep,
        state.formSteps[state.currentForm] + 1
      );
    },
    prevStep: (state) => {
      state.formSteps[state.currentForm] = Math.max(
        1,
        state.formSteps[state.currentForm] - 1
      );
    },
    goToStep: (state, action: PayloadAction<number>) => {
      const maxStep = MAX_STEPS[state.currentForm] || 3;
      const step = action.payload;
      state.formSteps[state.currentForm] = Math.min(maxStep, Math.max(1, step));
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.sharedData.phoneNumber = action.payload;
    },
    setTempToken: (state, action: PayloadAction<string>) => {
      state.sharedData.tempToken = action.payload;
    },
    setForgotEmail: (state, action: PayloadAction<string>) => {
      state.sharedData.forgotEmail = action.payload;
    },
    setForgotCode: (state, action: PayloadAction<string>) => {
      state.sharedData.forgotCode = action.payload;
    },
    resetAll: () => {
      return { ...initialState };
    },
  },
});

export const {
  setCurrentForm,
  nextStep,
  prevStep,
  goToStep,
  setPhoneNumber,
  setTempToken,
  setForgotEmail,
  setForgotCode,
  resetAll,
} = authSlice.actions;

export default authSlice.reducer;
