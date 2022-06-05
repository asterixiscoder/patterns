class User {
    constructor(name) {
        this.name = name
        this.room = null
    }
    send(message, to){
        this.room.send(message, this, to)
    }
    recive(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor(){
        this.users = {}
    }
    register(user){
        this.users[user.name] = user
        user.room = this
    }
    send(message, from, to){
        if(to){
            to.recive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].recive(message, from)
                }
            })
        }
    }
}

const max = new User('Max')
const vlad = new User('Vlad')
const lee = new User('Lee')

const room = new ChatRoom()

room.register(max)
room.register(vlad)
room.register(lee)

max.send('Hello', lee)
lee.send('Hello, Max', max)
vlad.send('Hello,all!!')