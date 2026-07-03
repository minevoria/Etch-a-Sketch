# Etch-a-Sketch

This is my 4th project from The Odin Project. I will start to demonstrate my DOM manip skills here.


#### note to self

Event delegation from RPS that is the bubbling technique can be used on the parent to handle all the buttons at once
instead of each button can be used to simplify the code further.

The first code draft from 2025 isnt the proudest code

Example:
```
jsbuttonContainer.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "rainbow":
            rainbowGrids(grids);
            break;
        case "normal":
            normalGrids(grids);
            break;
        case "opaque":
            opaqueGrids(grids);
            break;
        case "reset":
            container.innerHTML = "";
            initiateGrids();
            break;
    }
});
```
BUG:
Also note that eventListeners are piling up.Every time initiateGrids() is called, past me were adding new event listeners on the buttons inside the function — they stack up. So if the user resets 5 times, clicking rainbow fires 5 listeners. The button listeners for rainbow/normal/opaque should live outside initiateGrids(), referencing the grids dynamically instead.
Also the resetBtn listener inside gridAdjustor does the same thing — nested listener that stacks on each click.

FIX; Use .removeEventListener method before adding them! or just move them inside InitiateGrids()
```
const grids = document.querySelectorAll(".container div");

rainbowBtn.addEventListener("click", () => rainbowGrids(grids));
normalBtn.addEventListener("click", () => normalGrids(grids));
```
```
rainbowBtn.removeEventListener("click", rainbowHandler);
rainbowBtn.addEventListener("click", rainbowHandler);
```