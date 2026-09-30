
document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();
    let error = document.getElementById("error");
    if (name === "" || email === "" || msg === "") {
        e.preventDefault(); // Dừng không cho gửi
        error.textContent = "Vui lòng nhập đầy đủ tất cả các thông tin!";
    } else {
        error.textContent = "";
        alert("Gửi thông tin thành công!");
    }
});