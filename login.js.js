document.getElementById("loginform").aadEventListener("submit", function(e)
{
  e.preventDefault();
  
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value;
  
  const storeRaw = localStorage.getItem(loginEmail);
  const storeRaw = storeRaw ? JSON.parse(storeRaw) : null;
  
  if (storeUser && storedUser.password == loginPassword){
    localStorage.setItem("curentUser"), loginEmail);
    alert("Login Berhasil. Halo " + storeUser.nama + "!");
  }else{
    alert("Login gagal email atau password salah!!!")
  }
});