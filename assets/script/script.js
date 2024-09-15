const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars '
}

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementsByClassName("close")[0];

document.getElementById("terms-link").onclick = function (event) {
    event.preventDefault(); 
    modal.style.display = "block";
    modalTitle.innerText = "Términos y Condiciones";
    modalBody.innerHTML = `
    <h3>1. Introducción</h3>
    <p>Bienvenido a [Nombre de tu tienda]. Estos Términos y Condiciones regulan el uso de nuestro sitio web y la compra de productos a través del mismo. Al acceder o utilizar nuestro sitio web, aceptas cumplir con estos términos. Si no estás de acuerdo, por favor no utilices nuestro sitio web.</p>
    
    <h3>2. Productos y Precios</h3>
    <p>Los productos ofrecidos en nuestro sitio web son protectores solares y productos relacionados. Los precios están indicados en la moneda local y pueden variar sin previo aviso. Nos reservamos el derecho de modificar los precios en cualquier momento.</p>
    
    <h3>3. Pedidos y Pago</h3>
    <p>Para realizar un pedido, debes proporcionar información precisa y completa. Aceptamos varios métodos de pago, incluidos tarjetas de crédito, débito y otros métodos especificados en el proceso de pago. Tu pedido será confirmado por correo electrónico una vez procesado.</p>
    
    <h3>4. Envíos</h3>
    <p>Realizamos envíos a nivel nacional/internacional según la disponibilidad y la ubicación. Los plazos de entrega estimados se indican en el proceso de compra. No somos responsables de retrasos ocasionados por terceros.</p>
    
    <h3>5. Devoluciones y Reembolsos</h3>
    <p>Ofrecemos una política de devolución de [número] días. Los productos deben estar en su estado original y en su embalaje original para ser elegibles para una devolución. Los reembolsos se procesarán una vez recibidos y verificados los productos devueltos.</p>
    
    <h3>6. Propiedad Intelectual</h3>
    <p>Todos los derechos de propiedad intelectual en el sitio web y su contenido son propiedad de [Nombre de tu tienda] o de sus proveedores. No se permite la reproducción, distribución o modificación de nuestro contenido sin nuestro consentimiento previo.</p>
    
    <h3>7. Limitación de Responsabilidad</h3>
    <p>No seremos responsables de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar nuestro sitio web o los productos adquiridos.</p>
    
    <h3>8. Modificaciones</h3>
    <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será publicado en el sitio web y se aplicará a los pedidos realizados después de la publicación.</p>
    
    <h3>9. Ley Aplicable</h3>
    <p>Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del [país o estado], sin tener en cuenta sus conflictos de leyes.</p>
    
    <h3>10. Contacto</h3>
    <p>Para cualquier consulta o problema relacionado con estos Términos y Condiciones, por favor contacta a nuestro servicio de atención al cliente a [correo electrónico] o [teléfono].</p>
`;
};

document.getElementById("privacy-link").onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Política de Privacidad";
    modalBody.innerHTML = `
    <h3>1. Introducción</h3>
    <p>En [Nombre de tu tienda], valoramos tu privacidad y estamos comprometidos a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, y protegemos tu información cuando usas nuestro sitio web.</p>
    
    <h3>2. Información que Recopilamos</h3>
    <p>Recopilamos información personal que proporcionas al realizar un pedido, suscribirte a nuestro boletín o ponerte en contacto con nosotros. Esta información puede incluir tu nombre, dirección, correo electrónico y detalles de pago.</p>
    
    <h3>3. Uso de la Información</h3>
    <p>Usamos tu información para procesar pedidos, mejorar nuestro sitio web, enviarte actualizaciones y responder a tus consultas. También podemos utilizar tu información para fines de marketing si has dado tu consentimiento.</p>
    
    <h3>4. Protección de la Información</h3>
    <p>Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.</p>
    
    <h3>5. Compartición de Información</h3>
    <p>No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tu información con proveedores de servicios que nos ayudan a operar nuestro negocio, como empresas de envío y procesamiento de pagos, siempre que estén obligados a mantener la confidencialidad.</p>
    
    <h3>6. Cookies</h3>
    <p>Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación y para analizar el tráfico del sitio. Puedes configurar tu navegador para que no acepte cookies, pero esto puede afectar tu experiencia en el sitio.</p>
    
    <h3>7. Derechos de los Usuarios</h3>
    <p>Tienes derecho a acceder, corregir o eliminar tu información personal. Puedes contactar con nosotros para ejercer estos derechos o para solicitar más información sobre el tratamiento de tus datos.</p>
    
    <h3>8. Cambios en la Política</h3>
    <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web. Te recomendamos que revises esta política periódicamente.</p>
    
    <h3>9. Contacto</h3>
    <p>Si tienes preguntas o inquietudes sobre nuestra Política de Privacidad, por favor contáctanos a [correo electrónico] o [teléfono].</p>
`;
};

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
