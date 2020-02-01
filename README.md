# Unit-4-Game

A fighting game in which you play as one of your choice of four of the Avengers (Black Widow, Hawkeye, Captain America, or Iron Man) and then fight the remaining three enemies with your character. Each character has a different health (displayed underneath their picture on their card), a different power level for attacking as a player character, and a different power level for attacking as the enemy. Each time you attack an enemy, your attack power increases by the base attack power. After you either win or lose, a reset button appears so you can play again.

## Installation

You can use Git Bash to clone the repository onto your computer by entering the following in Git Bash:
```git clone https://github.com/juniperhaven/unit-4-game.git```
After doing so, open the folder you've downloaded, right click 'index.html' and open in your browser of choice.

Alternately, the project is hosted on Git Pages at https://juniperhaven.github.io/unit-4-game/

## Usage
When the page loads, you will be presented with a lineup consisting of Hawkeye, Black Widow, Captain America, and Iron Man. Each will have their health listed under their picture on their character box:

![pageload](https://imgur.com/fKrYrNj.png)

To select your character, simply click on the box of the character you want. Once you do so, your character will be moved to the 'Your Character' space, and all other remaining characters will be moved to 'Enemies Available to Attack':

![selected](https://imgur.com/uBeeqB0.png)

To select the first enemy you would like to fight, click on one of the characters in 'Enemies Available to Attack' and that character will be moved to the 'Defender' space:

![defending](https://imgur.com/XA1t5pP.png)

Each character has a power level, and they differ for when you are playing the character vs. when the character is an enemy attacking you. When you click the 'attack' button, you attack the current defender for your character's power level, and they attack you for their power level:<br>

![attackphase](https://imgur.com/laPbtJ9.png)<br>

Your attack power will increase by the initial attack power each turn; so for instance, if you're playing as Black Widow, who has an attack power of 12, your attack power will go up by 12 each turn, eventually leading you to be exponentially more powerful than the enemies:<br>

![increasedpower](https://imgur.com/rAA25vs.png)<br>

For this reason, it's better to start off picking an enemy with less health than you so you can build up your power level while fighting them.
When you defeat an enemy, you will be told you've defeated that enemy, and you may now select a new enemy by clicking on another character listed under 'Enemies Available to Fight':

![beathawk](https://imgur.com/UCMA46B.png)

At the end of the game, if you've won, you will be told you won and be given a reset button:

![youwin](https://imgur.com/jHdgffi.png)

If you click the reset button, you will be taken back to the initial screen, where you may select the same character or a new character to play.
If your health drops to or below 0, you lose, and will be told you have been defeated, and will be given the same reset button:

![youlose](https://imgur.com/bc7qtFm.png)