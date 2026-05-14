const listaJuegos = [
    {
        "nombre": "Copenhagen",
        "gancho": "Construye las fachadas más coloridas del emblemático puerto de Nyhavn.",
        "objetivo": "Ser el primero en alcanzar o superar los 12 puntos de victoria colocando losetas de fachadas.",
        "preparacion": [
            "Colocar el tablero central de mercado con las cartas de colores boca arriba.",
            "Cada jugador recibe un tablero individual de casa vacío.",
            "Colocar las piezas de fachada (poliminós) por tipos y tamaños al alcance de todos."
        ],
        "comoJugar": [
            "En tu turno debes elegir obligatoriamente UNA de estas dos acciones:",
            "1. Robar 2 cartas de colores adyacentes del mercado central (respetando el límite de mano).",
            "2. Jugar cartas de un mismo color para comprar y colocar una loseta del tamaño equivalente en tu fachada.",
            "Regla de Oro: Las losetas deben colocarse 'cayendo' por gravedad, es decir, apoyadas en la base del tablero o sobre losetas previamente colocadas.",
            "Bonificaciones: Completar filas o columnas otorga puntos (doble si son todo ventanas). Tapar escudos otorga habilidades especiales."
        ],
        "fin": "La partida termina de forma inmediata en el momento en que un jugador llega a 12 puntos o cuando se agota el mazo de cartas de colores."
    },
    {
        "nombre": "Onitama",
        "gancho": "Un duelo de artes marciales puro y elegante en un tablero espiritual.",
        "objetivo": "Capturar al Maestro rival (Vía de la Piedra) o mover a tu propio Maestro a la casilla del templo inicial del oponente (Vía del Arroyo).",
        "preparacion": [
            "Desplegar el tablero tapete de 5x5 casillas.",
            "Cada jugador coloca su Maestro en el centro de su fila inicial y sus 4 Alumnos a los lados.",
            "Barajar las cartas de movimiento. Repartir 2 a cada jugador boca arriba y colocar una quinta carta en el lateral del tablero."
        ],
        "comoJugar": [
            "Los jugadores alternan turnos. En tu turno:",
            "1. Elige una de tus 2 cartas de movimientos disponibles.",
            "2. Mueve una de tus piezas (Maestro o Alumno) siguiendo exactamente el patrón que indica la carta elegida desde su posición actual.",
            "3. Si terminas el movimiento en una casilla ocupada por una pieza rival, la capturas y la sacas del juego.",
            "4. Intercambio: Toma la carta que acabas de usar y colócala en el lateral del tablero. A cambio, toma la carta que estaba esperando en el lateral para usarla en tus próximos turnos."
        ],
        "fin": "La partida concluye inmediatamente cuando un Maestro es capturado o cuando un Maestro logra pisar la casilla de templo inicial del oponente."
    },
    {
        "nombre": "Patchwork (Equipos)",
        "gancho": "Cose una figura en tu mente y haz que tu equipo la descifre en una carrera contra la arena.",
        "objetivo": "Ganar la mayor cantidad de cartas de reto logrando que tus compañeros de equipo adivinen los conceptos antes de que se agote el tiempo.",
        "preparacion": [
            "Dividir a los jugadores en dos equipos equilibrados.",
            "Esparcir todos los parches y retales de cartón de forma caótica en el centro de la mesa.",
            "Colocar el mazo de cartas de concepto boca abajo y el reloj de arena listo."
        ],
        "comoJugar": [
            "El juego se divide en turnos de equipo. En cada turno, un miembro asume el rol de 'Diseñador' (este rol rota cada ronda):",
            "1. El Diseñador roba una carta de concepto en secreto y le da la vuelta al reloj de arena.",
            "2. Debe usar y combinar los parches de cartón sobre la mesa para representar la palabra o concepto de la carta.",
            "Regla de Oro: El Diseñador no puede hablar, hacer ruidos, deletrear ni realizar mímica con su cuerpo. Solo puede interactuar con las piezas.",
            "Si el equipo adivina la palabra antes de que se agote la arena, se quedan la carta como 1 punto."
        ],
        "fin": "La partida termina tras completarse un número acordado de rondas (por ejemplo, cuando todos hayan sido Diseñadores). Gana el equipo con más cartas acertadas."
    },
    {
        "nombre": "King of Tokyo",
        "gancho": "¡Monstruos gigantes, alienígenas y robots destruyendo Tokio a base de bofetadas!",
        "objetivo": "Ser el primer monstruo en acumular 20 Puntos de Victoria o convertirse en el último superviviente en pie.",
        "preparacion": [
            "Cada jugador elige un monstruo y pone sus diales en 10 Puntos de Vida y 0 Puntos de Victoria.",
            "Colocar el pequeño tablero de Tokio en el centro de la mesa.",
            "Revelar 3 cartas de poder de la baraja y dejar los cubos de energía al lado."
        ],
        "comoJugar": [
            "En tu turno, lanza los 6 dados negros. Puedes apartar los dados que te gusten y volver a lanzar el resto hasta 2 veces más (estilo Yahtzee):",
            "- Números (1, 2, 3): Tres iguales otorgan esa cantidad de puntos.",
            "- Rayos: Consigues cubos de energía para comprar cartas con poderes permanentes o efectos inmediatos.",
            "- Corazones: Curan 1 punto de vida (Atención: ¡No puedes curarte si estás dentro de Tokio!).",
            "- Garras: Atacan. Si estás fuera de Tokio, haces daño al que esté dentro. Si estás dentro de Tokio, ¡tu ataque golpea a TODOS los que estén fuera!",
            "Ceder Tokio: Si estás en Tokio y recibes daño de una guarra, puedes decidir salir de Tokio y el atacante se verá obligado a entrar."
        ],
        "fin": "La partida termina al instante si un jugador llega a 20 Puntos de Victoria o si la vida de todos los monstruos menos uno cae a 0."
    },
    {
        "nombre": "Jungle Speed DK",
        "gancho": "El tótem sagrado aguarda en el centro. Mantén la vista fija y los reflejos de acero.",
        "objetivo": "Ser el primer jugador en deshacerse por completo de todas las cartas de su propio mazo.",
        "preparacion": [
            "Repartir equitativamente todas las cartas boca abajo entre los jugadores (formando los mazos individuales).",
            "Colocar el tótem de madera en el centro exacto de la mesa, al alcance de todos."
        ],
        "comoJugar": [
            "Por turnos, cada jugador revela la carta superior de su mazo hacia afuera (para que todos la vean a la vez).",
            "Duelo: En el momento en que dos jugadores tengan bocabajo/bocaarriba cartas con el MISMO SÍMBOLO (los colores no importan, solo la forma), se inicia un duelo de velocidad.",
            "El primero de los dos en atrapar el tótem gana el duelo. El perdedor debe recoger todas las cartas descartadas del ganador, las suyas propias y las acumuladas bajo el tótem, y ponerlas al fondo de su mazo.",
            "Regla de Oro: Si te equivocas y atrapas el tótem (o lo tiras) sin tener un duelo real, sufres un castigo y te quedas con TODAS las cartas descartadas de todos los jugadores de la mesa."
        ],
        "fin": "El juego termina cuando un jugador se queda sin cartas en su mazo y consigue resolver con éxito su último descarte o duelo."
    },
    {
        "nombre": "Mi Primer Frutal",
        "gancho": "¡Cooperad para recolectar las frutas maduras antes de que llegue el cuervo glotón!",
        "objetivo": "Recolectar todas las piezas de fruta de los árboles e introducirlas en la cesta antes de que el cuervo recorra el camino.",
        "preparacion": [
            "Colocar los 4 árboles de cartón en el centro y poner las 4 frutas de madera correspondientes en cada uno.",
            "Montar el circuito del camino de 5 casillas y colocar la figura del cuervo en la casilla de salida.",
            "Colocar la cesta de mimbre al lado de los niños."
        ],
        "comoJugar": [
            "Es un juego cooperativo. En su turno, el jugador activo lanza el dado gigante:",
            "- Color (Rojo, Amarillo, Azul, Verde): Tomas una fruta de ese mismo color del árbol y la metes en la cesta. Si ese árbol ya está vacío, no pasa nada y el turno avanza.",
            "- Cesta: ¡Doble suerte! Eliges cualquier fruta de cualquier árbol y la guardas en la cesta.",
            "- Cuervo: ¡Alerta! El cuervo avanza una casilla por el camino hacia el frutal."
        ],
        "fin": "Victoria colectiva: Todos los árboles se quedan vacíos y las frutas están a salvo en la cesta. Derrota colectiva: El cuervo llega a la última casilla del camino (el frutal) antes de terminar la cosecha."
    },
    {
        "nombre": "Dodo",
        "gancho": "¡El despistado Dodo ha puesto un huevo que rueda colina abajo! ¡Rápido, construid los puentes!",
        "objetivo": "Trabajar en equipo a máxima velocidad para construir todos los puentes necesarios y guiar el huevo a salvo hasta la barca de rescate.",
        "preparacion": [
            "Montar la estructura de la isla montaña y colocar al pájaro Dodo en la cima reteniendo su huevo mecánico.",
            "Colocar todas las fichas redondas de materiales boca abajo alrededor de la montaña.",
            "Dejar los puentes de cartón ordenados al lado de la estructura."
        ],
        "comoJugar": [
            "¡No hay turnos! Es un juego en tiempo real y cooperativo. Al soltar el huevo, este comenzará a bajar muy despacio haciendo eses.",
            "1. Un jugador lanza el dado de materiales.",
            "2. Inmediatamente, debe dar la vuelta a una de las fichas del suelo buscando el material que indica el dado (madera, clavos, cuerdas, bambú...).",
            "3. Si coincide, coloca la ficha en el puente actual que están construyendo y vuelve a lanzar el dado. Si no coincide, le vuelve a dar la vuelta boca abajo y continúa el juego (puede intentar otro jugador o él mismo).",
            "4. Cuando un puente tiene todas sus casillas llenas de fichas correctas, ¡lo encajáis corriendo en la montaña! y pasáis al siguiente puente."
        ],
        "fin": "Victoria: El huevo recorre todas las plataformas y cae sano y salvo dentro de la barca al pie de la montaña. Derrota: El huevo llega al borde de una plataforma sin puente construido y cae al vacío."
    },
    {
        "nombre": "Monza",
        "gancho": "La carrera de bólidos donde la velocidad se calcula combinando colores.",
        "objetivo": "Ser el primer jugador en llevar su coche de carreras a cruzar la línea de meta.",
        "preparacion": [
            "Desplegar el circuito de carreras.",
            "Cada jugador elige un coche de madera de su color y lo sitúa en la parrilla de salida.",
            "Dejar los 6 dados de colores al alcance."
        ],
        "comoJugar": [
            "En tu turno, lanza los 6 dados de colores simultáneamente.",
            "Observa los dados obtenidos. Tienes que avanzar tu coche a la casilla inmediatamente delantera si su color coincide con uno de tus dados.",
            "Puedes encadenar tantos avances como dados tengas que coincidan con las casillas consecutivas de los carriles libres.",
            "Regla de Oro: Puedes cambiar de carril (en diagonal hacia adelante) siempre que esté libre, pero no puedes retroceder ni pisar casillas ocupadas por otros coches."
        ],
        "fin": "El final se detona cuando un jugador llega a la meta. Se termina la ronda en curso para asegurar que todos hayan jugado el mismo número de turnos; en caso de empate, gana quien haya usado menos dados en ese último movimiento."
    },
    {
        "nombre": "Dino Race",
        "gancho": "¡El volcán ha estallado! Salva a tus dinosaurios de la lava y protege el valioso huevo.",
        "objetivo": "Conseguir la mayor cantidad de puntos de victoria poniendo a tus dos dinosaurios a salvo en la meta y reteniendo el huevo.",
        "preparacion": [
            "Montar el circuito con las losetas de terreno y colocar la loseta de volcán al inicio.",
            "Cada jugador coloca sus dos figuras de dinosaurio en la salida.",
            "Entregar 5 cartas de terreno a cada jugador y darle la figura del huevo de dinosaurio al jugador más joven."
        ],
        "comoJugar": [
            "En tu turno, puedes jugar cartas de tu mano para realizar acciones:",
            "- Moverse: Juega una carta que coincida exactamente con el tipo de terreno (desierto, jungla, llanura...) de la siguiente casilla del circuito.",
            "- Fastidiar: Puedes usar cartas especiales para lanzar piedras a otros dinosaurios o robarles cartas.",
            "- El Huevo Pasajero: Si tu dinosaurio se mueve a una casilla donde hay otro dinosaurio, ¡puedes darle el huevo! Quien tenga el huevo roba más cartas, pero si la lava avanza, corre peligro.",
            "Al final del turno, robas cartas hasta tener de nuevo tu mano completa."
        ],
        "fin": "La partida termina cuando todos los dinosaurios han cruzado la meta o han sido devorados por las losetas de lava que avanzan desde atrás. Se suman los puntos de las fichas obtenidas al llegar y extras si salvaste el huevo."
    },
    {
        "nombre": "Zerpientez (Zimbbos)",
        "gancho": "¡El mayor espectáculo del mundo! Elefantes equilibristas desafiando la gravedad.",
        "objetivo": "Ser el jugador que coloque con éxito su última pieza en la pirámide o el que tenga más éxito antes de un colapso.",
        "preparacion": [
            "Colocar la pieza de barra base de madera en el centro de la mesa.",
            "Repartir de forma equitativa los elefantes numerados, payasos y barras de madera restantes entre los participantes."
        ],
        "comoJugar": [
            "Por turnos, cada jugador lanza el dado especial de acciones:",
            "- Número (1, 2, 3): Debes apilar esa cantidad exacta de tus elefantes sobre la estructura.",
            "- Estrella: Colocas una pieza especial de apoyo (una barra de equilibrio de madera o un payaso).",
            "- Elefante Tachado: ¡Turno de descanso! No tienes que colocar nada este turno.",
            "Regla de Oro: Los elefantes deben intentar colocarse siguiendo un orden numérico si es posible para mantener el balance del juego, usando las barras para crear nuevos pisos estables."
        ],
        "fin": "La partida termina inmediatamente con la victoria del jugador que se quede sin piezas primero. Si la torre se derrumba por completo, el jugador que provocó la caída pierde automáticamente y ganan el resto."
    },
    {
        "nombre": "Merienda Jurásica",
        "gancho": "Diplodocus glotones devorando hojas mientras el temible T-Rex asoma los dientes.",
        "objetivo": "Conseguir comer más fichas de hierba que tu rival o lograr eliminar por completo a todos los Diplodocus del tablero del oponente.",
        "preparacion": [
            "Montar el tablero de cuadrícula y rellenar las casillas intermedias con las fichas de hierba boca abajo.",
            "Cada jugador coloca sus 4 figuras de Diplodocus en sus esquinas asignadas.",
            "Dejar las dos figuras de T-Rex fuera del tablero al principio."
        ],
        "comoJugar": [
            "En tu turno dispones de exactamente 2 puntos de acción que puedes gastar en:",
            "1. Mover un Diplodocus de tu color en línea recta tantas casillas como quieras. Si termina sobre una ficha de hierba, se la come, la guarda para puntuar y ejecuta el efecto oculto de la ficha (como invocar al T-Rex).",
            "2. Mover un T-Rex (si ya está en juego) en línea recta. El T-Rex no come hierba, pero si choca con un Diplodocus rival, ¡lo asusta y lo expulsa de vuelta a la reserva del dueño!"
        ],
        "fin": "La partida termina cuando se recolectan todas las fichas de hierba de la mesa (gana quien sume más puntos impresos en ellas) o si un jugador se queda sin ningún Diplodocus en juego."
    },
    {
        "nombre": "Ardillas Voladoras",
        "gancho": "¡Apunta, estira y haz volar a tus ardillas directas al gran nido de bellotas!",
        "objetivo": "Ser el jugador que logre almacenar la mayor cantidad de frutos secos y bellotas en su zona de puntuación.",
        "preparacion": [
            "Colocar la base de la propia caja del juego que sirve como diana y árbol central.",
            "Repartir las ardillas lanzables de plástico/goma a cada participante y agrupar las bellotas en la reserva."
        ],
        "comoJugar": [
            "El juego funciona por rondas de lanzamiento simultáneo o por turnos de habilidad técnica:",
            "1. Posiciona tu ardilla voladora en la rampa de lanzamiento mecánica o muelle del juego.",
            "2. Ajusta la inclinación con tu dedo, calcula la parábola y suelta para catapultar a la ardilla por el aire.",
            "3. Dependiendo de la zona, agujero o rama del árbol central donde aterrice tu ardilla con éxito, cobras de la reserva el tipo de fruto seco correspondiente (avellanas, nueces o las valiosas bellotas)."
        ],
        "fin": "La partida concluye de forma limpia en el momento en que se agotan por completo todas las existencias de frutos secos de la reserva general."
    },
    {
        "nombre": "Crazy Crack",
        "gancho": "¡Mente rápida, manos veloces! El puzle frenético donde los segundos cuentan.",
        "objetivo": "Ser el jugador que consiga reunir más cartas de desafío completando los patrones geométricos antes que nadie.",
        "preparacion": [
            "Colocar el mazo de cartas de desafío boca abajo en el centro de la mesa.",
            "Repartir un juego idéntico de piezas de formas de plástico/madera a cada participante."
        ],
        "comoJugar": [
            "¡Todos juegan al mismo tiempo en un estallido de velocidad mental!",
            "1. Se le da la vuelta a la carta superior del mazo de desafíos, mostrando un patrón o silueta compuesta por figuras.",
            "2. Utilizando tus piezas individuales, debes rotarlas, moverlas y encajarlas a toda prisa para copiar con exactitud milimétrica el dibujo de la carta.",
            "3. En el instante en que lo consigas, debes golpear el centro de la mesa y gritar con fuerza '¡CRAZY CRACK!'. Si tu solución es correcta, te quedas la carta como recompensa."
        ],
        "fin": "El juego finaliza cuando un jugador alcanza un número predeterminado de cartas ganadas (por ejemplo, 5 cartas) o al agotarse por completo el mazo central."
    },
    {
        "nombre": "Conex",
        "gancho": "El dominó evolutivo donde los colores colisionan en ángulos imposibles.",
        "objetivo": "Avanzar más que nadie en el tablero de puntuación perimetral jugando tus cartas con astucia.",
        "preparacion": [
            "Colocar el tablero de puntuación en una esquina y situar los peones de los jugadores en la casilla 0.",
            "Colocar una carta inicial en el centro exacto de una mesa espaciosa. Repartir 5 cartas a cada jugador."
        ],
        "comoJugar": [
            "En tu turno, debes jugar una carta de tu mano superponiéndola parcialmente sobre una carta que ya se encuentre en la mesa.",
            "Regla de Oro: La esquina de la carta que vas a colocar debe coincidir de forma idéntica en color con la zona de la palabra 'CONEX' de la carta inferior. Además, la carta jugada no puede pisar o tapar otros símbolos especiales ni salirse de los límites de la mesa física.",
            "Puntuación: Obtienes los puntos impresos en la esquina que has conectado. Hay multiplicadores de puntos si usas cartas especiales con efectos de riesgo."
        ],
        "fin": "La partida termina inmediatamente cuando un jugador alcanza la puntuación máxima en el tablero o si nadie puede colocar ninguna carta válida por falta de espacio físico en la superficie de juego."
    },
    {
        "nombre": "Torres Errantes",
        "gancho": "Magos despistados corriendo hacia un castillo volador que nunca para de moverse.",
        "objetivo": "Llevar a todos tus magos al interior del Castillo del Cuervo y rellenar por completo tus frascos de pociones mágicas.",
        "preparacion": [
            "Montar las torres de plástico formando un gran círculo en la mesa y colocar el Castillo del Cuervo en su casilla inicial.",
            "Repartir los magos de los jugadores por las torres iniciales y entregar a cada uno una mano de 3 cartas de movimiento junto con sus frascos de poción vacíos."
        ],
        "comoJugar": [
            "En tu turno juegas 2 cartas de tu mano de forma consecutiva. Cada carta te permite realizar una acción determinada:",
            "- Mover un mago: Avanzas uno de tus magos visibles el número de casillas indicadas saltando de torre en torre.",
            "- Mover una torre: ¡Mueves una sección de torre entera! Puedes desplazarla hacia adelante. Si al mover la torre cae encima de casillas con magos, ¡estos quedan atrapados y ocultos en su interior!",
            "Regla de Oro (Pociones): Cada vez que mueves una torre y encierras deliberadamente a uno o más magos (¡pueden ser tuyos o de los rivales!), rellenas uno de tus frascos de poción mágica. Necesitas pociones para poder usar hechizos especiales y para ganar."
        ],
        "fin": "Gana al instante el primer jugador que logre meter a todos sus magos dentro del Castillo del Cuervo (entrando con cuenta exacta) y que tenga todos sus frascos de poción completamente llenos."
    },
    {
        "nombre": "Set",
        "gancho": "Entrena tu cerebro para descubrir la lógica perfecta oculta a simple vista.",
        "objetivo": "Ser el jugador más rápido en identificar y reclamar la mayor cantidad de combinaciones lógicas de tres cartas llamadas 'Sets'.",
        "preparacion": [
            "Barajar el mazo y desplegar una cuadrícula de 12 cartas boca arriba en el centro de la mesa.",
            "Dejar el resto de la baraja a un lado para ir rellenando los huecos."
        ],
        "comoJugar": [
            "¡No hay turnos! Todos juegan a la vez escaneando las cartas con los ojos. Cada carta combina 4 características: Forma (óvalo, onda, diamante), Color (rojo, verde, morado), Número (una, dos o tres formas) y Relleno (sólido, rayado, vacío).",
            "¿Qué es un SET?: Es un grupo de 3 cartas donde CADA UNA de las 4 características debe ser, o bien TOTALMENTE IGUAL en las tres cartas, o bien TOTALMENTE DIFERENTE en las tres cartas.",
            "En el momento en que veas un Set, gritas '¡SET!' y señalas las 3 cartas. Si es correcto, te las quedas y se rellenan los huecos con 3 nuevas cartas del mazo."
        ],
        "fin": "La partida termina cuando el mazo se agota por completo y los jugadores de la mesa se ponen de acuerdo en que ya no es matemáticamente posible formar ningún otro Set con las cartas que quedan en la mesa. Gana quien tenga más cartas."
    },
    {
        "nombre": "Gravity Superstar",
        "gancho": "Saltadores interestelares alterando las leyes de la física para recolectar polvo de estrellas.",
        "objetivo": "Acumular la mayor puntuación recogiendo estrellas y valiosos fragmentos del tablero espacial mientras saboteas a tus rivales.",
        "preparacion": [
            "Montar el tablero modular espacial y sembrar las casillas con estrellas de plástico y fichas de fragmento.",
            "Cada jugador recibe una figura de astronauta y una mano idéntica de cartas de acción de gravedad."
        ],
        "comoJugar": [
            "En tu turno, juegas una carta de tu mano para mover o rotar a tu astronauta:",
            "- Movimiento básico: Avanzas a la izquierda o derecha.",
            "- El Giro de Gravedad: Cambias la orientación de tu personaje en la pantalla. Al hacerlo, ¡la gravedad cambia para ti! Tu personaje caerá en línea recta en la dirección de sus pies hasta que choque contra una plataforma sólida del tablero.",
            "Recolección: Durante tu caída, si atraviesas casillas con estrellas o fragmentos, los recoges inmediatamente de forma automática.",
            "Ataque: Si tu caída finaliza impactando directamente contra el astronauta de otro jugador, lo noqueas, lo expulsas del tablero y le robas parte de sus tesoros."
        ],
        "fin": "La partida termina cuando se agota un número determinado de estrellas del tablero central. El saltador con más puntos acumulados en su reserva es el ganador."
    },
    {
        "nombre": "Dungeon Raiders",
        "gancho": "Adéntrate en la mazmorra, saquea todo el oro que puedas y procura que no te maten tus propios amigos.",
        "objetivo": "Terminar la incursión con la mayor cantidad de oro posible, garantizando no ser el jugador que haya acumulado más heridas de combate.",
        "preparacion": [
            "Montar una mazmorra secreta colocando 5 niveles de juego (cada nivel compuesto por 5 cartas de sala boca abajo y boca arriba).",
            "Cada jugador recibe un personaje inicial con sus estadísticas de vida y monedas, junto con un set idéntico de cartas numeradas del 1 al 5."
        ],
        "comoJugar": [
            "El juego se desarrolla sala por sala a lo largo de los 5 niveles. En cada sala, todos los jugadores seleccionan una carta numérica de su mano (del 1 al 5) y la revelan boca abajo a la vez:",
            "- Salas de Tesoro: El jugador que haya puesto la carta con el número más alto se lleva el botín de oro.",
            "- Salas de Monstruo: Todos deben cooperar sumando sus números para derrotar al monstruo. Si la suma total es menor que la vida del monstruo, ¡este ataca e inflige heridas al jugador (o jugadores) que aportó la carta numérica más baja!",
            "- Salas de Trampa: Tienen efectos especiales automáticos basados en números altos o bajos.",
            "Regla de Oro: Las cartas numéricas usadas no se recuperan hasta cambiar por completo de nivel."
        ],
        "fin": "Tras resolver la última sala del 5º nivel, se realiza el recuento: ¡El jugador con más heridas acumuladas se desangra y queda ELIMINADO automáticamente de la partida (no puede ganar)! Entre los supervivientes, el que tenga más oro se corona vencedor."
    },
    {
        "nombre": "Danger",
        "gancho": "Un desternillante juego de supervivencia absurda ante catástrofes inminentes.",
        "objetivo": "Gestionar tus recursos de defense para ser el último superviviente con vida de la mesa.",
        "preparacion": [
            "Separar las cartas en dos mazos independientes: el mazo de Peligros Absurdos y el mazo de Objetos de Defensa.",
            "Repartir una mano inicial de 5 cartas de objeto y 3 fichas de vida a cada jugador."
        ],
        "comoJugar": [
            "Cada ronda representa una situación de crisis:",
            "1. Se revela la carta superior del mazo de Peligros (ejemplo: 'Invasión de patos mutantes' o 'Meteorito de queso'). La carta indica el daño y los requisitos para salvarse.",
            "2. Todos los jugadores, de forma secreta o por turnos, juegan cartas de objeto de su mano para contrarrestar las exigencias de la catástrofe.",
            "3. Puedes combinar objetos inverosímiles para sumar puntos de defensa. Los jugadores que no alcancen el mínimo requerido para esquivar el peligro pierden fichas de vida."
        ],
        "fin": "La partida concluye inmediatamente en cuanto todos los jugadores menos uno han perdido la totalidad de sus vidas. El último superviviente es proclamado héroe del apocalipsis."
    },
    {
        "nombre": "Happy Mochi",
        "gancho": "Consigue los mejores ingredientes para preparar el menú de pastelitos japoneses más tierno y sabroso.",
        "objetivo": "Sumar la mayor cantidad de puntos de cocina combinando juegos y colecciones de cartas de Mochi al cabo de tres rondas.",
        "preparacion": [
            "Barajar el mazo central de repostería.",
            "Preparar la libreta de puntuación y repartir las cartas iniciales dependiendo del número de comensales."
        ],
        "comoJugar": [
            "El juego utiliza la mecánica de 'Draft' (selección circular) a lo largo de 3 rondas idénticas:",
            "1. Cada jugador recibe una mano de cartas. Elige una carta en secreto y la coloca boca abajo frente a él.",
            "2. Todos revelan su carta elegida a la vez (se queda en su zona de juego para el recuento).",
            "3. El mazo de cartas restante de tu mano se lo pasas en secreto al jugador de tu izquierda, y tú recibes el mazo del jugador de tu derecha.",
            "4. Se repite el proceso hasta que no queden cartas que pasar. Cada tipo de Mochi puntúa de forma distinta: unos piden acumular muchas cartas iguales, otros exigen parejas de ingredientes específicos."
        ],
        "fin": "Al acabar la tercera ronda de juego, se realiza el cómputo global de todas las recetas acumuladas. El repostero con la puntuación más alta gana."
    },
    {
        "nombre": "Agent Avenue",
        "gancho": "Duelo de espionaje de alta tensión: ¿Me estás entregando un informe valioso o es una trampa mortal?",
        "objetivo": "Lograr acumular más puntos reuniendo conjuntos de cartas de información confidencial de tu facción.",
        "preparacion": [
            "Es un juego puramente para 2 jugadores. Barajar el mazo de Agentes e Informes.",
            "Colocar el peón de agente neutral en la casilla central de la avenida de puntuación."
        ],
        "comoJugar": [
            "El juego se basa en la mecánica de 'Yo parto, tú eliges':",
            "1. El jugador activo roba dos cartas del mazo confidencial.",
            "2. Debe ofrecer ambas cartas al rival, pero con una condición obligatoria: coloca UNA carta boca arriba (visible) y la OTRA carta boca abajo (oculta).",
            "3. El oponente analiza la situación y elige cuál de las dos cartas se queda para su zona de juego.",
            "4. El jugador activo se queda obligatoriamente con la carta descartada por el oponente. Las cartas contienen pruebas de espionaje o peligrosas trampas que restan puntos al final si te las tragas."
        ],
        "fin": "La partida termina cuando se agotan por completo todas las cartas del mazo central. Se revelan las cartas ocultas y el jugador con la puntuación neta más alta gana el duelo de agencias."
    },
    {
        "nombre": "3 Capítulos",
        "gancho": "Escribe tu propio cuento de hadas decidiendo el destino de héroes y villanos.",
        "objetivo": "Obtener la puntuación de fantasía más alta combinando las habilidades de tus personajes al completar los tres capítulos de la historia.",
        "preparacion": [
            "Barajar el mazo de criaturas y personajes de fábulas.",
            "Colocar las fichas de puntuación al alcance de todos."
        ],
        "comoJugar": [
            "La partida se estructura rígidamente en 3 fases diferenciadas (Capítulos):",
            "- Capítulo 1 (El Elenco): Los jugadores realizan un proceso de selección 'draft' para reclutar una mano potente de personajes de cuento.",
            "- Capítulo 2 (La Aventura): Se juegan una serie de bazas clásicas de cartas. Los jugadores compiten lanzando personajes a la mesa para ganar rondas y capturar valiosas fichas de misión.",
            "- Capítulo 3 (El Desenlace): Cada jugador despliega sus cartas retenidas y activa sus habilidades de combinación (ejemplo: 'El Lobo puntúa extra si tienes a Caperucita')."
        ],
        "fin": "Gana el jugador que consiga la mayor puntuación de victoria combinada tras calcular los efectos finales del Capítulo 3."
    },
    {
        "nombre": "Skull King",
        "gancho": "¡Yo-ho-ho! Apuesta con precisión matemática cuántas batallas ganarás en los siete mares.",
        "objetivo": "Predecir con exactitud absoluta el número de bazas (rondas de combate) que vas a ganar en cada fase del juego.",
        "preparacion": [
            "Barajar las cartas de juego (compuestas por tres palos de colores, el palo pirata negro de Jolly Roger y cartas especiales de sirenas, piratas y el Rey Calavera)."
        ],
        "comoJugar": [
            "El juego consta de 10 rondas. En la ronda 1 se reparte 1 carta a cada uno; en la ronda 2, dos cartas, y así sucesivamente hasta la ronda 10.",
            "1. La Apuesta Pirata: Tras ver tus cartas, todos los jugadores golpean la mesa tres veces gritando '¡YO-HO-HO!' y en el último golpe muestran con los dedos de su mano cuántas bazas exactas creen que van a ganar en esa ronda.",
            "2. El Combate: Se juegan las cartas siguiendo las reglas tradicionales de bazas (asistir al color). El color negro corta a los colores normales, los Piratas cortan al negro, y el Skull King corta a todos los piratas.",
            "Puntuación: Si aciertas tu apuesta exacta ganas puntos. Si fallas por más o por menos, sufres una penalización enorme de puntos por cada baza de desviación."
        ],
        "fin": "Al concluir la décima ronda de juego, el jugador con el total acumulado más alto en la hoja de puntuación se proclama Almirante Supremo de los Mares."
    },
    {
        "nombre": "Pikit",
        "gancho": "Lanza los dados elementales para invocar monstruos gigantescos y activar sus caóticos poderes.",
        "objetivo": "Sumar la mayor cantidad de puntos de victoria reteniendo las cartas de monstruo con valores más altos al final de la partida.",
        "preparacion": [
            "Desplegar en el centro de la mesa las cartas de monstruo numeradas de forma fija del 2 al 12.",
            "Entregar los dos dados gigantes al jugador inicial."
        ],
        "comoJugar": [
            "En tu turno, lanzas los dos dados elementales. Tienes dos opciones para reclamar cartas del centro utilizando los resultados obtenidos:",
            "Opción A: Sumas los valores de ambos dados y tomas la carta de monstruo que coincida exactamente con el total.",
            "Opción B: Utilizas los valores por separado de cada dado para reclamar dos cartas de monstruo distintas a la vez (una por cada dado).",
            "Uso de Poderes: Las cartas de monstruo que tienes guardadas en tu zona de juego pueden ser descartadas en turnos posteriores para activar efectos devastadores (como obligar a rivales a relanzar dados, robarles cartas o proteger tus propios puntos)."
        ],
        "fin": "La partida finaliza en el mismo instante en que se agotan por completo las cartas de la reserva del centro de la mesa. Se suman los puntos impresos en los monstruos que conserves."
    },
    {
        "nombre": "Tempura",
        "gancho": "¡Devora platos asiáticos a toda velocidad en un buffet libre, pero evita una indigestión!",
        "objetivo": "Ser el comensal astuto que termine la partida con la menor cantidad de fichas de 'indigestión' del juego.",
        "preparacion": [
            "Barajar el mazo de cartas de comida asiática y sazonar metiendo las temidas cartas de 'Indigestión'.",
            "Colocar las fichas de estómago e indigestión en el centro."
        ],
        "comoJugar": [
            "En tu turno, debes jugar cartas de tu plato para continuar el festín gastronómico:",
            "1. Debes jugar una o más cartas de comida que coincidan exactamente en tipo o valor con el plato que inició el jugador anterior.",
            "2. Si consigues jugar cartas con éxito, aumentas la cantidad de comida total de la mesa y le pasas la patata caliente al siguiente jugador.",
            "3. Si no tienes cartas válidas para continuar el combo, te ves obligado a robar cartas del mazo central. Si al robar sacas una carta de 'Indigestión', ¡tu estómago explota! Pierdes la ronda de inmediato y te comes una ficha de penalización."
        ],
        "fin": "El juego concluye en el momento en que un jugador acumula su tercera ficha de indigestión médica. Gana el jugador que tenga menos penalizaciones."
    },
    {
        "nombre": "Unlock Mystery",
        "gancho": "Toda la adrenalina y los rompecabezas de una sala de Escape Room real concentrados en una baraja.",
        "objetivo": "Trabajar de forma cooperativa para desentrañar el misterio, resolver los puzles y escapar con éxito antes de que el temporizador de 60 minutos llegue a cero.",
        "preparacion": [
            "Tener un teléfono móvil o tablet con la aplicación oficial gratuita de 'Unlock!' descargada.",
            "Colocar el mazo de cartas de la aventura elegida boca abajo sobre la mesa sin mirar su contenido bajo ningún concepto."
        ],
        "comoJugar": [
            "Es un juego cooperativo puro en tiempo real guiado por una aplicación:",
            "1. Se inicia la cuenta atrás en la App y se da la vuelta a la primera carta de la aventura, que suele mostrar una habitación inicial con números.",
            "2. Los jugadores buscan esos números en el mazo y revelan las cartas correspondientes.",
            "3. Interacción de Cartas: Combina cartas rojas (mecanismos) y cartas azules (objetos) sumando sus números para obtener un nuevo número de carta (ejemplo: combinar la llave 11 con el candado 35 te lleva a buscar la carta 46).",
            "4. Introduce códigos de seguridad, resuelve puzles interactivos y solicita pistas directamente dentro de la App cuando el equipo se encuentre encallado."
        ],
        "fin": "El juego termina con una victoria si conseguís resolver el enigma final y detener el cronómetro de la app a tiempo. Termina en fracaso si el tiempo se agota."
    },
    {
        "nombre": "Smart 10",
        "gancho": "El Trivial definitivo donde no necesitas saberlo todo, solo saber cuándo plantarte.",
        "objetivo": "Acumular la mayor puntuación respondiendo correctamente preguntas de cultura general y gestionando tu nivel de riesgo.",
        "preparacion": [
            "Colocar una tarjeta de preguntas dentro del dispositivo portátil Smart 10.",
            "Asegurarse de que los 10 tapones de plástico negros estén cubriendo todas las respuestas secretas."
        ],
        "comoJugar": [
            "El dispositivo central va pasando de mano en mano entre los jugadores:",
            "1. En tu turno, lees la pregunta central y observas las 10 opciones disponibles distribuidas alrededor del dispositivo.",
            "2. Elige una de las opciones que creas que sabes responder. Dices tu respuesta en voz alta y retiras el tapón de plástico para comprobar si es correcto.",
            "- Si aciertas: Te quedas el tapón como 1 punto provisional y pasas el dispositivo al siguiente jugador.",
            "- Si fallas: ¡Pierdes absolutamente TODOS los puntos y tapones acumulados durante esta ronda! Te quedas con 0.",
            "Plantarse: En tu turno, si ves que la pregunta es muy difícil, puedes decidir pasar voluntariamente para asegurar tus puntos acumulados en la ronda."
        ],
        "fin": "Una ronda termina cuando se retiran los 10 tapones o todos han pasado. Los puntos se anotan en los marcadores físicos de las esquinas del aparato. Gana el primero en alcanzar los 30 puntos totales."
    }
];

