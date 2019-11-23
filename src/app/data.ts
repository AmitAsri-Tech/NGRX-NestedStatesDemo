
export class Data {
  private state: {
    products:
    {
      pizzas:
      {
        entities: {
          1: { name: string; id: number; };
          2: { name: string; id: number; };
        };
      };
    };
  };

  get State() {
    return this.state;
  }

  constructor() {
    this.state = {
      products: {
        pizzas: {
          entities: {
            1: { name: 'Pizza 1', id: 1 },
            2: { name: 'Pizza 2', id: 2 },
          },
        },
      },
    };
  }
}
