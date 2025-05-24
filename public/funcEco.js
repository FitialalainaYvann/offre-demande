//fonction demande
export function demandFunc(P) {
    return 1000 / P;
}
//fonction offre
export function offerFunc(P) {
    return 10 * Math.pow(P, 2);
}
//modèle dynamique entre offre-demande
export function f_eco(P) {
    const alpha = 0.01;
    return alpha * (demandFunc(P) - offerFunc(P));
}
