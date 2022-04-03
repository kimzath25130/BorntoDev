function process(){
    var num = document.getElementById("a").value;
    var num2 = document.getElementById("b").value;
    var num3 = document.getElementById("c").value;
    var num4 = document.getElementById("d").value;
    var sum = num+"+"+num2+"+"+num3+"+"+num4;
    sum = eval(sum);

    if (sum >= 50 && sum < 55){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ D");
    }else if (sum >= 55 && sum < 60){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ D+");
    }else if (sum >= 60 && sum < 65){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ C");
    }else if (sum >= 65 && sum < 70){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ C+");
    }else if (sum >= 70 && sum < 75){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ B");
    }else if (sum >= 75 && sum < 80){
        alert("คะแนนรวมของคุณคือ "+sum+"\nเกรดของคุณคือ B+");
    }else if (sum >= 80){
        alert("คะแนนรวมของคุณคือ "+sum+"\nขอแสดงความยิดดีด้วย \nเกรดของคุณคือ A");
    }else{
        alert("คะแนนรวมของคุณคือ "+sum+"\nขอแสดงความเสียใจด้วย \nเกรดของคุณคือ F");
    }

}