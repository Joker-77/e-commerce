class Car {
  brand: string;
  model: number;
  constructor(_name: any, _model: number) {
    this.brand = _name;
    this.model = _model;
  }
  present() {
    return "I have a " + this.brand;
  }
  
}
