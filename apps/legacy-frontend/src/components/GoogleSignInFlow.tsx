import { useState } from "react";
import GoogleSignUp1 from "../imports/GoogleSignUp1";
import GoogleSignUp2 from "../imports/GoogleSignUp2";
import GoogleSignUp3 from "../imports/GoogleSignUp3";

interface GoogleSignInFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function GoogleSignInFlow({ isOpen, onClose, onComplete }: GoogleSignInFlowProps) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Sign in complete
      onComplete();
      setStep(1); // Reset for next time
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onClose();
      setStep(1);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-white z-50"
      onClick={(e) => {
        // Allow closing by clicking outside the modal content
        if (e.target === e.currentTarget) {
          onClose();
          setStep(1);
        }
      }}
    >
      <div className="relative w-full h-full">
        {step === 1 && (
          <div onClick={handleNext} className="cursor-pointer">
            <GoogleSignUp1 />
          </div>
        )}
        {step === 2 && (
          <div onClick={handleNext} className="cursor-pointer">
            <GoogleSignUp2 />
          </div>
        )}
        {step === 3 && (
          <div onClick={handleNext} className="cursor-pointer">
            <GoogleSignUp3 />
          </div>
        )}
        
        {/* Close button */}
        <button
          onClick={() => {
            onClose();
            setStep(1);
          }}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
        >
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
