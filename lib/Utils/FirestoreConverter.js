"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreConverter = void 0;
const firestore_1 = require("@firebase/firestore");
const UpgradeSheme_1 = require("UpgradeScheme/UpgradeSheme");
const Common_1 = require("../Consts/Common");
const FirestoreConverter = (model, fromModel, toModel) => ({
    fromFirestore: (snapshot, options) => {
        const json = snapshot.data(options);
        Object.keys(json).forEach((key) => {
            if (json[key] instanceof firestore_1.Timestamp) {
                json[key] = json[key].toDate();
            }
        });
        if (json.ver !== Common_1.VerID && UpgradeSheme_1.upgradeScheme[model.modelID]) {
            return fromModel(UpgradeSheme_1.upgradeScheme[model.modelID](json));
        }
        else {
            return fromModel(model.fromJSON(json));
        }
    },
    toFirestore: (data) => (Object.assign(Object.assign({}, toModel(data)), { updatedAt: new Date(), ver: Common_1.VerID })),
});
exports.FirestoreConverter = FirestoreConverter;
//# sourceMappingURL=FirestoreConverter.js.map