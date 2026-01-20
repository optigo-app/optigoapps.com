"use client";


import { useRouter } from "next/navigation";

export default function NotFound() {
    const navigate = useRouter();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "480px",
                    width: "100%",
                    background: "white",
                    padding: "3rem 2rem",
                    borderRadius: "20px",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#ef4444",
                        marginBottom: "1rem",
                    }}
                >
                    404
                </div>
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "#111827",
                    }}
                >
                    Page Not Found
                </h2>
                <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "2rem" }}>
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>
                <button
                    onClick={() => navigate.push("/")}
                    style={{
                        padding: "12px 24px",
                        background: "#111827",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#000")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#111827")}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}
