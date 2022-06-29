(function(){


    // flights containers
    const $articleContainers = [...document.querySelectorAll('.flights article')]
    const $divContainers = [...document.querySelectorAll('.flights-container')]
    const containers = []
    
    // group containers
    for (const i in $articleContainers) {
        containers[i] = [
            $articleContainers[i],
            $divContainers[i]
        ]
    }

    // set container
    const setContainer = (indicator) => {
        for (i in containers) {
            if (indicator == i) {

                if (!(containers[i][1].classList.contains('flights-container--active'))) {
                    containers[i][0].style.width = '80%'
                    containers[i][0].style.height = 'max-content'
                    containers[i][1].classList.add('flights-container--active')
                }
                
            }
            else {
                containers[i][0].style.width = '30%'
                containers[i][1].classList.remove('flights-container--active')
                
            }
        }
    }
    
    // add event to containers
    for (const i in containers) {
        let article = containers[i][0]
        article.addEventListener('click', () => {
            setContainer(i)
        })
    }
}())