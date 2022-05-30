
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
    var color = getColor()
    colors[i] = color
    }
    return colors
}

function bodyColor(color,code) {
    $('.fishtop').css('background', '#' + color)
    $('#bodycode').html('code: '+code)
    $('#dnabody').html(code)
}

function bellyColor(color,code) {
    $('.fish').css('background', '#' + color)
    $('#bellycode').html('code: '+code)
    $('#dnabelly').html(code)
}

function finColor(color,code) {
    $('.side-fin, .back-fin').css('background', '#' + color)
    $('#fincode').html('code: '+code)
    $('#dnafin').html(code)
}

function hatVariation(num) { 
    $('#dnahat').html(num)
    switch(num) { 
        case 1:
            $('#hatName').html('None')
            basic2()
            break
        case 2: 
            $('#hatName').html('Top Hat')
            tophat() 
            break
        case 3: 
            $('#hatName').html('Christmas Hat')
            cmhat() 
            break

    }
}

function designVariation(num) {
    $('#dnadesign').html(num)
    switch (num) {
        case 1: 
            $('#designName').html('None')
            basic()
            break
        case 2:
            $('#designName').html('Bow')
            bow()
            break
        case 3:
            $('#designName').html('Mask')
            mask()
            break
    }
}

function basic() { 
    $('.bow').css("visibility", "hidden")
    $('.mask').css("visibility", "hidden")
}

function bow() { 
    basic()
    $('.bow').css("visibility", "visible")
}

function mask() { 
    basic()
    $('.mask').css("visibility", "visible")
}

function basic2() { 
    $('.tophat').css("visibility", "hidden")
    $('.cmhat').css("visibility", "hidden")
}

function tophat() { 
    basic2()
    $('.tophat').css("visibility", "visible")
}
function cmhat() { 
    basic2()
    $('.cmhat').css("visibility", "visible")
}