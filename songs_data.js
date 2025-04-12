// Datos de las canciones dedicadas
const songs = [
    {
            title: "Marry You",
            artist: "Bruno Mars",
            meaning: "karime esta canción me hace imaginar una vida entera contigo llena de decisiones impulsivas pero llenas de amor como cuando uno se deja llevar por el corazón sin pensarlo demasiado porque cuando estoy contigo siento que nada necesita planearse tanto porque todo fluye de manera perfecta cuando estás a mi lado y me pasa que escucho a bruno y pienso en cómo te miraría si estuviéramos frente a frente en una iglesia o en la playa o en cualquier lugar sin nadie más solo tú y yo y el universo bendiciendo lo que sentimos porque no se trata de anillos ni vestidos ni votos perfectos se trata de lo que me haces sentir con cada abrazo con cada sonrisa con cada gesto pequeño que me recuerda por qué no quiero pasar ni un solo día de mi vida lejos de ti porque cuando él dice hey baby I think I wanna marry you yo solo puedo pensar en gritarle al mundo que tú eres la persona que quiero tener a mi lado en todos los momentos bonitos y en todos los difíciles porque tú eres mi compañera mi cómplice mi mejor amiga mi amor de todos los días y de todas las noches tú eres esa persona con la que quiero decir sí sin pensarlo con la que quiero bailar bajo la lluvia con la que quiero tomar decisiones locas y tiernas porque la vida contigo es una aventura donde todo lo simple se vuelve mágico y todo lo mágico se vuelve posible. ",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/marry_you.mp3",
            coverImage: "https://i.ibb.co/mrwfyv3K/IMG-20241119-WA0018.jpg",
            specialMoment: "Cada vez que escucho esta canción, me imagino diciendo 'sí, quiero' a una vida llena de aventuras contigo. Porque contigo, todo es posible y todo se siente especial",
            isPlaying: false
        },
        {
            title: "Apokaluz",
            artist: "Jairo Vera",
            meaning: "karime esta canción me revienta por dentro porque tiene esa crudeza que a veces también tiene el amor real ese amor que no se pinta bonito pero que se siente hasta en los huesos ese amor que te rompe y te cura al mismo tiempo ese que me haces sentir tú porque tú me has visto como nadie más me ha visto tú has estado en mis días más oscuros en mis caídas en mis silencios y en mis tormentas y no solo no huiste sino que te quedaste firme amándome incluso cuando yo no sabía cómo amar de vuelta y eso para mí vale más que mil promesas tú me enseñaste que el amor no es perfecto que hay días donde uno no sabe cómo seguir pero si se tiene a alguien como tú a alguien que se queda que abraza que espera entonces todo tiene sentido porque tú me sostienes con esa paciencia con esa forma tan tuya de entender incluso lo que no digo porque tú eres la razón por la que sigo intentando por la que me esfuerzo por cambiar por crecer porque tú me haces querer ser mejor y no por obligación sino porque quiero ser digno de ese amor que me das cada día y por eso apokaluz me representa tanto porque aunque el mundo esté oscuro tú siempre me prendes la luz. iluvyu ",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/apokaluz.mp3",
            coverImage: "https://i.ibb.co/93b8WdrG/AGC-20250214-173850853.jpg",
            specialMoment: "Esta canción refleja lo que somos, Karime: un amor único, auténtico, que no sigue reglas, pero que siempre será fuerte y verdadero",
            isPlaying: false
        },
        {
            title: "fell in luv",
            artist: "Playboi Carti",
            meaning: "karime esta canción es como un recuerdo acelerado de todos esos momentos donde me fui enamorando de ti sin darme cuenta al principio como si de repente tus ojos tu risa tu forma de hablar se hubieran metido en mi cabeza sin pedir permiso y desde entonces no salieron más y ahora no hay una sola parte de mi vida donde tú no estés presente porque tú apareciste y lo cambiaste todo me diste un nuevo ritmo una nueva forma de ver el mundo y hasta mi forma de amar cambió contigo porque me enseñaste que se puede querer sin miedo sin condiciones y sin medida y esta canción que suena como un viaje como una emoción desbordada me recuerda exactamente a eso a la forma en que me dejé llevar por ti a cómo me fui cayendo en tus brazos cada día un poco más hasta darme cuenta que ya no podía salir y tampoco quería salir porque amarte es lo mejor que me ha pasado porque tú eres mi obsesión sana mi adicción linda mi amor intenso mi locura favorita tú eres la razón por la que el mundo ahora se ve distinto más brillante más profundo más vivo y más tú, teamo tanto, realmente estoy y me tiene fell in luv jiji :3",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/Fell_In_Luv.mp3",
            coverImage: "https://i.ibb.co/vv3z1HxL/AGC-20250214-191359478.jpg",
            specialMoment: "Cada vez que escucho esta canción, siento cómo me sigo enamorando de ti, como si fuera la primera vez.",
            isPlaying: false
        },
        {
            title: "You",
            artist: "Romeo Santos",
            meaning: "karime esta canción es tan directa tan clara tan honesta como lo que siento por ti porque cuando romeo canta sobre esa persona que lo tiene completamente entregado yo entiendo cada palabra porque tú me tienes así completamente entregado rendido enamorado en cuerpo y alma porque tú eres la razón por la que me levanto con ganas de ser mejor tú eres ese pensamiento que me acompaña al despertar y ese último suspiro antes de dormir tú estás en cada decisión en cada meta en cada sueño porque todo lo que hago lo quiero hacer contigo y para ti porque tú me haces sentir amado de una forma que nunca pensé que existía tú me haces sentir suficiente tú me haces sentir que puedo con todo mientras te tenga a mi lado porque tú eres mi tú la única persona a la que le entregaría mi corazón una y otra vez sin miedo sin condiciones sin medida porque cuando tú llegaste a mi vida todo cambió todo tomó forma sentido color tú le diste dirección a mi caos tú le diste calma a mis pensamientos y por eso esta canción es para ti porque eres tú y no hay nadie más que pueda ocupar ese lugar, te adoro mi princesa.",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/you.mp3",
            coverImage: "https://i.ibb.co/WWnXMDGc/IMG-20241107-WA0004.jpg",
            specialMoment: "Tú eres el ‘tú’ en mi vida, Karime, la razón de todo mi amor, y cada vez que escucho esta canción, pienso en lo afortunado que soy de tenerte.",
            isPlaying: false
        },
        {
            title: "Congratulations",
            artist: "Mac Miller",
            meaning: "Mi vida, esta canción la tengo tatuada en el alma porque cada vez que suena es como si contara nuestra historia pero también la de mac y ariana y eso me toca más de lo que puedo explicar porque ellos eran arte juntos y aunque la vida no los dejó quedarse para siempre se notaba que lo que sentían era puro era fuerte era real como lo nuestro y cada palabra que canta mac cada acorde me hace pensar en nosotros en cómo hemos crecido tanto en tan poco tiempo en cómo cada logro tuyo es un orgullo mío y cada paso que doy se siente más firme cuando sé que tú estás ahí viéndome creyendo en mí celebrándome incluso cuando yo no sé cómo hacerlo y esta canción es como una carta de amor a esos momentos donde uno no necesita decir nada solo estar solo sentir y eso me pasa contigo cuando te miro y me doy cuenta que encontrarte fue lo mejor que me pasó porque tú me haces querer seguir soñando tú me haces sentir que todo esfuerzo vale tú me inspiras tú me sanas tú me entiendes incluso cuando no hablo y cuando él dice que no hay odio que no hay dolor que solo hay una especie de paz cuando se ama de verdad yo siento eso por ti una paz que me envuelve que me hace querer cuidarte abrazarte y hacerte feliz todos los días de mi vida porque tú y yo somos eso un amor de verdad de esos que no necesitan ruidos ni promesas vacías porque ya lo dicen los silencios las miradas los gestos pequeños que tenemos un amor que no necesita explicación solo merece celebrarse así como él dice congratulations así te digo yo felicitaciones amor por ser tan tú tan real tan intensa tan mágica por ser mi mejor regalo mi historia favorita mi reflejo más bonito mi compañera de alma, eres lo mas hermoso de mi vida :3.",
            dedicationDate: "2024-01-15",
            audioUrl: "songs/congratulations.mp3",
            coverImage: "https://i.ibb.co/PvVLRvRq/IMG-20241016-231244-733.jpg",
            specialMoment: "Te admiro tanto, Karime. Esta canción es mi forma de felicitarte por ser increíblemente tú, por todo lo que eres y lo que logras.",
            isPlaying: false
        },
        {
            title: "That's What I Like",
            artist: "Bruno Mars",
            meaning: "karime cada vez que escucho esta canción no puedo evitar pensar en todos esos momentos felices que compartimos esos momentos donde solo existimos tú y yo donde la música nos envuelve y nos hace bailar sin preocupaciones y es que contigo todo se siente más liviano más alegre más especial cada vez que estás a mi lado mi vida se llena de ritmo de energía de felicidad le dedico esta canción porque me haces sentir lo que la letra dice me haces sentir que no hay nada mejor que pasar tiempo contigo que hacer cosas juntos que disfrutar de la vida a tu lado porque cuando estoy contigo todo lo que quiero es verte sonreír verte feliz y ser parte de esa alegría que traes a mi vida tú eres mi razón para sonreír mi razón para seguir, mi regalona linda :3, esta cancion es muy horno 120 grados amorcito jj muy yo <3. ",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/thats_what_i_like.mp3",
            coverImage: "https://i.ibb.co/Ld17MPPv/IMG-20250123-WA0048.jpg",
            isPlaying: false
        },
        {
            title: "Antonia",
            artist: "Gondwana",
            meaning: "karime esta canción me hace pensar en esos momentos tranquilos donde todo lo que importa es el presente y donde todo lo que quiero es estar a tu lado la suavidad de la melodía me recuerda a tu dulzura a esa forma tan especial que tienes de hacer que todo sea mejor me haces sentir que cada momento es único cuando estoy contigo eres mi paz mi calma mi todo le dedico esta canción porque como su letra lo que más quiero en este mundo es estar en tu presencia disfrutar de esos momentos sencillos pero tan llenos de amor me haces sentir que no hay nada más importante que vivir el ahora disfrutar lo que tenemos y amarnos sin miedo sin reservas gracias por ser mi refugio por ser mi antonia mi razón para creer en el amor verdadero, mi amorcito, mi ww jiji iluvyu :3. ",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/antonia.mp3",
            coverImage: "https://i.ibb.co/JRLY9gr5/IMG-20241113-WA0020.jpg",
            specialMoment: "Como la melodía de esta canción, tu dulzura me calma y me hace sentir que todo en el mundo está bien cuando estoy contigo.",
            isPlaying: false
        },
        {
            title: "Te Quiero",
            artist: "Hombres G",
            meaning: "Mi amor, cada vez que escucho esta canción, siento que cada palabra y cada acorde expresa perfectamente lo que quiero decirte, pero que a veces las palabras se quedan cortas, este amor que siento por ti es tan simple y tan profundo al mismo tiempo, que no hay necesidad de adornos ni de gestos complicados, solo basta con decirte lo que siento en lo más sencillo y puro: te quiero, te quiero con todo lo que soy, con todas mis imperfecciones, con todo lo que he vivido y todo lo que aún me queda por aprender, y aunque sé que a veces el mundo no es fácil, cuando estoy contigo todo tiene sentido, todo se vuelve claro y hermoso, no necesito más que tu sonrisa, tu risa, tu mirada, para sentir que todo está bien, cada momento contigo es un regalo que quiero atesorar para siempre, porque lo que tenemos es real y verdadero, te dedico esta canción porque, como su letra, lo que siento por ti no necesita ser complicado, es un amor sencillo, sin adornos, pero tan fuerte que nada ni nadie podría deshacerlo, lo que quiero decirte con cada acorde, con cada palabra de esta canción, es que lo que busqué siempre lo encontré en ti, un amor puro, sin reservas, sin miedos, y aunque a veces el camino no sea perfecto, quiero recorrerlo contigo, porque sé que mientras estés a mi lado, cada paso vale la pena, me haces sentir que no necesito más palabras para describir lo que somos, porque todo lo que soy, todo lo que tengo, lo quiero compartir contigo, desde que entraste en mi vida, todo se volvió más bonito, más brillante, y cada día siento que me enamoro más de ti, como dice la canción, lo que siento por ti es tan directo y verdadero que no hay forma de explicarlo más allá de un simple te quiero, te lo digo con el corazón lleno de amor, eres mi todo, mi razón para sonreír, para seguir adelante, para hacer de cada día algo especial, esta canción es mi manera de recordarte que no necesito adornar lo que siento por ti, porque lo que tenemos es lo más hermoso y sincero que he vivido, te quiero, y con cada día que pasa, la quiero más, mi tesorito. ",
            dedicationDate: "2024-03-31",
            audioUrl: "songs/te_quiero.mp3",
            coverImage: "https://i.ibb.co/HTRW34Mj/IMG-20241115-WA0056.jpg",
            specialMoment: "Te quiero de una forma tan sencilla, tan pura, que no hay palabras más perfectas para describir lo que siento por ti.",
            isPlaying: false
        }

];
// Función para obtener todas las canciones
function getAllSongs() {
    return songs;
}

// Función para obtener una canción por su título
function getSongByTitle(title) {
    return songs.find(song => song.title === title);
}