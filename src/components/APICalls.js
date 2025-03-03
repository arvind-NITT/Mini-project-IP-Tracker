
export const fetchLocationData = async (IPAddress = "123.123.123.123") => {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_niPLu64JHaviL1l5k4gYiU8dTMKVs&ipAddress=${IPAddress}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok',response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching IP location data:", error);
        throw error;
    }
};