// Lógica de renderizado y búsqueda
const contenedor = document.getElementById('contenedor-juegos');
const buscador = document.getElementById('buscador');

function mostrarJuegos(juegosFiltrados) {
    contenedor.innerHTML = '';
    
    if(juegosFiltrados.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; font-size: 1.2rem; margin-top: 40px;">🔍 No se encontró ningún juego con ese nombre.</p>';
        return;
    }

    juegosFiltrados.forEach(juego => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const prepItems = juego.preparacion.map(item => `<li>${item}</li>`).join('');
        const jugarItems = juego.comoJugar.map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
            <h2>${juego.nombre}</h2>
            <div class="gancho">"${juego.gancho}"</div>
            
            <div class="seccion">
                <h3>🎯 Objetivo</h3>
                <p>${juego.objetivo}</p>
            </div>
            
            <div class="seccion">
                <h3>🛠️ Preparación</h3>
                <ul>${prepItems}</ul>
            </div>
            
            <div class="seccion">
                <h3>🎲 ¿Cómo se juega?</h3>
                <ul>${jugarItems}</ul>
            </div>
            
            <div class="seccion">
                <h3>🏁 Fin de Partida</h3>
                <p>${juego.fin}</p>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Escuchador del buscador en tiempo real con menú flotante inteligente
buscador.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase().trim();
    const hero = document.querySelector('.hero');
    
    // Si escribimos algo, la cabecera (logo + título) se encoge a cero de forma fluida
    if (texto.length > 0) {
        hero.classList.add('oculto');
    } else {
        hero.classList.remove('oculto');
    }

    const filtrados = listaJuegos.filter(juego => 
        juego.nombre.toLowerCase().includes(texto) || 
        juego.gancho.toLowerCase().includes(texto)
    );
    mostrarJuegos(filtrados);
});

// Inicialización de la Web App
mostrarJuegos(listaJuegos);