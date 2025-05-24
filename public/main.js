import { rungKatta4 } from "./rungKatta4.js";
import { offerFunc } from "./funcEco.js";
import { demandFunc } from "./funcEco.js";
const h = 0.1;
const p0 = 10; //prix initial
const t0 = 0; //temps initial
const tmax = 10; // 0 <= t <= 10
const n = (tmax - t0) / h; // n pas
// console.log(returnKatta)
const price = rungKatta4(h, p0, t0, Math.ceil(n));
// const offer: number[] = price.map(P => 10 * P**2)
// const demand: number[] = price.map(P => 1000/P)
const offer = price.map(P => offerFunc(P));
const demand = price.map(P => demandFunc(P));
//code du graphe representant la demande , offre par rapport au prix offre-demande
//ex : dem(P) > off(P) ---> prixOD augmente
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: price.map(p => `P=${p.toFixed(4)}`), // sur axe des X
        datasets: [
            {
                label: 'offre',
                data: offer, //sur Y
                borderColor: 'rgba(255, 0, 0, 1)',
                fill: false,
                tension: 0.1
            },
            {
                label: 'demande',
                data: demand, //sur Y
                borderColor: 'rgba(54, 235, 93, 1)',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: { display: true, text: 'Quantité' }
            },
            x: {
                title: { display: true, text: 'Prix à t' }
            },
        }
    },
});
console.log(`
    Prix offre-Demande: ${price}
    offre: ${offer}
    demande: ${demand} 
    `);
