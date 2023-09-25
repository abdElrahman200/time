$(document).ready(function(){

    function showtime(){
        let date =new Date();
        let hours = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let ses ='AM';

        if(hours==0){
            hours==12
        }
        if(hours>=12){
            ses='pm'
        }
        if(hours>12){
            hours = hours -12;

        }

        hours = hours <10 ? '0' + hours : hours;
        min = min <10 ? '0' + min : min;
        sec = sec <10 ? '0' + sec : sec;

        $('#Hours').text(hours);
        $('#min').text(min);
        $('#second').text(sec);
        $('#period').text(ses);

        setTimeout(showtime,1000)
        
    }
    showtime()
})