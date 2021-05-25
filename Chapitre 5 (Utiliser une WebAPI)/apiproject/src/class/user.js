export default class User{
    constructor(id, username, firstname, lastname, email, password, phone, userStatus){
      this.id = id;
      this.username = username;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.userStatus = userStatus;
    }
  }