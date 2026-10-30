async function pobierzDane() {
    try {
        const odpowiedz = await fetch("./dane.json");

        if (!odpowiedz.ok) {
            throw new Error("Błąd pobierania pliku");
        }

        const dane = await odpowiedz.json();

        document.getElementById("wynik").textContent = dane.tekst;
    }
    catch (blad) {
        document.getElementById("wynik").textContent =
            "Nie udało się pobrać danych";

        console.error(blad);
    }
}

pobierzDane();
