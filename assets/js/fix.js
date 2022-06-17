//correção do menu que estava sendo sobreposto pelo quadro top casa fina na header.
//cifrão faz a seleção do jquery no js. dentro irá a classe que queremos criar o evento 
/*iremos criar um evento  o .on fará uma função em que dentro da id #collapse-navbar quando .on for
clicado para show (mostrar).bscollapse teremos a função que pega a classe banner e muda ela de posição com 
o transform translate. Quando for clicado para esconder (hide) ele volta para a posição original note que não
foi preciso criar while.
*/ 
$('#collapse-navbar').on('show.bs.collapse', function(){
    $('.banner').css('transform', 'translate(-50%, 10%)');

    } 
    
)

$('#collapse-navbar').on('hide.bs.collapse', function(){
    $('.banner').css('transform', 'translate(-50%, -50%)');

    } 
    
)