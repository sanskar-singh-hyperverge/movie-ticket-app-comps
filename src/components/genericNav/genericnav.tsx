import Stepper from "../stepper/stepper";

export type GenericNavProps = {
    currentStep: number;
    totalStep: number;
    className?: string;
    onBackClick?: () => void;
};

const GenericNav = ({currentStep, totalStep, onBackClick}: GenericNavProps) => {

    return (
        <div className="flex w-screen justify-between items-center px-4 py-2">
            {/* add a back rectangular icon */}
            <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl text-gray-500" onClick={onBackClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6C47DB"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <div className="w-full flex items-center justify-center space-x-4">
                <Stepper className="w-[145px]" currentStep={currentStep} totalStep={totalStep} />
            </div>
        </div>
    );
}

export default GenericNav;