//fonction demande
export function demandFunc(P: number): number{
    return 1000/P
}

//fonction offre
export function offerFunc(P: number): number{
    return 10*P**2
}
//modèle dynamique entre offre-demande
export function f_eco<T extends number>(P: T): T{
    const alpha: number= 0.01
    return alpha * (demandFunc(P) - offerFunc(P)) as T
}
