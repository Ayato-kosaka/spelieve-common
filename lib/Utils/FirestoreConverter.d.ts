import { FirestoreDataConverter } from '@firebase/firestore';
export declare const FirestoreConverter: <model, T>(model: {
    fromJSON(data: any): model;
}, fromModel: (data: model) => T, toModel: (data: T) => model) => FirestoreDataConverter<T>;
