import React from "react";
import ListElement from "./ListElement";

function ListDemo() {
  let names = [
    {
      firstName: "Mike",
      lastName: "Smith",
    },
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];

  /**
   * The {} in the element lets use reference JS in the code
   * Each element in the list must have a key value atrribute that is a unique identifier
   * The second value in a map function is the index of the element, which we can use for the key
   */
  return (
    <>
      {
        /*
                - To display each item in an array to the om we use the map function
                - The map function transforms each item in an array
            */
        names.map((obj, index) => {
          return <ListElement index={index} obj={obj} />;
        })
      }
    </>
  );
}

export default ListDemo;
