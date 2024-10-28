document.addEventListener("DOMContentLoaded", () => {
    const algorithmSelect = document.getElementById("algorithm-select");
    const shapeSelect = document.getElementById("shape-select");
    const webglContainer = document.getElementById("webgl-container");
  
    algorithmSelect.addEventListener("change", update3DView);
    shapeSelect.addEventListener("change", update3DView);
  
    function update3DView() {
      const algorithm = algorithmSelect.value;
      const shape = shapeSelect.value;
  
      webglContainer.innerHTML = `Displaying ${shape} with ${algorithm} algorithm.`;
      // TODO: Implement WebGL visualization logic
    }
  });
  