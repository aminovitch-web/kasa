export const apartmentServices = async () => {
    const URL = "../apartment.json";

    //try {
    fetch(URL).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error("Erreur de réponse :", response.status);
            return [];
        }
    });
    /*
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return false;
    }*/
};
