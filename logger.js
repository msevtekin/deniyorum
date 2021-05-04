var urla = 'http://logger.io/logger';
var name ='Mert Doğukan Sevtekin';
var age=0;

var alperinYasi = 24;


function log(message){
    console.log(message);
}

module.exports = {
    name : name,
    log : log,
    age : age,
    alperinYasi : alperinYasi
    
}




module.exports.urla = urla;  // Şuanda private yorum satırında çünkü
module.exports.log = log;  //Bu şekilde public yapıyoruz ve diğer cllaslardan
// ulaşılabiliriz hale getirmiş bulunuyoruz

