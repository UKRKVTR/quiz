document.addEventListener('DOMContentLoaded', function () {
  const btnOpenModal = document.getElementById('btnOpenModal')
  const modalBlock = document.getElementById('modalBlock')
  const closeModal = document.getElementById('closeModal')
  const questionTitle = document.getElementById('question')
  const formAnswers = document.getElementById('formAnswers')
  const nextBtn = document.getElementById('next')
  const prevBtn = document.getElementById('prev')

  const questions = [
    {
      question: 'Какого цвета бургер?',
      answers: [
        {
          title: 'Стандарт',
          url: '../image/burger.png'
        },
        {
          title: 'Черный',
          url: '../image/burgerBlack.png'
        }
      ],
      type: 'radio'
    },
    {
      question: 'Из какого мяса котлета?',
      answers: [
        {
          title: 'Курица',
          url: '../image/chickenMeat.png'
        },
        {
          title: 'Говядина',
          url: '../image/beefMeat.png'
        },
        {
          title: 'Свинина',
          url: '../image/porkMeat.png'
        }
      ],
      type: 'radio'
    },
    {
      question: 'Дополнительные ингредиенты?',
      answers: [
        {
          title: 'Помидор',
          url: '../image/tomato.png'
        },
        {
          title: 'Огурец',
          url: '../image/cucumber.png'
        },
        {
          title: 'Салат',
          url: '../image/salad.png'
        },
        {
          title: 'Лук',
          url: '../image/onion.png'
        }
      ],
      type: 'checkbox'
    },
    {
      question: 'Добавить соус?',
      answers: [
        {
          title: 'Чесночный',
          url: '../image/sauce1.png'
        },
        {
          title: 'Томатный',
          url: '../image/sauce2.png'
        },
        {
          title: 'Горчичный',
          url: '../image/sauce3.png'
        }
      ],
      type: 'radio'
    }
  ]

  openFuncModal = function () {
    modalBlock.classList.toggle('d-block')
    playTest()
  }
  closeFuncModal = function () {
    modalBlock.classList.toggle('d-block')
  }
  playTest = function () {
    let numberQuestion = 0
    const renderAnswer = index => {
      questions[index].answers.forEach(answer => {
        const answerItem = document.createElement('div')
        answerItem.classList.add('answer-item', 'd-flex', 'flex-column')
        answerItem.innerHTML = `<div class="answers-item d-flex flex-column">
                    <input type="${questions[index].type}" id='${answer.title}' name="answer" class="d-none">
                    <label for='${answer.title}' class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src='${answer.url}' alt="burger">
                        <span>${answer.title}</span>
                    </label>
                    </div>`
        formAnswers.appendChild(answerItem)
      })
    }

    const renderQuestions = indexQuestion => {
      formAnswers.innerHTML = ''
      questionTitle.textContent = `${questions[indexQuestion].question}`

      renderAnswer(indexQuestion)
      if (indexQuestion === 0) {
        prevBtn.style.display = 'none'
      } else {
        prevBtn.style.display = 'block'
      }

      if (indexQuestion === questions.length - 1) {
        nextBtn.style.display = 'none'
      } else {
        nextBtn.style.display = 'block'
      }
    }
    renderQuestions(numberQuestion)

    nextBtn.onclick = () => {
      numberQuestion++
      renderQuestions(numberQuestion)
    }
    prevBtn.onclick = () => {
      numberQuestion--
      renderQuestions(numberQuestion)
    }
  }

  btnOpenModal.addEventListener('click', openFuncModal)
  closeModal.addEventListener('click', closeFuncModal)
})
