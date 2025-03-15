import chalk from 'chalk';
import readline from 'readline';

// color, color-code mapping dictionary
const colorCode = {
    white: '#FFFFFF',
    green: '#00FF00',
    red: '#FF0000',
    yellow: '#FFFF00',
    blue: '#0000FF',
    orange: '#FFA500'
};

class Cube {
    constructor(id, color) {
        this.id = id;
        this.color = color;
    }

    get code() {
        return colorCode[this.color];
    }
}

const cubes = [
    new Cube(1, 'white'),
    new Cube(2, 'white'),
    new Cube(3, 'white'),
    new Cube(4, 'white'),
    new Cube(5, 'white'),
    new Cube(6, 'white'),
    new Cube(7, 'white'),
    new Cube(8, 'white'),
    new Cube(9, 'white'),
    new Cube(10, 'green'),
    new Cube(11, 'green'),
    new Cube(12, 'green'),
    new Cube(13, 'green'),
    new Cube(14, 'green'),
    new Cube(15, 'green'),
    new Cube(16, 'green'),
    new Cube(17, 'green'),
    new Cube(18, 'green'),
    new Cube(19, 'red'),
    new Cube(20, 'red'),
    new Cube(21, 'red'),
    new Cube(22, 'red'),
    new Cube(23, 'red'),
    new Cube(24, 'red'),
    new Cube(25, 'red'),
    new Cube(26, 'red'),
    new Cube(27, 'red'),
    new Cube(28, 'yellow'),
    new Cube(29, 'yellow'),
    new Cube(30, 'yellow'),
    new Cube(31, 'yellow'),
    new Cube(32, 'yellow'),
    new Cube(33, 'yellow'),
    new Cube(34, 'yellow'),
    new Cube(35, 'yellow'),
    new Cube(36, 'yellow'),
    new Cube(37, 'blue'),
    new Cube(38, 'blue'),
    new Cube(39, 'blue'),
    new Cube(40, 'blue'),
    new Cube(41, 'blue'),
    new Cube(42, 'blue'),
    new Cube(43, 'blue'),
    new Cube(44, 'blue'),
    new Cube(45, 'blue'),
    new Cube(46, 'orange'),
    new Cube(47, 'orange'),
    new Cube(48, 'orange'),
    new Cube(49, 'orange'),
    new Cube(50, 'orange'),
    new Cube(51, 'orange'),
    new Cube(52, 'orange'),
    new Cube(53, 'orange'),
    new Cube(54, 'orange')
];

const drawIndices = [0,1,2,9,10,11,18,19,20,27,28,29,36,37,38,45,46,47,3,4,5,12,13,14,21,22,23,30,31,32,39,40,41,48,49,50,6,7,8,15,16,17,24,25,26,33,34,35,42,43,44,51,52,53];

function drawCubes(cubes, drawIndices) {
    // ***|***|***|***|***|***
    // ***|***|***|***|***|***
    // ***|***|***|***|***|***
    console.log();

    const maxRawCount = 3;
    for(let i=0; i<maxRawCount; i++){
        const maxSurfaceCount = 6;
        let line = '';
        for(let j=0; j<maxSurfaceCount; j++){
            const maxColCount = 3;
            for(let k=0; k<maxColCount; k++){
                const index = i*maxSurfaceCount*maxColCount + j*maxColCount + k;
                const drawIndex = drawIndices[index];
                const cube = cubes[drawIndex];
                line += chalk.hex(cube.code)('*');
            }
            line += '|';
        }
        line = line.slice(0, -1);
        console.log(line);
    }
    console.log();
}

function updateGameState(turnCount) {
    console.log(`Turn count: ${turnCount}`);
    drawCubes(cubes, drawIndices);
    tickGame(turnCount);
}

function tickGame(turnCount) {
    turnCount++;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Press ENTER to continue or type \'exit\' to exit.\n', (input) => {
        rl.close();
        if (input.toLowerCase() === 'exit') {
            console.log('Game exited.');
            process.exit(0);
        } else {
            updateGameState(turnCount);
        }
    });
}

function startGameLoop() {
    tickGame(0);
}

startGameLoop();
