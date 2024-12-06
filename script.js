document.getElementById('generateLink').addEventListener('click', async () => {
    const productLink = document.getElementById('productLink').value.trim();
    const apiId = "your_api_id_here"; // Replace with your actual API ID
    const apiUrl = "https://api.example.com/generate-affiliate"; // Replace with the actual API endpoint

    if (!productLink) {
        alert('Please enter a product link!');
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiId}`
            },
            body: JSON.stringify({ productLink })
        });

        if (!response.ok) {
            throw new Error("Failed to generate affiliate link. Please try again.");
        }

        const data = await response.json();
        const affiliateLink = data.affiliateLink;

        const output = document.getElementById('output');
        output.innerHTML = `<a href="${affiliateLink}" target="_blank" style="color: #28a745;">${affiliateLink}</a>`;
    } catch (error) {
        alert(error.message);
    }
});

// Toggle guidance steps
document.getElementById('guidanceButton').addEventListener('click', () => {
    const guidanceSteps = document.getElementById('guidanceSteps');
    if (guidanceSteps.classList.contains('hidden')) {
        guidanceSteps.classList.remove('hidden');
    } else {
        guidanceSteps.classList.add('hidden');
    }
});
