(function(){

  // sliders
  const sliders = [...document.querySelectorAll('.comment')]
  let value

  // buttons
  const buttonBack = document.querySelector('#button-back')
  const buttonNext   = document.querySelector('#button-next')
  
  // back button function
  buttonBack.addEventListener('click', () => {
    changePosition(-1)
    console.log(1)
  })
  
  // next button function
  buttonNext.addEventListener('click', () => {
    changePosition(1)
  })

  // change position
  const changePosition = (add) => {
    const currentTestimony = document.querySelector('.comment--show').dataset.id

    // set pos value
    value = Number(currentTestimony)
    value += add
    if (value === sliders.length+1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    // remove show
    sliders[Number(currentTestimony)-1].classList.remove('comment--show')

    // add show
    sliders[value-1].classList.add('comment--show')
  }

}())