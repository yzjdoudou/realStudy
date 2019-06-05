function doudou(num) {
    let first = 0;
    let second =0;
    num = Math.max(0,num);
    num = Math.min(num,199);
    if(num<=30){
        first =0;
        second= num
    }else{
        for(let i=0;i<=Math.floor(num/30);i++){
            first =30*i;
            second =(i==Math.floor(num/30)?num%30:30);
            console.log(second);
        }
    }
}
doudou(45)