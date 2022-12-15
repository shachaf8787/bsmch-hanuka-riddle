import { nanoid } from "nanoid";

export class Gradients {
  constructor(id, count) {
    this.id = id;
    this.count = count;
  }

  getGradientArray() {
    const gradientArray = Array(this.count)
      .fill("")
      .map(() => {
        const newId = this.id + "-" + nanoid();
        return {
          id: newId,
          href: `#${newId}`,
          url: `url(#${newId})`,
        };
      });
    return gradientArray;
  }
}
