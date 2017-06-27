var phones = [['Galaxy S8', '299.99','689.99', '884.99'], ['IPhone 7 Plus','348.99','668.99','Invalid'],[ 'LGG6','199.99','299.99','619.99'],[  'Galaxy S7','0','149.99','489.99'],[ 'Moto G5','0','0','0']]

console.log(phones[0][0])

function GalaxyS8Select(){
    document.getElementById("phoneName").innerHTML = phones[0][0];
    
    document.getElementById("phonePrice").innerHTML = phones[0][1];
    document.getElementById("phoneImage").src = "Images/samsunggalaxys8.png";
}

function IPhone7Select(){
    document.getElementById("phoneName").innerHTML = phones[1][0];
    document.getElementById("phonePrice").innerHTML = phones[1][1];
     document.getElementById("phoneImage").src = "Images/iphone7plus.png";
}

function LGG6Select(){
    document.getElementById("phoneName").innerHTML = phones[2][0];
    document.getElementById("phonePrice").innerHTML = phones[2][1];
    document.getElementById("phoneImage").src = "Images/lgg6.png";
    
}

function GalaxyS7Select(){
    document.getElementById("phoneName").innerHTML = phones[3][0];
    document.getElementById("phonePrice").innerHTML = phones[3][1];
    document.getElementById("phoneImage").src = "Images/samsunggalaxys7.png";
}

function MotoG5Select(){
    document.getElementById("phoneName").innerHTML = phones[4][0];
    document.getElementById("phonePrice").innerHTML = phones[4][1];
    document.getElementById("phoneImage").src = "Images/motog5.png";
}


