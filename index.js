class Circle {
  constructor(radius) {
    this.radius = radius
  };

  // GETTER METHODS

  get diameter() {
    return (this.radius * 2);
  };

  get circumference() {
    return (Math.PI * this.diameter);
  };

  get area() {
    return (Math.PI * (this.radius * this.radius));
  };

  // SETTER METHODS

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  };

  set circumference(newCircumference) {
    this.radius = (newCircumference / Math.PI) / 2;
  };

};