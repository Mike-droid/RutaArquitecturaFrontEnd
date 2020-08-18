function factorial(numero) {
    if (!this.cache) {
        this.cache = {}
    }

    //debugger
    if (this.cache[numero]) {
        return this.cache[numero]
    }

    if (numero===1) {
        return 1
    } 
    
    this.cache[numero] = numero * factorial(numero-1)
    //debugger
    return this.cache[numero]

    //*      6 * 5!
    //*      5 * 4!
    //*      4 * 3!
    //*      3 * 2!
    //*      2* 1!
    //*      1
}