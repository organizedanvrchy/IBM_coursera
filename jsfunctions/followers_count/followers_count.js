let count = 0;

function increaseCount() {
    count++;
    displayCount();     // hoisted function
    checkCountValue();  // hoisted function
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if(count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if(count === 20) {
        alert("Your Instagram post gained 20 followers! Awesome!");
    }
}

function resetCount() {
    if(count > 0) {
        count = 0;
        document.getElementById('countDisplay').innerHTML=count;
        alert("Followers count has been reset.");
    }
}