
function setup() {
    initializeFields();
    // random亂數抽籤
    createCanvas(400, 300);
    textSize(40);
}

// /-1:沒選, 0:choise 1
var choice;

function draw() {
    // draw()畫//每秒會畫60次
    // 背景色紫
    background(color(0xE0, 0xB2, 0xFF));
    // 字的顏色藍
    fill(color(0xA3, 0xA2, 0xFA));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    text("Choise 1", 50, 50);
    text("Choise 2", 50, 100);
    text("Choise 3", 50, 150);
}

function mousePressed() {
    // 滑鼠按一下
    // 隨機,int取整數
    choice = int(random(3));
// choice = (choice + 1)%3 照順序
}

function initializeFields() {
    choice = -1;
}
