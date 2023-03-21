import * as SpelieveInterface from '../../../Interfaces';
export interface DecorationsMapInterface {
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
