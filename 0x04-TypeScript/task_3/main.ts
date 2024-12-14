/// <reference path="js/crud.d.ts" />

// Import types and functions
import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud";

// Create a row object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row object with the age field added
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);
