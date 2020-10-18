const person = () =>{
    var saveName = "Name"
    return {
        getName: () => {return saveName},
        setName: (name) => {saveName = name}
    }
}

let newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Miguel')
console.log(newPerson.getName())