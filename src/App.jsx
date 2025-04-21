import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZF] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const ZFListItem = ({ zf }) => {
    return (
      <div className="zf">
        <li>
          <img src={zf.img} />
          <ul>{zf.name}</ul>
          <ul>Price: {zf.price}</ul>
          <ul>Strength: {zf.strength}</ul>
          <ul>Agility: {zf.agility}</ul>
          <button onClick={(prop) => handleAddFighter(zf.id)}>Add</button>
        </li>
      </div>
    );
  };

  const ZFListItem2 = ({ zf }) => {
    return (
      <div className="zf">
        <li>
          <img src={zf.img} />
          <ul>{zf.name}</ul>
          <ul>Price: {zf.price}</ul>
          <ul>Strength: {zf.strength}</ul>
          <ul>Agility: {zf.agility}</ul>
          <button onClick={(prop) => handleRemoveFighter(zf.id)}>Remove</button>
        </li>
      </div>
    );
  };

  const handleAddFighter = (add) => {
    let ZFcopy = [...zombieFighters];
    let index = ZFcopy.findIndex((obj) => obj["id"] === add);
    const zf = ZFcopy[index];

    money >= zf.price
      ? (setMoney(money - zf.price),
        team.push(zf),
        (ZFcopy = ZFcopy.filter((zff) => zff.id !== add)))
      : console.log("Not enough money");
    setZF(ZFcopy);
    console.log(team);
  };

  let sum = 0;
  let totalStrength = 0;
  totalStrength = team.reduce((sum, { strength }) => {
    return sum + strength;
  }, 0);

  let totalAgility = 0;
  totalAgility = team.reduce((sum, { agility }) => {
    return sum + agility;
  }, 0);

  const handleRemoveFighter = (rem) => {
    let ZFcopy2 = [...team];
    let index = ZFcopy2.findIndex((obj) => obj["id"] === rem);
    const zf = ZFcopy2[index];

    setMoney(money + zf.price);
    zombieFighters.push(zf);
    ZFcopy2 = ZFcopy2.filter((zff) => zff.id !== rem);
    setTeam(ZFcopy2);
    setZF(zombieFighters);
    console.log(team);
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength {totalStrength} </h2>
      <h2>Team Agility {totalAgility}</h2>
      <h2>Team</h2>

      <ul>
        {team.length === 0
          ? "Pick some team members!"
          : team.map((zf) => <ZFListItem2 key={team.id} zf={zf} />)}
      </ul>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zf) => (
          <ZFListItem key={zombieFighters.id} zf={zf} />
        ))}
      </ul>
    </div>
  );
};

export default App;
