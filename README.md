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