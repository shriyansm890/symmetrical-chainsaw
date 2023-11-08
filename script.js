const opportunities = [];

function searchVolunteerOpportunities() {
    const location = document.getElementById('location').value;
    const filteredOpportunities = opportunities.filter(opportunity => opportunity.location.includes(location));
    displayOpportunities(filteredOpportunities);
}

function displayOpportunities(opportunityList) {
    const opportunitiesListContainer = document.getElementById('opportunities-list');
    opportunitiesListContainer.innerHTML = '';

    opportunityList.forEach(opportunity => {
        const opportunityDiv = document.createElement('div');
        opportunityDiv.className = 'opportunity';
        opportunityDiv.innerHTML = `<h3>${opportunity.name}</h3><p>${opportunity.description}</p>`;
        opportunitiesListContainer.appendChild(opportunityDiv);
    });
}

function addVolunteerOpportunity() {
    const name = document.getElementById('opportunity-name').value;
    const description = document.getElementById('opportunity-description').value;
    const location = document.getElementById('location').value;

    if (name && description && location) {
        opportunities.push({ name, description, location });
        displayOpportunities(opportunities);
        clearFormFields();
    } else {
        alert('Please fill out all fields.');
    }
}

function clearFormFields() {
    document.getElementById('opportunity-name').value = '';
    document.getElementById('opportunity-description').value = '';
}
