export const dateGeneration = (timestamp) => {
    const milliseconds = timestamp * 1000;

    const dateObject = new Date(milliseconds);

    const day = String(dateObject.getDate()).padStart(2, '0');

    const month = String(dateObject.getMonth() + 1).padStart(2, '0');

    const year = String(dateObject.getFullYear());

    return `${day}/${month}/${year}`;
}