// if else 
var nilai: number = 79;


if (nilai >=90){
    console.log("Grade A");
}else if(nilai >=60){
    console.log("Grade B");
}else {
    console.log("Grade C");
}

var hero: string  = "Yuzhong"
switch(hero){
    case "Nana":
        console.log("Hero Kesukaan");
        break
    case "Zilong":
        console.log("Sodaranya");
        break
    default:
        console.log("mbah buyut");
}

const Ipk: Number[] = [2, 2, 3, 4];
for (let i = 0; i < Ipk.length; i++){
    if (i == 3) {
        console.log('nilai indexing ke 3 : ${Ipk[i}');
    }
}