import { FirestoreDataConverter } from '@firebase/firestore';
export declare const FirestoreConverter: <model, T>(model: {
    modelID: string;
    fromJSON(data: any): model;
}, fromModel: (data: model) => T, toModel: (data: T) => Omit<model, "updatedAt" | "ver">) => FirestoreDataConverter<T>;
