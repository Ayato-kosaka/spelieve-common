import * as SpelieveInterface from '../../../Interfaces';
export declare class Decorations {
    static modelName: string;
    static Cols: {
        decorationType: string;
        gesture: string;
        maskGesture: string;
        maskUri: string;
        order: string;
        color: string;
        key: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Decorations;
    decorationType: string;
    gesture: SpelieveInterface.DecorationsGestureInterface;
    maskGesture: SpelieveInterface.DecorationsGestureInterface;
    maskUri: string;
    order: number;
    color: string;
    key?: string;
    createdAt: Date;
    updatedAt: Date;
}
