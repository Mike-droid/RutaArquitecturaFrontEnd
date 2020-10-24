//*Estrucutra de las promesas

const somethingWillHappen = () => {
    return new Promise((resolve, reject)=> true? resolve('Hey!') : reject('Ups!'))
}

somethingWillHappen()
    .then(response=>console.log(response))
    .catch(error=>console.error(error))

const somethingWillHappen2 = () =>{
    //!Promise es con 'P' mayúscula porque es una palabra reservada de JS
    //!Es importante poner new Error porque nos arrojará mucha información y podremos hacer
    //! un mejor debug
    return new Promise((resolve,reject) => true ? setTimeout(() => resolve('true'),3000) : reject(error))
}

somethingWillHappen2()
    .then(response=>console.log(response))
    .catch(error=>console.error(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(error => {
        console.error(error)
    })