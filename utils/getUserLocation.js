export const getUserIpAndLocation = async () => {
    try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) return null;
        const data = await response.json();
        return {
            ip: data.ip || null,
            latitude: data.latitude ?? null,
            longitude: data.longitude ?? null,
            city: data.city || null,
            country: data.country_name || null,
        };
    } catch (error) {
        console.error("Failed to fetch user IP/location:", error);
        return null;
    }
};
