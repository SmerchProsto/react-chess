import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }
    canMove(target: Cell): boolean {
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        if (!super.canMove(target))
            return false
        if (((target.y === this.cell.y + 1 || target.y + 1 === this.cell.y) && target.x === this.cell.x))
            return true
        if  ((target.x === this.cell.x + 1 || target.x + 1 === this.cell.x) && target.y === this.cell.y)
            return true
        if ((Math.abs(target.y - this.cell.y) === 1) && (Math.abs(target.x - this.cell.x) === 1))
            return true

        return false;
    }
}