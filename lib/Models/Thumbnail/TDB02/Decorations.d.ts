export declare class Decorations {
    static modelName: string;
    static Cols: {
        decorationType: string;
        translateX: string;
        translateY: string;
        rotateZ: string;
        scale: string;
        order: string;
        color: string;
        key: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Decorations;
    decorationType: string;
    translateX: number;
    translateY: number;
    rotateZ: number;
    scale: number;
    order: number;
    color: string;
    key?: string;
    createdAt: Date;
    updatedAt: Date;
}
