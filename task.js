
        let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
        let options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
                'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
            }
        };

        let allData = [];
        let container = document.getElementById("cardcon");
        let btn = document.getElementById("fetchData");

        function displayCards(z) {
            cardcon.textContent = "";
            if (z.length === 0) {
                cardcon.textContent = "No items found.";
                return;
            }
            z.forEach(x => {
                let card = document.createElement("div");
                card.innerHTML = `
                    <img src='${x.Image}' width="250"/>
                    <p>${x.Brand}</p>
                    <button>AddToCart</button>
                `;
                cardcon.append(card);
            });
        }

        // btn.addEventListener("click", async (e) => {
        const getData = async () => {
            // e.preventDefault();
            try {
                const data = await fetch(url, options)
                    .then(res => res.json());
                allData = data;
                console.log("Fetched Data:", data);
                displayCards(data);
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };
        getData()

        let puma = document.getElementById("puma");
        puma.addEventListener("click", () => {
            if (allData.length > 0) {
                const pumaData = allData.filter(x => x.Brand.toLowerCase() === "puma");
                console.log("puma Data:", pumaData);
                displayCards(pumaData);
            } else {
                console.log("No data available. Fetch data first.");
            }
        });

        let woodland = document.getElementById("woodland");
        woodland.addEventListener("click", () => {
            const woodlandData = allData.filter(x => x.Brand.toLowerCase() === "woodland");
            console.log("woodland Data:", woodlandData);
            displayCards(woodlandData);
        });

        let sparx = document.getElementById("sparx");
        sparx.addEventListener("click", () => {
            const sparxData = allData.filter(x => x.Brand.toLowerCase() === "sparx");
            console.log("sparx Data:", sparxData);
            displayCards(sparxData);
        });

        let bata = document.getElementById("bata");
        bata.addEventListener("click", () => {
            const bataData = allData.filter(x => x.Brand.toLowerCase() === "bata");
            console.log("bata Data:", bataData);
            displayCards(bataData);
        });

        let redtape = document.getElementById("redtape");
        redtape.addEventListener("click", () => {
            const redData = allData.filter(x => x.Brand.toLowerCase() === "red tape");
            console.log("red Data:", redData);
            displayCards(redData);
        });