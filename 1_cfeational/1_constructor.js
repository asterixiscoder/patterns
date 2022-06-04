// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }
//
// Server.prototype.getUrl = function (){
//     return `https://${this.ip}:80`
// }

class Server{
    constructor(name, ip) {
    this.name = name
    this.ip = ip
    }
    getUrl() {
    return `https://${this.ip}:80`
}
}

const aws = new Server('AWS German', '82.58.26.35')
console.log(aws.getUrl())
console.log(aws);