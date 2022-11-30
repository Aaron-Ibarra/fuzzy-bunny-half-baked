export function renderFamily(family) {
    const familyEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = family.name;

    familyEl.classList.add('family');
    familyEl.append(nameEl);
    return familyEl;
}
