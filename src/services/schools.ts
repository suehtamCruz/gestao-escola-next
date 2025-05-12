export const getSchools = async () => {
    const response = await fetch(`${process.env.API_URL}/schools`);
    const data = await response.json();
    return data;
}