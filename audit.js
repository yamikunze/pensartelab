function startAudit() {
    const ig = document.getElementById('audit-ig').value;
    const problem = document.getElementById('audit-problem').value;

    if (!ig) {
        alert("Por favor, ingresá tu usuario de Instagram para comenzar.");
        return;
    }

    document.getElementById('step-1').style.display = 'none';
    document.getElementById('audit-loading').style.display = 'block';

    const messages = [
        "Leyendo arquitectura de la Bio...",
        "Analizando patrones de engagement...",
        "Evaluando coherencia visual del Grid...",
        "Detectando fortalezas y cuellos de botella...",
        "Generando diagnóstico de laboratorio..."
    ];

    let currentMsg = 0;
    const loadingText = document.getElementById('loading-text');

    const interval = setInterval(() => {
        if (currentMsg < messages.length) {
            loadingText.innerText = messages[currentMsg];
            currentMsg++;
        } else {
            clearInterval(interval);
            showResult(ig, problem);
        }
    }, 1000);
}

function showResult(ig, problem) {
    document.getElementById('audit-loading').style.display = 'none';
    const resultContainer = document.getElementById('audit-result');
    resultContainer.style.display = 'block';

    let report = getStrategicReport(problem);
    let score = report.score;

    resultContainer.innerHTML = `
        <div class="result-header">
            <div class="score-circle">
                <span class="score-num">${score}</span>
                <span class="score-label">Score de Autoridad</span>
            </div>
            <h3>Diagnóstico del Laboratorio: ${ig}</h3>
            <p>${report.summary}</p>
        </div>
        <div class="pillars-grid">
            <div class="pillar-card">
                <i class="fas fa-microscope"></i>
                <h4>${report.p1.title}</h4>
                <p>${report.p1.desc}</p>
            </div>
            <div class="pillar-card">
                <i class="fas fa-dna"></i>
                <h4>${report.p2.title}</h4>
                <p>${report.p2.desc}</p>
            </div>
            <div class="pillar-card">
                <i class="fas fa-flask"></i>
                <h4>${report.p3.title}</h4>
                <p>${report.p3.desc}</p>
            </div>
        </div>
        <div class="result-cta">
            <p>Este diagnóstico detectó que tu marca tiene fortalezas claras, pero le falta aplicar nuestra <strong>Fórmula de Autoridad</strong> para optimizar el cierre de ventas.</p>
            <a href="https://wa.me/541124509399?text=Hola%20Yami!%20Acabo%20de%20hacer%20el%20diagn%C3%B3stico%20para%20${ig}.%20Mi%20Score%20de%20Autoridad%20es%20${score}%20y%20mi%20problema%20es%20que%20${report.waMsg}.%20Me%20gustar%C3%ADa%20hablar%20sobre%20tus%20propuestas." class="cta-button gold">
                <i class="fab fa-whatsapp"></i> Hablar sobre propuestas
            </a>
        </div>
    `;
}

function getStrategicReport(problem) {
    const contents = {
        'leads': {
            score: 88,
            summary: "Tenés una marca con **Alta Autoridad Visual**. Se nota que hay un trabajo bien hecho en el contenido porque la gente llega y consulta. Sin embargo, tenés un 'cuello de botella' en la conversión: estás perdiendo energía en consultas que no cierran. El problema no es el marketing, es el filtro.",
            waMsg: "me llegan mensajes pero no cierro ventas",
            p1: { title: 'Filtro Anti-Curiosos', desc: 'Tu comunicación atrae volumen. Vamos a inyectar "fricción estratégica" para que solo te escriba el que está listo para pagar.' },
            p2: { title: 'Escalera de Confianza', desc: 'Tu propuesta es buena, pero falta claridad en el momento del cierre. Vamos a profesionalizar el embudo de ventas.' },
            p3: { title: 'Optimización de Cierre', desc: 'Tu contenido tiene que hacer el 80% del trabajo. Vamos a lograr que el "Precio?" sea una venta cerrada.' }
        },
        'seguidores': {
            score: 75,
            summary: "Tu cuenta es profesional, pero el algoritmo te tiene en un 'techo'. Tu expertise es real, pero no estás logrando que la audiencia fría dé el clic de seguimiento. Tenés autoridad, pero te falta **alcance estratégico**.",
            waMsg: "tengo pocos seguidores e interacción",
            p1: { title: 'Anzuelos de Autoridad', desc: 'Tus piezas de contenido deben demostrar tu "saber hacer" técnico para retener a los nuevos visitantes.' },
            p2: { title: 'Imán de Nicho', desc: 'Vamos a cerrar el foco. Si le hablás a todos, no atraés a nadie. Vamos por el cliente que realmente factura.' },
            p3: { title: 'Viralidad con Propósito', desc: 'Basta de trends vacíos. Queremos alcance que traiga gente que realmente necesite tu servicio profesional.' }
        },
        'identidad': {
            score: 62,
            summary: "Tu nivel de servicio es premium, pero tu imagen actual no lo refleja. Hay una **incoherencia de marca** que hace que el cliente dude o pida rebajas. Necesitás que tu estética justifique tus precios automáticamente.",
            waMsg: "mi marca se ve poco profesional",
            p1: { title: 'Estética Aspiracional', desc: 'Elevaremos tu imagen para que tu precio no sea un tema de discusión. Imagen = Confianza.' },
            p2: { title: 'Limpieza de Grid', desc: 'Vamos a eliminar el ruido visual. Menos flyers de oferta y más contenido que posicione tu expertise.' },
            p3: { title: 'Storytelling de Valor', desc: 'La gente no compra productos, compra la transformación que generás. Vamos a contar esa historia con autoridad.' }
        },
        'tiempo': {
            score: 58,
            summary: "Sos esclava de tu comunicación y eso frena tu crecimiento. Si tu negocio depende de que vos subas un posteo hoy para vender, tenés un problema de **Sistematización**. Necesitás un método, no más horas.",
            waMsg: "no tengo tiempo para generar contenido",
            p1: { title: 'Método de Captura', desc: 'Diseñaremos un sistema donde grabás una sola vez y tenés contenido estratégico para todo el mes.' },
            p2: { title: 'Gestión por PM', desc: 'Tendrás un Project Manager dedicado que se encargará de que tu marca funcione mientras vos liderás.' },
            p3: { title: 'Autoridad Automatizada', desc: 'Vamos a crear un proceso donde la comunicación de tu marca trabaje sola, incluso cuando vos no estás.' }
        }
    };

    return contents[problem] || contents['leads'];
}
