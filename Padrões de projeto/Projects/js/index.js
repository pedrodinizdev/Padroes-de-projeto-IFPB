let health = 200;
let isDead = false;
let screamAudio = new Audio("audio/bonk_BEtiM8g.mp3");
let deathAudio = new Audio("audio/Homer_scream.mp3")
// lalalala

function resetEnemyFace() {
    imagePlayerFace.src="img/happy.png";
}

function revive() { 
    health = 200;
    divHealthBar.style.width = health + "px"
    imagePlayerFace.src="img/happy.png";
    isDead = false;
}

function AttackEnemy(){
    health -= 40;
    divHealthBar.style.width = health + "px";
    if (health <= 0) {
        imagePlayerFace.src="img/dead.png";
        if(!isDead) {
            deathAudio.play();
            isDead = true;
            setTimeout(revive, 5000);
        }
    }
    else {
        screamAudio.play();
        imagePlayerFace.src = "img/aw.png";
        setTimeout(resetEnemyFace, 1000);
    }
}

btAttackEnemy.onclick = AttackEnemy;