const Name = {
    name: '',
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name
    }
}

//module.exports = Name

module.exports = {
    set: Name.setName,
    get: Name.getName
}