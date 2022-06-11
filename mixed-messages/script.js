const factOne = "There are over 318 billion different possible positions after four moves each."
const factTwo = "During World War II, some of the top Chess players were also code breakers. British masters Harry Golombek, Stuart Milner-Barry and H. O'D. Alexander was on the teamwhich broke the Nazi Enigma code."
const factThree = `The word "Checkmate" in Chess comes from the Persian phrase "Shah Mat," which means"the King is dead.`
const factFour = "The longest chess game theoretically possible is 5,949 moves."
const factFive = "A computer called DeepThought became the first computer to beat an international grandmaster in November 1988, Long Beach, California."
const factSix = "The folding chessboard was invented by a priest who was forbidden to play chess. The priest found a way around it by making a folding chessboard. When folded together and put ona bookshelf, it simply lookslike two books."
const factSeven = "If you put one grain of wheat on the first square of the chessboard, two on the second, four on the third, eight on the fourth, and so on, how many grains of wheat do you need to put on the 64th square? The answer is 9,223,372,036,8 54,775,808(appr oximately 9.22x10 18 ) grains of wheat."
const factEight = "The new pawn move, where pawns were allowed to advance two squares on its first move instead of one, was first introduced in Spain in 1280."
const factNine = "The longest chess game ever was I.Nikolic - Arsovic, Belgrade 1989, which ended in 269 moves. The game was a draw."
const factTen = "Kirk and Spock have played chess three times on the show Star Trek. Kirk won all three games."

funFacts = [factOne, factTwo, factThree, factFour, factFive, factSix, factSeven, factEight, factNine, factTen]

const submitButton = document.getElementById("submitButton")
const factBlock = document.getElementById("factBlock")

submitButton.addEventListener("click", event => {
    let randomIndex = Math.floor(Math.random() *10)
    factBlock.innerHTML = funFacts[randomIndex]
})

