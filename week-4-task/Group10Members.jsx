import React from 'react';

const Group10Members = () => {
 
  const Members = [
    "Liya Tsegaye Hagos",
    "Maedot Amha Alemu",
    "Mahlet Hailu",
    "Meklit Melkamu",
    "Michael Workineh Abebe",
    "Miheret berhanu",
    "Misganaw Tesfaye",
    "Mistere Nesibu",
    "Nahom ketsela Tadesse",
    "Nahom Teshome Mekonnen",  
];


const Studentsmap = Members.map(function (name, index) {
  return (
    <p>
      Members {index + 1} {name}
    </p>
  );
});
return (
  <>
    <div className="student">{Studentsmap}</div>
  </>
);
}
export default Group10Members;