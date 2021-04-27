$(document).ready(function () {

    //RESET
    
    $('#reset').click(function (){
        $('img').animate({top: '0px', left: '0px'},1500)
        $('img').rotate({animateTo: 0,duration: 3000})
        value = 0
    })


    //DIRECCION 
    $('#arriba').click(function (){
        $('img').animate({top: '-=200px'}, 500)
    })

    $('#abajo').click(function (){
        $('img').animate({top: '+=200px'}, 500)
    })

    $('#derecha').click(function (){
        $('img').animate({left: '+=200px'}, 500)
    })
    
    $('#izquierda').click(function (){
        $('img').animate({left: '-=200px'}, 500)
    })

    /*NOTA: Al controlar las 4 direcciones es muy propenso a desfase o que no tenga el funcionamiento deseado
            por ello se ocupa 1 direccion para horizontal y una para vertical(top,left)*/ 
    
    //ROTACIÓN

    var value = 0;
    $('#izquierda2').click(function (){
        value -= 90
        $('img').rotate({animateTo: value,duration:1000});
    })

    $('#derecha2').click(function (){
        value += 90
        $('img').rotate({animateTo: value,duration:1000});
    })


    //TAMAÑOS
    $('#normal').click(function (){
        $('img').animate({width: '200px', height:'300px'},'fast')
    })   

    $('#aumentar').click(function (){
        $('img').animate({width: '+=20px',height: '+=30px'},'fast')
    })

    $('#reducir').click(function (){
        $('img').animate({width: '-=20px', height: '-=30px'},'fast')
    })


    //VISIVILIDAD
    $('#visible').click(function (){
        $('img').animate({opacity: "1"},500)
    })

    $('#invisible').click(function (){
        $('img').animate({opacity: "0"},500)
    })
});