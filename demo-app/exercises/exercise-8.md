# Exercise 8

GitHub: https://github.com/t4d-classes/react-redux_02172020

1. Create a new component named Car Edit Row. Car Edit Row is similar to Car View Row except the make, model, year, color and price columns contain input fields populated with the car data. The actions column should have two buttons: "Save" and "Cancel". Display the buttons but do not implement them. The user should be able to change the values in the input fields.

2. In the Car View Row component, add a new button next to the Delete button with a label of "Edit". When the "Edit" button is clicked, the Car View Row is replaced with the Car Edit Row for that car row.

Only one row is editable at a time. Ensure your data structure only allows one car to be edited at a time.

The Car Edit Row component should NOT be referenced in Car View Row, and vice versa

3. Ensure it works. (all of the existing functionality should still work)

## Bonus

1. Code the Car Table to allow the edit mode of a row to a different Car Edit Row component. By default, the Car Table should use Car Edit Row. But, code Car Table to allow an alternative version to be specified. For the alternative version utilize the Car Form component (you may need to make changes) to be used for editing rows as well.
