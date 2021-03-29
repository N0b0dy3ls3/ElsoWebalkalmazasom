let data = [{ photo: 'WeboldalKépek/1.jpg', title: 'Mohás szobrok', description: 'Mohás szobrok'},
{ photo: 'WeboldalKépek/2.jpg', title: 'Templom a sziklában', description: 'Templom a sziklában'},
{ photo: 'WeboldalKépek/3.jpg', title: 'Dalai Láma', description: 'Dalai Láma'},
{ photo: 'WeboldalKépek/4.jpg', title: 'Olvasó szerzetes', description: 'Olvasó szerzetes'},
{ photo: 'WeboldalKépek/5.jpg', title: 'Meditáló lányok', description: 'Meditáló lányok'},
{ photo: 'WeboldalKépek/6.jpg', title: 'Templomkert', description: 'Templomkert'},
{ photo: 'WeboldalKépek/7.jpg', title: 'Virágszírmok', description: 'Virágszírmok'},
];

let currentPhoto = 0;

$('.fokep').attr('src', data[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('.fokep').attr('src', data[photoNumber].photo);
}
//A bal nyilnál 2X kell klikkelni, hogy a végére ugorjon! Javítani!
$('.balNyil').click (() => {
    if(currentPhoto > 0) {
        currentPhoto --;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = data.length;
        loadPhoto(currentPhoto);
    }   
})

$('.jobbNyil').click (() => {
    if(currentPhoto > 5) {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto ++;
        loadPhoto(currentPhoto);
    }   
})

data.forEach((item, index) => {
    $('.alsoResz').append(`<img class="thumbnails" data-number="${index}"
    img src="${item.photo}" alt="${item.title}">
    </img>`);

    $('.thumbnails').click((event) => {

        let ind = parseInt($(event.target).attr('data-number'));
        //loadImage(ind);
        //loadPhoto = (data[ind].photo);
        console.log(ind);
        $('.fokep').attr('src', data[ind].photo);
        console.log(data[ind].title);
        //$('.fokep').attr('src', data[ind].title);
    });
});

/*
{ photo: 'WeboldalKépek/8.jpg', title: 'Olvasó szerzetes II', description: 'Olvasó szerzetes II'},
{ photo: 'WeboldalKépek/9.jpg', title: 'Imamalmok', description: 'Imamalmok'},
{ photo: 'WeboldalKépek/10.jpg', title: 'Fény ünnepe, talán', description: 'Fény ünnepe, talán'},
{ photo: 'WeboldalKépek/11.jpg', title: 'Gyerek szerzetesek', description: 'Gyerek szerzetesek'},
{ photo: 'WeboldalKépek/12.jpg', title: 'Ifjú szerzetes', description: 'Ifjú szerzetes'}
*/
/*

data.forEach((item, index) => {
    $('.thumbnails').append(<img class="thumbnails"></img>);
    
    $('.box').click((event) => {
        console.log(index);
        $('.thumbnails').click((event) => { let indexClicked = $(event.target).attr('src', data[index].photo);
        let numberIndex = parseInt(indexClicked);

        $('.thumbnails').text(data[indexClicked]);

        
});

});
*/
/*

//$('.thumbnails').attr('src', data[1].photo);
 $('.listaElemek').prepend('<li>' + csinaldLista +'<button class="gomb2">' + 'Kész!' + '</button>' + '</li>');
$('.alsoResz').append(`<img class="thumbnails"˛</img>`);
data-index='${index}'>${item} '${index}')</div>`);

let data = ["first", "second", "third"];`

data.forEach((item, index) => {
  $('#container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
  });
});



$('.balNyil').click (() => {
    if(currentPhoto > 0) {
        currentPhoto --;
        $('.fokep').attr('src', data[currentPhoto].photo);
    } else {
        currentPhoto = 11;
        $('.fokep').attr('src', data[currentPhoto].photo);
    }   
})

$('.jobbNyil').click (() => {
    if(currentPhoto > 11) {
        currentPhoto = 0;
        $('.fokep').attr('src', data[currentPhoto].photo);
    } else {
        currentPhoto ++;
        $('.fokep').attr('src', data[currentPhoto].photo);
    }   
})
*/