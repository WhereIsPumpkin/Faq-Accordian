const arrowList = document.querySelectorAll("#arrow");
const answerList = document.querySelectorAll(".questionbox p");
const questionList = document.querySelectorAll(".questionbox h2");


arrowList.forEach((arrow, index) => {
  
  let isOpen = false;
  arrow.addEventListener("click", () => {
    if (isOpen) {
      answerList[index].classList.add("hide");
      questionList[index].style.color = "";
      questionList[index].style.fontWeight = "";
      isOpen = false;
    } else {
      answerList[index].classList.remove("hide");
      questionList[index].style.color = "#1E1F36";
      questionList[index].style.fontWeight = "700";

      for (let i = 0; i < answerList.length; i++) {
        if (i !== index) {
          answerList[i].classList.add("hide");
          questionList[i].style.color = "";
          questionList[i].style.fontWeight = "";
        }
      }
      isOpen = true;
    }
  });
});
