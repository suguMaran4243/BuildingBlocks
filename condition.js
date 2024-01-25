//if and else
let message='JS';
if(message=='JS')
{
    console.log('Hi Js');
}
else
{
    console.log('Pls select!!')
}
const player=document.getElementById('playersss');
const abtPlayer=document.getElementById('abt-player');

player.addEventListener('click',setAbout);

function setAbout()
{
    const choice= player.value;
    if(choice=='kohli')
    {
        abtPlayer.textContent='Run MACHINE'
    }
    if(choice=='rohit')
    {
        abtPlayer.textContent='HIT MAN'
    }
    if(choice=='jaddu')
    {
        abtPlayer.textContent='THALAPATHY'
    }
    if(choice=='gill')
    {
        abtPlayer.textContent='PRINCE'
    }
    if(choice=='bumrah')
    {
        abtPlayer.textContent='BOOM'
    }
    if(choice==' ')
    {
        abtPlayer.textContent='Please select !!'
    }


}
//comparsion operator
let a='SUGU';
let b='SUGU';
console.log(a==b);
let c='JS'
var d= new String('JS')
console.log(c===d)
let e=10
let f=14
if(e>f)
console.log('e is greater');
else
console.log('f is greater');

//logical operator
//&&- AND || -OR

