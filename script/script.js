document.addEventListener('DOMContentLoaded', function () {
  const btnOpenModal = document.getElementById('btnOpenModal')
  const modalBlock = document.getElementById('modalBlock')
  const closeModal = document.getElementById('closeModal')
  const questionTitle = document.getElementById('question')
  const formAnswers = document.getElementById('formAnswers')

  openFuncModal = function () {
    modalBlock.classList.toggle('d-block')
    playTest()
  }
  closeFuncModal = function () {
    modalBlock.classList.toggle('d-block')
  }
  playTest = function () {
    const renderQuestions = () => {
      questionTitle.textContent = 'Якого коліру ви бажаєте бургер?'
      formAnswers.innerHTML = `<div class="answers-item d-flex flex-column">
      <input type="radio" id="answerItem1" name="answer" class="d-none">
      <label for="answerItem1" class="d-flex flex-column justify-content-between">
        <img class="answerImg" src="./image/burger.png" alt="burger">
        <span>Стандарт</span>
      </label>
    </div>
    <div class="answers-item d-flex justify-content-center">
      <input type="radio" id="answerItem2" name="answer" class="d-none">
      <label for="answerItem2" class="d-flex flex-column justify-content-between">
        <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
        <span>Черный</span>
      </label>
    </div>`
    }
    renderQuestions()
  }

  btnOpenModal.addEventListener('click', openFuncModal)
  closeModal.addEventListener('click', closeFuncModal)
})
