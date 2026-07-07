const sliders = [
    "automation",
    "energy",
    "transport",
    "healthcare",
    "education",
    "security",
    "green",
    "population"
];

const valueMap = {
    automation: "automationValue",
    energy: "energyValue",
    transport: "transportValue",
    healthcare: "healthValue",
    education: "educationValue",
    security: "securityValue",
    green: "greenValue",
    population: "populationValue"
};

// Live slider values
sliders.forEach(id => {
    const slider = document.getElementById(id);
    const value = document.getElementById(valueMap[id]);

    value.textContent = slider.value + "%";

    slider.addEventListener("input", () => {
        value.textContent = slider.value + "%";
    });
});

// Random Generator
document.getElementById("randomBtn").addEventListener("click", () => {

    sliders.forEach(id => {

        const slider = document.getElementById(id);

        const randomValue = Math.floor(Math.random() * 101);

        slider.value = randomValue;

        document.getElementById(valueMap[id]).textContent = randomValue + "%";

    });

    runSimulation();

});

// Main Button
document.getElementById("simulateBtn").addEventListener("click", runSimulation);

function runSimulation() {

    const automation = Number(document.getElementById("automation").value);
    const energy = Number(document.getElementById("energy").value);
    const transport = Number(document.getElementById("transport").value);
    const healthcare = Number(document.getElementById("healthcare").value);
    const education = Number(document.getElementById("education").value);
    const security = Number(document.getElementById("security").value);
    const green = Number(document.getElementById("green").value);
    const population = Number(document.getElementById("population").value);

    // Scores

    let sustainability =
        Math.round((energy * 0.5) + (green * 0.5));

    let economy =
        Math.round((automation * 0.35) +
        (transport * 0.25) +
        (education * 0.2) +
        (population * 0.2));

    let happiness =
        Math.round((healthcare * 0.3) +
        (green * 0.3) +
        (transport * 0.2) +
        (education * 0.2));

    let safety =
        Math.round((security * 0.6) +
        (healthcare * 0.2) +
        (automation * 0.2));

    let innovation =
        Math.round((automation * 0.4) +
        (education * 0.25) +
        (transport * 0.15) +
        (energy * 0.2));

    let ai =
        Math.round((automation * 0.45) +
        (security * 0.15) +
        (healthcare * 0.15) +
        (education * 0.15) +
        (transport * 0.10));

    let overall = Math.round(
        (
            sustainability +
            economy +
            happiness +
            safety +
            innovation +
            ai
        ) / 6
    );

    document.getElementById("overallScore").textContent = overall;

    document.getElementById("sustainabilityScore").textContent = sustainability + "%";
    document.getElementById("economyScore").textContent = economy + "%";
    document.getElementById("happinessScore").textContent = happiness + "%";
    document.getElementById("safetyScore").textContent = safety + "%";
    document.getElementById("innovationScore").textContent = innovation + "%";
    document.getElementById("aiScore").textContent = ai + "%";

    let rank = "";
    let summary = "";

    if (overall >= 90) {
        rank = "🌍 Global AI Megacity";
        summary = "An exceptional AI-powered city with world-class sustainability, innovation, public services, and intelligent infrastructure.";
    }
    else if (overall >= 80) {
        rank = "🚀 Smart Future City";
        summary = "A highly advanced smart city that successfully integrates AI into everyday urban life.";
    }
    else if (overall >= 70) {
        rank = "🏙️ Advanced Digital City";
        summary = "A strong digital ecosystem with room for additional AI investments and green initiatives.";
    }
    else if (overall >= 60) {
        rank = "⚡ Developing Smart City";
        summary = "The city is modernizing but still requires improvements across several AI sectors.";
    }
    else if (overall >= 45) {
        rank = "🏗️ Emerging City";
        summary = "The city has begun adopting AI technologies but lacks balanced development.";
    }
    else {
        rank = "⚠ Traditional City";
        summary = "Significant investments are needed before the city becomes AI-ready.";
    }

    document.getElementById("cityRank").textContent = rank;
    document.getElementById("summary").textContent = summary;

    const recommendations = [];

    if (automation < 60)
        recommendations.push("Increase AI automation to improve productivity and industrial efficiency.");

    if (energy < 70)
        recommendations.push("Expand renewable energy infrastructure to reduce environmental impact.");

    if (transport < 65)
        recommendations.push("Invest in autonomous transportation and intelligent traffic management.");

    if (healthcare < 70)
        recommendations.push("Deploy AI-assisted hospitals and predictive healthcare systems.");

    if (education < 70)
        recommendations.push("Enhance AI education platforms and digital learning opportunities.");

    if (security < 70)
        recommendations.push("Strengthen cybersecurity and AI-powered public safety monitoring.");

    if (green < 70)
        recommendations.push("Increase green spaces, smart parks, and climate-friendly infrastructure.");

    if (population > 85)
        recommendations.push("High population density may pressure city resources. Improve urban planning.");

    if (overall >= 90)
        recommendations.push("Maintain continuous AI innovation while sharing best practices with other smart cities.");

    if (recommendations.length === 0)
        recommendations.push("Excellent balance achieved. Continue monitoring AI systems for long-term sustainability.");

    const list = document.getElementById("recommendations");

    list.innerHTML = "";

    recommendations.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}

// Initial Simulation
runSimulation();