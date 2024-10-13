$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('fade-out');
    });

    // Formulario de contacto
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Aquí normalmente se enviaría el formulario a un servidor
        // Para este ejemplo, simplemente mostraremos el mensaje de éxito

        // Mostrar mensaje de éxito
        $('#success-message').addClass('show');

        // Ocultar mensaje después de 3 segundos
        setTimeout(function() {
            $('#success-message').removeClass('show');
        }, 3000);

        // Limpiar formulario
        $('#contact-form')[0].reset();
    });

    // Animaciones al hacer scroll
    $(window).scroll(function() {
        $('.animate__animated').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate__fadeIn');
            }
        });
    });
});