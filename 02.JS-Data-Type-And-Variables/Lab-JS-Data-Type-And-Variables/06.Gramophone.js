function gramophone(bandName,albumName,songName){
    let duration = 	(albumName.length * bandName.length) * songName.length / 2;
    let oneFullRotation = 2.5;
    let rotations = Math.ceil(duration / oneFullRotation);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
/*
The plate was rotated 167 times.
*/
gramophone('Rammstein', 'Sehnsucht', 'Engel');
/*
The plate was rotated 81 times.
*/