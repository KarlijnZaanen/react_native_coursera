// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    const message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    const fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler(
    color='#1d5c63',
    background='#ede6db',
    fontsize='40px',
    txt='Congrats!');
    
celebrateStyler(reason="birthday") 


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate(
    color='ef7c8e',
    background='fae8e0',
    fontSize='30px',
    txt='You made it!',
    reason='champions');
