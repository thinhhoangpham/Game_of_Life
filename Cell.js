class Cell {
    constructor(x, y, size, live) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.live = live;
        this.willlive = live;
        this.neighbors = [];
    }

    isAlive() {
        return this.live;
    }

    makeAlive(alive) {
        this.live = alive;
    }

    setNeighbors(neighbor) {
        this.neighbors.push(neighbor);
    }

    getNeighbors() {
        return this.neighbors;
    }

    display() {
        //noStroke();
        if (this.live == true) {
            fill(0);
        }
        else {
            fill(220);
        }
        rect(this.x * this.size, this.y * this.size, this.size);
    }

    update() {
        this.liveneighbors = 0;
        for (let i =0; i < this.neighbors.length; i++) {
            if (this.neighbors[i].isAlive() == true) {
                this.liveneighbors++;
            }
        }

        if (this.live == true) {
            if (this.liveneighbors < 2) {
                this.willlive = false;
            }
            else if (this.liveneighbors > 3) {
                this.willlive = false;
            }
            else if (this.liveneighbors === 2 || this.liveneighbors === 3) {
                this.willlive = true;
            }
        }
        else {
            if (this.liveneighbors === 3) {
                this.willlive = true;
            }
        }
    }

    nextgen() {
        if (this.willlive == true) {
            this.live = true;
        }
        else {
            this.live = false;
        }
    }
}