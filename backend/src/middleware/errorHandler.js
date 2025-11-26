export function errorHandler(err, req, res, next) {
    console.error("🔥 Global error:", err);

    // Si el error ya trae status, usalo. Si no, 500.
    const status = err.status || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Internal server error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    })
}