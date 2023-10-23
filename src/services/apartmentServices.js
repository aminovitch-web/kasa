export const apartmentServices = async () => {
    const URL = "../apartment.json";
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des données.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
};