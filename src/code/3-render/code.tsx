import { useEffect, useState } from "react";
import styles from "./code.module.css" // On importe un module de style depuis code.module.css

const Counter = () => {
  const [
    counter, // Variable read-only d'accès à la valeur
    setcounter, // Callback pour la modification
  ] = useState<number>(0); // Déclaration du useState dont le type sera number et la valeur par défaut à 0

  const handleIncrement: () => void = () => setcounter((c) => c++); // On définit une fonction que l'on passera à un autre composant pour incrémenter le compteur
  return (
    <div>
      <p>Voici un compteur dont la valeur est : {counter}</p>
      <CounterButton
        data={counter}
        increment={handleIncrement}
      ></CounterButton>{" "}
      //On voit l'intêret d'utiliser une fonction fléchée pour la passer ici en
      paramètre
    </div>
  );
};

type CounterButtonProps = {
  data: number;
  increment: () => void; // Notre fonction d'incrément, une fois appelée, elle déclenchera le re-rendu complet de Counter
};

const CounterButton = ({ data, increment }: CounterButtonProps) => {
  return (
    <button onClick={increment}>Le compteur vaut {data}</button> // On appelle la fonction increment passé en prop lors de l'appel du composant, celle-ci influe dans notre cas dans le composant Counter, où l'accès à toute sa logique est disponible
  );
};

const RegisterForm = () => {
  const [email, setemail] = useState<string | undefined>(); // On met string ou undefined car il n'est pas initialisé
  const [password, setpassword] = useState<string | undefined>();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ce type est un type inclus dans React, il permet de récupérer des informations sur le contenu de l'input
    setemail(e.target.value); // Ici on accède à la valeur du champ
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };
  return (
    <form>
      <InputField
        type="email"
        onChange={(e) => handleEmailChange(e)}
      ></InputField>
      <InputField
        type="password"
        onChange={(e) => handlePasswordChange(e)}
      ></InputField>
    </form>
  );
};

type InputFieldProps = {
  type: "email" | "password"; // Ici et pour notre simple exemple, on force le type à être un string de valeur email ou password
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; //Notre callback pour bien changer la valeur de nos variables dans le composant parent
};

const InputField = ({ type, onChange }: InputFieldProps) => {
  return <input type={type} name={type} onChange={onChange} />;
};

/*
 * Nous allons à présent recoder notre compteur mais avec un effet de bord qui influera sur le style du compteur
 */

const EffectCounter = () => {
  const [counter, setcounter] = useState<number>(0); // Notre state de compteur classique
  const [isOdd, setisOdd] = useState<boolean>(false);

  const counterEffect = () => {
    //Lorsqu'une dépéndance de l'effet changera, cette fonction sera éxécutée
    setisOdd((i) => !i);
  };

  const handleIncrement = () => setcounter((c) => c++);

  const counterEffectDependencies = [counter]; // Ici, on inclue en dépendances le state counter, alors la fonction sera éxécutée au changement de counter

  /*
   * Classiquement on écrit directement la fonction et le tableau dans les paramètres du useEffect, je les ai séparés ici pour clarifier le concept
   */

  useEffect(counterEffect, counterEffectDependencies);

  return (
    <div>
      <p>Valeur du compteur : {counter}</p>
      <button onClick={handleIncrement} className={isOdd ? styles.oddStyle : styles.evenStyle}>Click</button> // On change le style en fonction de isOdd
    </div>
  );
};
