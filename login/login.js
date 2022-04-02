const form = document.querySelector("#content .container .form");
const inputEmail = form.querySelector(".input__email");
const inputPassword = form.querySelector(".input__password");
const inputSubmit = form.querySelector(".input__submit");
console.log("🚀 ~ file: login.js ~ line 5 ~ inputSubmit", inputSubmit);
// let title = "";
form.addEventListener("submit", function (event) {
  event.preventDefault();
  inputSubmit.addEventListener("click", function () {
    if (inputEmail.value === "" && inputPassword.value === "") {
      check(
        "Đăng nhập thất bại",
        "6px solid #d90429",
        "#d90429",
        "Bạn chưa nhập Email và mật khẩu"
      );
    } else if (inputEmail.value === "") {
      check(
        "Đăng nhập thất bại",
        "6px solid #d90429",
        "#d90429",
        "Bạn chưa nhập Email"
      );
    } else if (inputPassword.value === "") {
      check(
        "Đăng nhập thất bại",
        "6px solid #d90429",
        "#d90429",
        "Bạn chưa nhập mật khẩu"
      );
    } else if (
      inputEmail.value === "thoainhpc04496@fpt.edu.vn" &&
      inputPassword.value === "pc04496"
    ) {
      check(
        "Đăng nhập thành công",
        "6px solid #06d6a0",
        "#06d6a0",
        "Bạn đã đăng nhập thành công"
      );
      function connectLink() {
        location.href = "../index.html";
      }
      setTimeout(connectLink, 1000);
    } else {
      check(
        "Đăng nhập thất bại",
        "6px solid #d90429",
        "#d90429",
        "Bạn đã nhập sai Email hoặc mật khẩu"
      );
    }
  });
  //   check("Đăng nhập thành công","6px solid #06d6a0","#06d6a0");
});
function check(title, boderLeft, titleColor, desc) {
  const loginNotitemplate = `
        <div class="login-noti">
            <h3 class="title">
            ${title}
            </h3>
            <p class = "desc">${desc}</p>
          </div>
        `;
  document.body.insertAdjacentHTML("beforeend", loginNotitemplate);
  const loginNoti = document.querySelector(".login-noti");
  loginNoti.style.borderLeft = `${boderLeft}`;
  loginNoti.querySelector(".title").style.color = `${titleColor}`;
}