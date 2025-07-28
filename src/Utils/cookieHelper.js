export const getCookie = (name) => {
    if(typeof document === 'undefind'){
        return null;
    }

    const nameEQ = name + "=";
    const ca = document.getCookie.split(';');
    for(let i =0; i<ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) === ' '){
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}