export async function fetchJson(jsonFileName) {
    try {
        const response = await fetch(`/data/${jsonFileName}.json`);
        if (response.ok) {
            const json = await response.json();
            return json;
        }
    } catch (error) {
        console.error(error);
    }
}