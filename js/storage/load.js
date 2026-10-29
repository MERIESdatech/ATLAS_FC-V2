export function loadData(key, startingData) {
    const savedData = localStorage.getItem(key);
    if (savedData === null) {
        return startingData;
    }
    try {
        const data = JSON.parse(savedData);
        if (Array.isArray(data)) {
            return data;
        }
    } catch (error) {
        return startingData;
    }
    return startingData;
}
