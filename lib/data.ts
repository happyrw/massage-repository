export function formatDate(dateString: any) {
    const inputDate = new Date(dateString);

    const options = {
        weekday: 'long', // Full weekday name (e.g., "Friday")
        month: 'long',   // Full month name (e.g., "February")
        day: 'numeric',  // Day of the month (e.g., "10")
        year: 'numeric', // Full year (e.g., "2023")
    };

    // Format the date
    const formattedDate = inputDate.toLocaleDateString('en-US', options as any);

    return `${formattedDate}`;
}