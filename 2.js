function thisUsername(username) {
    // Huruf dari a sampai z
    var lowercase = /[a-z]/g;
    
    // check panjang string dan memastikan karater yang ditemukan sama dengan panjang string
      if(username.length == 5 && username.match(lowercase).length == username.length) {
          return true;
      }
      return false;
  }
  
  function is_password_valid(password) {
    // angka dari 0 sampai 9
    var numberRe = /\^d{2}/g;
    
    // karater unik @&
    var specialRe = /[@&]/g;

    // huruf besar A sampai Z
    var uppercaseRe = /[A-Z]/g;
      
  
    if(password.length == 8
       && numberRe.test(password)
       && specialRe.test(password)
       && uppercaseRe.test(password)) {
       return true;
    }
  
    return false;
  }