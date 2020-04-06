function differenz(alter1, alter2) {
  const a1 = document.getElementById("alter1").value;
  const a2 = document.getElementById("alter2").value;
  const differenz = a1 - a2;

  document.getElementById("ergebniss").innerText = differenz;
}
