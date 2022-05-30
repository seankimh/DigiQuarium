
// CSS properties to build each cat depending on the DNA


var colors = Object.values(allColors())

function bodyColor(code, id) { 
    var color = colors[code]
    $('#fishtop' + id).css('background', '#' + color)
}

function bellyColor(code, id) {
    var color = colors[code]
    $('#fish' + id).css('background', '#' + color)
}

function finColor(code, id) {
    var color = colors[code]
    $('#side-fin' + id + ', #back-fin' + id).css('background', '#' + color)
}

function hatVariation(num, id) { 
    switch (num) { 
        case "1": 
            $('#hatName' + id).html('None')
            break
        case "2": 
            $('#hatName' + id).html('Top Hat')
            $('#tophat' + id).css({"visibility": "visible"})
            break
        case "3": 
            $('#hatName' + id).html('Christmas Hat')
            $('#cmhat' + id).css({"visibility": "visible"})
            break
    }
}

function designVariation(num, id) { 
    switch (num) {
        case "1":
            $('#designName' + id).html('None')
            break
        case "2":
            $('#designName' + id).html('Bow')
            $('#bow' + id).css({"visibility": "visible"})
            break
        case "3":
            $('#designName' + id).html('Mask')
            $('#mask' + id).css({"visibility": "visible"})
            break
    }
}