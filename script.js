
const datos = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae \
delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const web = 'En la ruta de desarrollo web me capacité como Frontend developer, aprendiendo las siguientes habilidades:<br></br><ul><li>HTML, CSS y Javascript</li><li>Diseño Responsive</li><li>Transformaciones y transiciones CSS</li><li>Flexbox y Grid</li><li>Bootstrap</li><li>ES6 y Javascript Engine V8</li><li>Chrome Devtools</li><li>Programación Oriendata a Objetos</li><li>Estructuras de datos JS</li></ul>'

const cripto = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const ingles = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const software = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const softskills = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const inclusion = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const design = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const escuelas = [
    {
        'Titulo':'Ciencia de datos',
        'Parrafo': datos,
    },
    {
        'Titulo':'Desarrollo web',
        'Parrafo': web,
    },
    {
        'Titulo':'Criptomonedas',
        'Parrafo': cripto,
    },
    {
        'Titulo':'Inglés',
        'Parrafo': ingles,
    },
    {
        'Titulo':'Desarrollo de Software',
        'Parrafo': software,
    },
    {
        'Titulo':'Habilidades blandas',
        'Parrafo': softskills,
    },

]

const titulo_end = ' <span onclick="modalDeactivated()"></span>'


function modalActivated(valor)
{
    document.querySelector('.titulo-modal').innerHTML = escuelas[valor].Titulo + titulo_end;
    document.querySelector('.parrafo-modal').innerHTML = escuelas[valor].Parrafo;

    document.getElementById('overlay').style = 'display:block';
    setTimeout(function(){
        console.log("Hola Mundo");
        document.getElementById('modal').classList.add('activado');
    }, 20);

}

function modalDeactivated()
{
    document.getElementById('overlay').style = 'display:none';
    document.getElementById('modal').classList.remove('activado');

}


