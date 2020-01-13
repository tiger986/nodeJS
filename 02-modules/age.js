const Age = {
    age: '',
    setAge(age){
        this.age = age;
    },
    getAge(){
        return this.age
    }
}

//module.exports = Name

module.exports = {
    set: Age.setAge,
    get: Age.getAge
}