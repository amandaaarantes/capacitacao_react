// EXERCÍCIOS 1 E 2

type GreetingProps = {
    name: string;
    age: number;
}
function Greeting({name,age} : GreetingProps){
        name = "Amanda";
        age = 18;
        return(

            <div>
                <h1>Olá Mundo!</h1>
                <p>Meu nome: {name} <br />
                Minha idade: {age}</p>
            </div>
        );

}
export default Greeting;