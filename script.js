
const datos = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae \
delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

const web = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et iusto debitis modi maiores molestias, hic unde labore dolores recusandae delectus aut aliquam omnis nemo cum fuga enim similique beatae?'

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


