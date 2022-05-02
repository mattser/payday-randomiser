import './App.scss';
import Button from './components/Button/Button';
import dataFile from "./assets/data/Data.json";
import React, {useState} from 'react';
import Weapon from './components/Weapon/Weapon';
import Melee from './components/Melee/Melee';
import Throwable from './components/Throwable/Throwable';

const App = () => {

  const mockFn = () => {
    alert("test");
  }

  const primaries = [...dataFile.Data[0].Weapon];
  const secondaries = [...dataFile.Data[1].Weapons];
  const melees = [...dataFile.Data[2].Category];
  const throwables = [...dataFile.Data[3].Category];
  const heists = [...dataFile.Data[4].Category];

  const [heist,setHeist] = useState(false);
  const [primary,setPrimary] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [melee, setMelee] = useState(false);
  const [throwable, setThrowable] = useState(false);

  const pickRandom = (inputArr) => {
    return {...inputArr[Math.floor(Math.random() * inputArr.length )]}
  }
  
  const randomHeist = () => {
    setHeist(pickRandom(heists));
  }


  const randomAll = () => {
    randomHeist();
    randomPrimary();
    randomSecondary();
    randomThrowable();
    randomMelee();
  }

  const randomPrimary = () => {
    setPrimary(randomWeapon(primaries));
  }

  const randomSecondary = () => {
    setSecondary(randomWeapon(secondaries));
  }

  const randomMelee = () => {
    setMelee(pickRandom(melees));
  }

  const randomThrowable = () => {
    setThrowable(pickRandom(throwables));
  }

  const randomWeapon = (weapons) => {
    const loadout = {};
    const temp = {...pickRandom(weapons)}
    loadout.name = temp["Name"];
    loadout.category = temp["Category Name"];
    loadout.pack = temp["Pack"]
    loadout.mods = [];
    for (let mod of temp.Mods) {
      loadout.mods.push({"type":mod.Name, ...pickRandom(mod.Value)})
    }
    return loadout;

  }

  return (
    <div className="App">
      <div className='header'><h1>Payday</h1> <h1 className="blue"> 2 </h1><h1>Randomiser</h1></div>
      <div className='content--inline content'>
        <Button text="Random All" onClick={randomAll}/>
        <Button text="Random Heist" onClick={randomHeist} />
        {heist && <h3>{heist.Heist} ({heist.Contrator})</h3>}
      </div>
      <section className='content'>
        <Button text="Random Primary" onClick={randomPrimary} />
        {primary && <Weapon weapon={primary} />} 
      </section>
      <section className='content'>
        <Button text="Random Secondary" onClick={randomSecondary} />
        {secondary && <Weapon weapon={secondary} />}
      </section>
      <section className='content'>
        <Button text="Random Throwable" onClick={randomThrowable} />
        {throwable && <Throwable weapon={throwable} />}
      </section>
      <section className='content'>
        <Button text="Random Melee" onClick={randomMelee} />
        {melee && <Melee weapon={melee} />}
      </section>
      
    </div>
  );
}

export default App;
