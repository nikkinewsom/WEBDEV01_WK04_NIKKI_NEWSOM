export const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return 'Oops. Try again. ${percentage}% | ${score}/${possible}'
    } else {
        return 'Way to go, you passed! ${percentage}% | ${score}/${possible}'
    }
}

export const welcome = () => {
    console.clear()
    console.log('Micro Quiz.')
    console.log('')
}
