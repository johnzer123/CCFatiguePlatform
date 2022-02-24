/**
 * ccfatigue
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The Plots model module.
 * @module model/Plots
 * @version 0.1.0
 */
class Plots {
  /**
   * Constructs a new <code>Plots</code>.
   * Defines all plots types returned
   * @alias module:model/Plots
   */
  constructor() {
    Plots.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Plots</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Plots} obj Optional instance to populate.
   * @return {module:model/Plots} The populated <code>Plots</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Plots();

      if (data.hasOwnProperty("stress_strain")) {
        obj["stress_strain"] = ApiClient.convertToType(
          data["stress_strain"],
          Object
        );
      }
      if (data.hasOwnProperty("creep")) {
        obj["creep"] = ApiClient.convertToType(data["creep"], Object);
      }
      if (data.hasOwnProperty("hysteresis_area")) {
        obj["hysteresis_area"] = ApiClient.convertToType(
          data["hysteresis_area"],
          Object
        );
      }
      if (data.hasOwnProperty("stiffness")) {
        obj["stiffness"] = ApiClient.convertToType(data["stiffness"], Object);
      }
    }
    return obj;
  }
}

/**
 * @member {Object} stress_strain
 */
Plots.prototype["stress_strain"] = undefined;

/**
 * @member {Object} creep
 */
Plots.prototype["creep"] = undefined;

/**
 * @member {Object} hysteresis_area
 */
Plots.prototype["hysteresis_area"] = undefined;

/**
 * @member {Object} stiffness
 */
Plots.prototype["stiffness"] = undefined;

export default Plots;