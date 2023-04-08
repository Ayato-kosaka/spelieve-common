import * as SpelieveInterface from '../../../Interfaces';
export declare class Decorations {
    static modelID: string;
    static modelName: string;
    static Cols: {
        decorationType: string;
        transform: string;
        maskTransform: string;
        maskUri: string;
        order: string;
        color: string;
        key: string;
        borderColor: string;
        fontFamily: string;
        aspectRatio: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): Decorations;
    decorationType: string;
    transform: SpelieveInterface.DecorationsTransformInterface;
    maskTransform: SpelieveInterface.DecorationsTransformInterface;
    maskUri?: string;
    order: number;
    color: string;
    key?: string;
    borderColor: string;
    fontFamily?: string;
    aspectRatio: number;
    createdAt: Date;
    updatedAt: Date;
}
