import { nextStep, prevStep, setCurrentForm } from "@/store/authSlice";
import Step1RegisterForm from "./Step1RegisterForm";
import Step2RegisterForm from "./Step2RegisterForm";
import Step3RegisterForm from "./Step3RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AuthModal from "../ui/AuthModal";

interface RegisterManagerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setOpenModal: (modal: "login" | "register" | "forgot" | null) => void;
}

const RegisterManager: React.FC<RegisterManagerProps> = ({
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
    dispatch(setCurrentForm("login")); // یا dispatch(resetAll()) برای ریست کامل
  };

  const handleNext = () => dispatch(nextStep());
  const handlePrev = () => dispatch(prevStep());

  if (!open || currentForm !== "register") return null;

  return (
    <AuthModal open={open} setOpen={setOpen}>
      {step === 1 && (
        <Step1RegisterForm
          open={open}
          setOpen={handleClose}
          onNext={handleNext}
          setOpenModal={setOpenModal}
        />
      )}
      {step === 2 && (
        <Step2RegisterForm
          open={open}
          setOpen={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          setOpenModal={setOpenModal}
        />
      )}
      {step === 3 && (
        <Step3RegisterForm
          open={open}
          setOpen={handleClose}
          setOpenModal={setOpenModal}
        />
      )}
    </AuthModal>
  );
};

export default RegisterManager;
