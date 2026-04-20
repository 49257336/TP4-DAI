
export function devolverHora(){
    const hora = new Date();
    return `${hora.getHours()} : ${hora.getMinutes()}`;
}
export function fecha(){
    const date = new Date();
    return date.toLocaleString();
}

