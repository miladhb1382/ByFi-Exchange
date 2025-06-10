import { nextStep, setCurrentForm } from "@/store/authSlice";
import AuthModal from "../ui/AuthModal";
import LoginStep1Form from "./LoginStep1Form";
import ForgetWithNumberOrEmail from "./ForgetStep1Form";
import ForgetStep2Form from "./ForgetStep2Form";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface LoginManagerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LoginManager: React.FC<LoginManagerProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { currentForm, formSteps } = useSelector(
    (state: RootState) => state.auth
  );

  const step = formSteps[currentForm];

  const handleClose = () => {
    setOpen(false);
    dispatch(setCurrentForm("login")); // ریست به فرم لاگین
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  if (!open) return null;

  return (
    <AuthModal open={open} setOpen={setOpen}>
      {currentForm === "login" && step === 1 && (
        <LoginStep1Form setOpen={handleClose} />
      )}

      {currentForm === "forgot" && step === 1 && (
        <ForgetWithNumberOrEmail onNext={handleNext} />
      )}

      {currentForm === "forgot" && step === 2 && (
        <ForgetStep2Form open={open} setOpen={handleClose} />
      )}
    </AuthModal>
  );
};

export default LoginManager;
