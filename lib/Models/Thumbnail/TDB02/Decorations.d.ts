import * as SpelieveInterface from '../../../Interfaces';
export declare class Decorations {
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
    createdAt: Date;
    updatedAt: Date;
}
