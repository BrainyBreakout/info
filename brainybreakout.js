function registerAccount() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Voer hier server-side registratielogica uit (bijvoorbeeld met behulp van AJAX).

  // Voor nu loggen we de gegevens naar de console.
  console.log("Gebruikersnaam:", username);
  console.log("E-mail:", email);
  console.log("Wachtwoord:", password);
}
