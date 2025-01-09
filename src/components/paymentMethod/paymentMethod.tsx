import React, { useState, useRef, useEffect } from "react";

export type PaymentMethodProps = {
    className?: string;
    textClassName?: string;
    imageClassName?: string;
    backgroundColor?: string;
    text: string;
    imageUrl: string;
    borderRadius?: string;
    borderColor?: string;
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({
    className = "",
    textClassName = "",
    imageClassName = "",
    backgroundColor,
    text,
    imageUrl,
    borderRadius = "100px",
    borderColor = "white"
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [translateDistance, setTranslateDistance] = useState(0);

    // Reset selection state when component unmounts or remounts
    useEffect(() => {
        setIsSelected(false);
        return () => {
            setIsSelected(false);
            setTranslateDistance(0);
        };
    }, []);

    useEffect(() => {
        const updateTranslateDistance = () => {
            if (containerRef.current && imageRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const imageWidth = imageRef.current.offsetWidth;
                const leftPadding = 32;
                setTranslateDistance(containerWidth - imageWidth - leftPadding);
            }
        };

        // Initial calculation after a short delay to ensure elements are rendered
        const initTimer = setTimeout(updateTranslateDistance, 100);

        // Update on resize
        window.addEventListener('resize', updateTranslateDistance);
        
        return () => {
            window.removeEventListener('resize', updateTranslateDistance);
            clearTimeout(initTimer);
        };
    }, []);

    const toggleSelection = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-between py-3 pl-4 pr-2 text-white  min-w-[90%] overflow-hidden ${className} 
            ${isSelected ? "bg-opacity-60" : "bg-transparent"}`}
            style={{
                background: backgroundColor,
                borderRadius: borderRadius,
                borderColor: isSelected ? borderColor : "transparent",
                borderWidth: isSelected ? "1px" : "0px",
                boxSizing: "border-box",
                padding: "0.75rem 1rem", 
            }}
            onClick={toggleSelection}
        >
            {/* Text container with fade effect */}
            <div
                className={`
                    absolute left-4
                    transition-all duration-500 ease-out
                    ${isSelected ? 'opacity-0' : 'opacity-100'}
                `}
            >
                <p className={textClassName}>
                    {text}
                </p>
            </div>

            {/* Image with sliding animation */}
            <div 
                className="ml-auto"
                style={{
                    transform: isSelected ? `translateX(-${translateDistance}px)` : 'translateX(0)',
                    transition: 'transform 500ms ease-out'
                }}
            >
                <img
                    ref={imageRef}
                    src={imageUrl}
                    alt={text}
                    className={imageClassName}
                />
            </div>
        </div>
    );
};

export default PaymentMethod;