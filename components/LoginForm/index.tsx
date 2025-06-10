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
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const LoginManager: React.FC<LoginManagerProps> = ({
  open,
  setOpen,
  setOpenModal,
}) => {
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
        <LoginStep1Form
          open={open}
          setOpen={handleClose}
          onNext={handleNext}
          setOpenModal={setOpenModal}
        />
      )}

      {currentForm === "forgot" && step === 1 && (
        <ForgetWithNumberOrEmail
          open={open}
          setOpen={handleClose}
          onNext={handleNext}
          setOpenModal={setOpenModal}
        />
      )}

      {currentForm === "forgot" && step === 2 && (
        <ForgetStep2Form
          open={open}
          setOpen={handleClose}
          onNext={handleNext}
          setOpenModal={setOpenModal}
        />
      )}
    </AuthModal>
  );
};

export default LoginManager;
