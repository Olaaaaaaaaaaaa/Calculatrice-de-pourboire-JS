function calc() {

    const pourboire = document.getElementById("pourboire");
    const total = document.getElementById("total");

    let montant = document.getElementById("montant").value;
    let pourcentage = document.getElementById("pourcentage").value;
    pourcentage = 1 + (0.01 * +pourcentage);

    pourboire.innerHTML = (+montant * +pourcentage) - +montant;
    total.innerHTML = +montant * +pourcentage;
}