class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dinesh`
    }

    set password(value){
        this._password = value
    }
}

const dinesh = new User("dp@dinesh.ai", "abc")
console.log(dinesh.email);
