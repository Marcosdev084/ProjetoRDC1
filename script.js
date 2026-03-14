//Criação de timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
       
    },
    });

    tl.to(
        '#fanta',
        {
            top: '120%', //Move o elemento com ID Fanta para 120% do topo
            left: '0%',
        },
        'orange'
    );

    tl.to(
        '#laranja-cortada',
        {
            top: '160%',
            left: '23%',

        },
        'orange'
    );

    tl.to(
        '#laranja',
        {
            width:'15%',
            top: '160%',
            right: '10%',

        },
        'orange'
    );

    tl.to(
        '#folha',
        {
            rotate:'530deg',
            top: '110%',
            left: '70%',

        },
        'orange'
    );

    tl.to(
        '#folha2',
        {
            rotate:'530deg',
            top: '110%',
            left: '0%',

        },
        'orange'
    );

    //criando ota timeline

    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
         //depuração
    },
    });

    //definindo o que acontece quando startar 

    tl2.from(
        '.lemon',
        {
            rotate: '-90deg',
            left: '-100%',
            top: '110%',
        },
        'ca'
    );

    tl2.from(
        '#cocacola',
        {
            rotate: '-90deg',
            left: '-100%',
            top: '110%',
        },
        'ca'
    );

    tl2.from(
        '.lemon2',
        {
            rotate: '90deg',
            left: '100%',
            top: '110%',
        },
        'ca'
    );

    tl2.from(
        '#pepsi',
        {
            rotate: '90deg',
            left: '100%',
            top: '110%',
        },
        'ca'
    );

    tl2.to(
        '#laranja-cortada',
        {
            width: '18%',
            left: '42%',
            top: '204%',
        },
        'ca'
    );

    tl2.to(
        '#fanta',
        {
            width: '35%',
            left: '33%',
            top: '210%',
        },
        'ca'
    );
