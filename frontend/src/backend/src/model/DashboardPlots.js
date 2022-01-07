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
import Plots from "./Plots";
import TestPlot from "./TestPlot";

/**
 * The DashboardPlots model module.
 * @module model/DashboardPlots
 * @version 0.1.0
 */
class DashboardPlots {
  /**
   * Constructs a new <code>DashboardPlots</code>.
   * Defines data returned to the dashboard
   * @alias module:model/DashboardPlots
   * @param tests {Array.<module:model/TestPlot>}
   * @param plots {module:model/Plots}
   */
  constructor(tests, plots) {
    DashboardPlots.initialize(this, tests, plots);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, tests, plots) {
    obj["tests"] = tests;
    obj["plots"] = plots;
  }

  /**
   * Constructs a <code>DashboardPlots</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardPlots} obj Optional instance to populate.
   * @return {module:model/DashboardPlots} The populated <code>DashboardPlots</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DashboardPlots();

      if (data.hasOwnProperty("tests")) {
        obj["tests"] = ApiClient.convertToType(data["tests"], [TestPlot]);
      }
      if (data.hasOwnProperty("plots")) {
        obj["plots"] = Plots.constructFromObject(data["plots"]);
      }
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TestPlot>} tests
 */
DashboardPlots.prototype["tests"] = undefined;

/**
 * @member {module:model/Plots} plots
 */
DashboardPlots.prototype["plots"] = undefined;

export default DashboardPlots;
