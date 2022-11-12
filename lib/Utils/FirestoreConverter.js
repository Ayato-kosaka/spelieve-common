"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreConverter = void 0;
const firestore_1 = require("@firebase/firestore");
const FirestoreConverter = (model, fromModel, toModel) => ({
    fromFirestore: (snapshot, options) => {
        const json = snapshot.data(options);
        Object.keys(json).forEach((key) => {
            if (json[key] instanceof firestore_1.Timestamp) {
                json[key] = json[key].toDate();
            }
        });
        return fromModel(model.fromJSON(json));
    },
    toFirestore: (data) => (Object.assign(Object.assign({}, toModel(data)), { updatedAt: new Date() })),
});
exports.FirestoreConverter = FirestoreConverter;
//# sourceMappingURL=FirestoreConverter.js.map