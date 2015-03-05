import DS from "ember-data";
import ENV from "../config/environment";

export default DS.ActiveModelAdapter.extend ({
  host: ENV.adapterURL
  });

// export default DS.LSAdapter.extend ({
//     });
