import Building from "./5-building";
export default class SkyHighBuilding extends Building
{
    constructor(sqft,floors)
    {
        super(sqft)
        this._floor=floors;
    }
    get floors()
    {
        return this._floor;
    }
    get sqft()
    {
        return this._sqft
    }
    set sqft(sqft)
    {
        this._sqft=sqft;
    }
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors`;
      }

}