export function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    let yearsOld = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        yearsOld--;
    }

    return yearsOld;
}