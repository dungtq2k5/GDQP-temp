let btn = document.getElementById("btn");
let answer = document.getElementById("answer");

btn.addEventListener("click", () => {
  if(answer.hidden) {
    answer.hidden = false;
    btn.innerText = "Đóng đáp án";
    return;
  }

  answer.hidden = true;
  btn.innerText = "Xem đáp án";
});