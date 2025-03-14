class User {
    private firstName: string;
    private lastName: string;
    protected email: string;
    private password: string;

    constructor(firstName:string, lastName:string, email:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = this.generatePassword();
    }

    //Een getFullName() methode die de volledige naam van de gebruiker retourneert.
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //Een resetPassword() methode die een nieuw wachtwoord genereert.
    resetPassword() {
        const newPassword = this.generatePassword();
        this.password = newPassword;
        return "Wachtwoord succesvol gereset.";
    }

    //Een showUserInfo() methode die informatie over de gebruiker toont, behalve het wachtwoord.
    showUserInfo() {
        console.log(`Name: ${this.firstName} ${this.lastName}`)
        console.log(`Email: ${this.email}`);
    }

    setPassword(password: string) {
        if (this.isValidPassword(password)) {
            this.password = password;
            return "Wachtwoord succesvol ingesteld.";
        } else {
            return "Wachtwoord voldoet niet aan de vereisten.";
        }
    }

    isValidPassword(password: string) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%]).{8,}$/; //AANPASSEN
        return regex.test(password);
    }

    // Een generatePassword() methode die een nieuw wachtwoord genereert AANPASSEN
    generatePassword(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "@#$%";
        
        // Voeg 1 karakter toe van elke categorie
        let password = "";
        password += letters.charAt(Math.floor(Math.random() * letters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        
        // Voeg tussen de 5 en 10 extra tekens toe
        const allChars = letters + numbers + specialChars;
        const passwordLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        for (let i = 0; i < passwordLength; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return password;
    }
}

const user1 = new User("John", "Doe", "john@example.be");
const user2 = new User("Jane", "Smith", "jane@example.be");

console.log('Log user info:')
user1.showUserInfo();
console.log('----------');
console.log('Log user info:')
user2.showUserInfo();
console.log('----------');
console.log('getFullName:')
console.log(user1.getFullName());
console.log('----------');
console.log(user1.resetPassword());
console.log('----------');
console.log(user1.setPassword((user1.generatePassword())));