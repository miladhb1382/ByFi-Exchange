import React, { useState, useEffect, useRef } from "react";
import { Field, FieldProps } from "formik";
import IconSet from "../ui/iconSet";

interface CaptchaInputProps {
  name: string;
  onValid: (isValid: boolean) => void;
}

const CaptchaInput: React.FC<CaptchaInputProps> = ({ name, onValid }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateCaptchaText = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = `rgba(100,100,100,${Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    ctx.font = "28px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const x = 15 + i * 25;
      const y = height / 2;

      ctx.save();

      const angle = (Math.random() - 0.5) * 0.52;
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.fillStyle = `rgb(${50 + Math.random() * 100},${50 + Math.random() * 100},${50 + Math.random() * 100})`;
      ctx.fillText(char, 0, 0);

      ctx.restore();
    }
  };

  const refreshCaptcha = () => {
    const newText = generateCaptchaText();
    setCaptchaText(newText);
    drawCaptcha(newText);
    setUserAnswer("");
    onValid(false);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  useEffect(() => {
    onValid(userAnswer.toUpperCase() === captchaText);
  }, [userAnswer, captchaText, onValid]);

  return (
    <div className="flex items-end gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={name} className="text-white text-sm font-medium">
          کپچای امنیتی
        </label>

        <div className="relative w-full">
          <Field name={name}>
            {({ field }: FieldProps) => (
              <input
                {...field}
                id={name}
                type="text"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  field.onChange(e);
                }}
                className="h-12 px-4 rounded-md border border-gray-300 outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            )}
          </Field>

          <IconSet
            iconAddress={"/icons/refresh.png"}
            width={22}
            height={20}
            onClick={refreshCaptcha}
            className="absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={160}
        height={50}
        className="cursor-pointer border border-gray-400 rounded"
        onClick={refreshCaptcha}
        title="برای تغییر کپچا کلیک کنید"
      />
    </div>
  );
};

export default CaptchaInput;
