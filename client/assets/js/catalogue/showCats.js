
// File for fetching all the cats from smart contrat 
// into the catalogue

//Append each Cat card as a catalog
function appendCat(dna, id, gen) {
    //1 return DNA cat into readable string 
    var KittyDna = catDna(dna)
    //2 build the catBox into HTML
    catBox(id)
    //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catview' + id).attr('onclick', 'go_to("catDetails.html?catId=' + id + '")')
    $('#catDNA' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)
}

//Append cat for breeding
function breedAppend(dna, id, gen, gender) {
    //1 return DNA cat into readable string 
    var KittyDna = catDna(dna)
    //2 build the catBox into HTML    
    catBox(id)
    //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catDNA' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)

    $('#catview' + id).attr('onclick', 'selectBreed("' + dna + '","' + id + '","' + gen + '","' + gender + '")')
}

function selectBreed(dna, id, gen, gender) {

    var KittyDna = catDna(dna)
    //2 build the singleCat into HTML
    var body = catBody(gender)
    var Cattributes = cattributes(gender)
    $('#cattributes' + gender).html(Cattributes)
    $('#' + gender).html(body)
    //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, gender)
    $('#' + gender).addClass('breedSelect')
    $('#' + gender).attr('data-catid', id)
    $('#' + gender).attr('onclick', 'breedKitties("' + gender + '")')
    $('#catDNA' + gender).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4><input class="hidden" id="` + gender + `Id" type="number" value=` + id + `></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)
    $('#catSelection').modal('hide')
    removeSelection(id, gender)
    readyToBredd()
}

function readyToBredd() {

    var mumId = $('#DameId').val()
    var dadId = $('#SireId').val()

    if (!empty(mumId) && !empty(dadId)) {
        $('#breed').css('filter', 'none')
        $('#breed').prop('disabled', false)
        $('#breed').attr('onclick', 'breed("' + dadId + '","' + mumId + '")')
        return true
    }
    $('#breed').prop('disabled', true)
    $('#breed').css('filter', ' grayscale()')
    return false
}

//If user select a selected cat from any gender, its remove it from the selection box
function removeSelection(id, gender) {

    var selectionDiv = `<div align="center">
                                <div class="egg">
                                </div>
                                <h4>Select a fish as `+ gender + `</h4>
                            </div>
                        </div>`

    if (gender == 'Dame') {
        var catData = $('#Sire').attr('data-catid')
        if (catData == id) {
            $('#Sire').attr('data-catid', 0)
            $('#Sire').attr('onclick', 'breedKitties(this.id)')
            $('#Sire').html(selectionDiv)
            $('#Sire').removeClass('breedSelect')
            $('#catDNASire').html('')
        }
    }
    if (gender == 'Sire') {
        var catData = $('#Dame').attr('data-catid')
        if (catData == id) {
            $('#Dame').attr('data-catid', 0)
            $('#Dame').attr('onclick', 'breedKitties(this.id)')
            $('#Dame').html(selectionDiv)
            $('#Dame').removeClass('breedSelect')
            $('#catDNADame').html('')
        }
    }
}

async function singleCat(dna, id, gen) {

    var KittyDna = catDna(dna)
    //2 build the singleCat into HTML
    var body = catBody(id)
    var Cattributes = cattributes(id)
    $('#cattributes').html(Cattributes)
    $('#singleCat').html(body)
    //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catDNA').html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>`+ gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna + `</h4></span>`)
    
    await catOffer(id)
}

// Checks the Kitty on market situation
async function catOffer(id) {

    //Checking if this cat is for Sale
    var offer = await checkOffer(id)
    var seller = offer.seller.toLocaleLowerCase()
    if (offer.onsale == true && seller != user) {
        $('#buyBox').removeClass('hidden')
        $('#priceBtn').html('<b>' + offer.price + ' ETH</b>')
        $('#buyBtn').attr('onclick', 'buyKitten(' + id + ',"' + offer.price + '")')
    }
    
    var ownership = await catOwnership(id)
    //If user owns the cat
    if (ownership == true) {        
        //If is not on sale
        if (offer.onsale == false) {
            $('#sellBox').removeClass('hidden')
            $('#sellBtn').attr('onclick', 'sellCat(' + id + ')')
        } else {
            $('#sellBox').removeClass('hidden')
            $('#cancelBox').removeClass('hidden')
            $('#cancelBtn').attr('onclick', 'deleteOffer(' + id + ')')
            $('#sellBtn').addClass('btn-success')
            $('#sellBtn').html('<b>For sale at:</b>')
            $('#catPrice').val(offer.price)
            $('#catPrice').prop('readonly', true)
        }
    }
}


//Apply cat CSS Styles from buidCat.js

function renderCat(dna, id) {

    bodyColor(dna.bodyColor, id)
    bellyColor(dna.bellyColor, id)
    finColor(dna.finColor, id)
    hatVariation(dna.hatColor, id)
    designVariation(dna.designColor, id)
}

//Splitting the cat DNA to use it in render

function catDna(dnaStr) {


    var dna = {

        "bodyColor": dnaStr.substring(0, 2),
        "bellyColor": dnaStr.substring(2, 4),
        "finColor": dnaStr.substring(4, 6),
        "hatColor": dnaStr.substring(6, 7),
        "designColor": dnaStr.substring(7, 8),

    }

    return dna
}

//Cat HTML Div for catalogue
function catBox(id) {

    var catDiv = `<div class="col-lg-6 pointer fit-content" id="catview` + id + `">
                 <div class="featureBox catDiv">
                 `+ catBody(id) + `                           
                 </div>
                 <div class="dnaDiv" id="catDNA`+ id + `"></div>
                 `+ cattributes(id) + `
                </div>`
    var catView = $('#catview' + id)
    if (!catView.length) {
        $('#catsDiv').append(catDiv)
    }
}


//Simple body of a cat
function catBody(id) {

    var single = 
    
    `<div id="fish`+ id + `" class="fish">

        <div id="fishtop`+ id + `" class="fishtop"></div>

        <div id="side-fin`+ id + `" class="side-fin"></div>

        <div id="back-fin`+ id + `" class="back-fin">
            <div class="back-fin-detail"></div>
            <div class="back-fin-detail fin-detail2"></div>
        </div>

        <div id = "hatdecoration" class="hat_decor">
            <div id="tophat`+ id + `" class="tophat"></div>
            <div id="cmhat`+ id + `" class="cmhat"></div>
        </div>

        <div id="designdecoration" class="access_decor"> 
            <div id="bow`+ id + `" class="bow"></div>
            <div id="mask`+ id + `" class="mask"></div>
        </div>

        <div class="eye"></div>
        <div class="eye eye-right"></div>
        <div class="eyebrow"></div>
        <div class="eyebrow eyebrow-right"></div>
        <div class="mouth"></div>
        <div class="mouthborder"></div>

        <label class="thorn1">V</label>
        <label class="thorn2">v</label>
        <label class="thorn3">V</label>
        <label class="thorn4">v</label>
        <label class="thorn5">V</label>
        <label class="thorn6">v</label>
        <label class="thorn7">V</label>
        <label class="thorn8">v</label>
        <label class="thorn9">V</label>
    </div>`

    return single
}

function cattributes(id) {

    var Cattributes = `<ul class="ml-5 cattributes">
                            <li><span id="hatName`+ id + `"></span></li>
                            <li><span id="designName`+ id + `"></span></li>
                        </ul>`
    return Cattributes


}