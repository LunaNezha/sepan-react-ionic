import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "./Inputs";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  numberOfdigits: number;
  errors?: any;
}

let currentOTPIndex: number;

const OTPInput: React.FC<IProps> = (
  { numberOfdigits, errors },
  ...rest
) => {
  const [otp, setOtp] = useState<string[]>(new Array(numberOfdigits).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOTPIndex - 1);
    else setActiveOtpIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <>
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <Input
              className="no-arrows"
              type="number"
              BorderRadius={"lg"}
              placeholder="-"
              Padding={"otp"}
              TextSizes={"lg"}
              TextAligns={"center"}
              onChange={handleOnChange}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={index === activeOtpIndex ? inputRef : null}
              errors={errors}
              value={otp[index]}
              {...rest}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default OTPInput;
