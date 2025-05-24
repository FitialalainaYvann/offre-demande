import { f_eco } from "./funcEco.js"

export function rungKatta4( h: number , p0: number, t0: number, n: number): number[] {

    let t_values: number[] = [t0];
    let P_values: number[] = [p0];

        for (let i: number= 0; i<n; i++){
    
            const k1 = h*f_eco(P_values[i]);
            const k2 = h*f_eco(P_values[i]+k1/2);
            const k3 = h*f_eco(P_values[i]+k2/2);
            const k4 = h*f_eco(P_values[i]+k3);
    
            P_values[i+1] = P_values[i] + 1/6*(k1 + 2*k2 + 2*k3 + k4); 
            t_values[i+1] = t_values[i] + h;
        }
    
    return P_values 
}

