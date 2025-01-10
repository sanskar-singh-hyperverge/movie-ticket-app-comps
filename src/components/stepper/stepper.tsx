import React from "react";

export type StepperProps = {
  currentStep: number;
  totalStep: number;
  className?: string;
};

const Stepper = ({ currentStep, totalStep, className }: StepperProps) => {
  const steps = Array.from({ length: totalStep }, (_, index) => index + 1);

  return (
    <div className={"flex items-center " + className}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex w-7 h-7 items-center justify-center rounded-full ${
              step <= currentStep
                ? "bg-purple-500 text-white"
                : "border-2 border-purple-500 text-purple-500"
            }`}
          >
            {step < currentStep ? (
              <span className="text-white text-xs">✓</span>
            ) : (
              <span className="text-xl text-xs">{step}</span>
            )}
          </div>
          {index < totalStep - 1 && (
            <div
              className={`flex-1 h-1 ${
                step < currentStep
                  ? "bg-purple-500"
                  : "bg-purple-200"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
