
var colors = Object.values(allColors())

var defaultDNA = { 
    "bodyColor" : 10,
    "bellyColor" : 13,
    "finColor" : 10,
    "hatType" : 1, 
    "designType" : 1,
}

// when page load
$( document ).ready(function() {
    renderCat(defaultDNA)
});

function defaultCat(){
    renderCat(defaultDNA)
}

function randomDNA(){
    var dnaStr = String(Math.floor(Math.random()*1E16))
    //Colors
    var dna = { 
    "bodyColor" : dnaStr.substring(0, 2),
    "bellyColor" : dnaStr.substring(2, 4),
    "finColor" : dnaStr.substring(4, 6),
    "hatType" : dnaStr.substring(6, 7) % 3 + 1,
    "designType" : dnaStr.substring(7, 8) % 3 + 1,
    }
    return dna
}

//Random fish DNA
function randomCat(){
 var dna = randomDNA()   
    //Rendering fish
   renderCat(dna)
}

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnabelly').html()
    dna += $('#dnafin').html()
    dna += $('#dnahat').html()
    dna += $('#dnadesign').html()

    return dna
}

function renderCat(dna){
    bodyColor(colors[dna.bodyColor],dna.bodyColor)
    $('#bodycolor').val(dna.bodyColor)
    bellyColor(colors[dna.bellyColor],dna.bellyColor)      
    $('#bellycolor').val(dna.bellyColor)
    finColor(colors[dna.finColor],dna.finColor)
    $('#fincolor').val(dna.finColor)
    hatVariation(dna.hatType)
    $('#hattype').val(dna.hatType)
    designVariation(dna.designType)
    $('#designtype').val(dna.designType)
}

// Changing fish colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    bodyColor(colors[colorVal],colorVal)    
})

$('#bellycolor').change(()=>{
    var colorVal = $('#bellycolor').val()
    bellyColor(colors[colorVal],colorVal)  
})

$('#fincolor').change(()=>{
    var colorVal = $('#fincolor').val()
    finColor(colors[colorVal],colorVal) 
})

$('#hattype').change(()=>{
    var decoration = parseInt($('#hattype').val())    
    hatVariation(decoration)
})

$('#designtype').change(()=>{
    var decoration = parseInt($('#designtype').val())    
    designVariation(decoration)
})