import React from "react";
import "./LoadingModal.scss"; // external CSS for animation

const LoadingModal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                backdropFilter: "blur(0.5px)",
            }}
        >
            <svg
                width="60"
                height="60"
                viewBox="0 0 50 50"
                style={{ transform: "rotate(-90deg)" }}
            >
                <circle
                    className="colorful-spinner"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="90 150"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
};

export default LoadingModal;
