function setup() {//線上換processing to p5.js
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}
var choice;///-1:沒選, 0:choise 1
function draw() {
    background(color(0xE0, 0xB2, 0xFF));// 背景色紫
    fill(color(0xA3, 0xA2, 0xFA));// 字的顏色藍
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    text("中餐吃泡麵", 50, 50);
    text("中餐吃UberEat", 50, 100);
    text("中餐吃FoodPanda", 50, 150);
}
function mousePressed() {
   choice = int(random(3)); // 隨機,int取整數
}
function initializeFields() {
    choice = -1;
}
